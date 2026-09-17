/* js/app.js — динамическое сравнение 1–3 программ */
(function () {
  'use strict';

  const MOBILE_BREAKPOINT = 767;
  const CATEGORY_ORDER = ['prof', 'fgos', 'secondary'];

  const state = {
    facultyId: DATA.faculties[0].id,
    category: 'all',
    course: 'all',
    diffOnly: false,
    highlightDiff: true,
    subjectSearch: '',
    selectedUniIds: [null, null, null]
  };

  const el = {
    facultyFullTitle: document.getElementById('facultyFullTitle'),
    categoryFilter: document.getElementById('categoryFilter'),
    courseFilter: document.getElementById('courseFilter'),
    diffOnlyToggle: document.getElementById('diffOnlyToggle'),
    highlightDiffToggle: document.getElementById('highlightDiffToggle'),
    themeToggle: document.getElementById('themeToggle'),
    uniCards: document.getElementById('uniCards'),
    matrixHead: document.getElementById('matrixHead'),
    matrixBody: document.getElementById('matrixBody'),
    tableScroll: document.getElementById('tableScroll'),
    cardsView: document.getElementById('cardsView'),
    tableEmpty: document.getElementById('tableEmpty'),
    mobileProgramPicker: document.getElementById('mobileProgramPicker'),
    mobileProgramSlots: document.getElementById('mobileProgramSlots'),
    subjectSearch: document.getElementById('subjectSearch'),
    programEmptyState: document.getElementById('programEmptyState'),
    comparisonContent: document.getElementById('comparisonContent'),
    emptyAddProgram: document.getElementById('emptyAddProgram'),
    admissionInfoModal: document.getElementById('admissionInfoModal'),
    admissionInfoContent: document.getElementById('admissionInfoContent')
  };

  function getFaculty() {
    return DATA.faculties.find(f => f.id === state.facultyId);
  }

  function getProgram(id) {
    return getFaculty().universities.find(u => u.id === id);
  }

  function getSelectedPrograms() {
    return state.selectedUniIds.map(getProgram).filter(Boolean);
  }

  function formatZet(value) {
    if (!value) return '—';
    return Number.isInteger(value) ? String(value) : value.toLocaleString('ru-RU');
  }

  function zetDisplay(value) {
    return value ? `${formatZet(value)} ЗЕТ` : 'есть';
  }

  function courseLabel(record) {
    if (!record || !record.courseFrom) return 'Нет в плане';
    if (record.courseFrom === record.courseTo) return `${record.courseFrom} курс`;
    return `${record.courseFrom}–${record.courseTo} курс`;
  }

  function startSemester(record) {
    return record && record.courseFrom ? ((record.courseFrom - 1) * 2 + 1) : null;
  }

  function subjectMatchesCourse(subject) {
    if (state.course === 'all') return true;
    return state.selectedUniIds.some(id => {
      const record = subject.programs[id];
      return record && record.courseFrom && record.courseFrom <= state.course && record.courseTo >= state.course;
    });
  }

  function recordForCourse(subject, programId) {
    const record = subject.programs[programId];
    if (!record) return null;
    if (state.course === 'all') return record;
    if (record.courseFrom <= state.course && record.courseTo >= state.course) return record;
    return null;
  }

  function laterStartText(subject, programId) {
    const record = subject.programs[programId];
    if (!record || state.course === 'all') return null;
    if (record.courseFrom > state.course) {
      return `Начнётся с ${startSemester(record)} сем.`;
    }
    return 'Отсутствует на этом курсе';
  }

  function valuesFor(subject) {
    return state.selectedUniIds.map(id => {
      const r = recordForCourse(subject, id);
      return r ? r.zet : 0;
    });
  }

  function subjectHasDiff(subject) {
    const ids = state.selectedUniIds.filter(Boolean);
    if (ids.length < 2) return false;

    // Сравниваем именно то, что отображается в текущем курсе.
    const records = ids.map(id => recordForCourse(subject, id));
    const present = records.filter(r => r && Number(r.zet || 0) > 0);

    // Если дисциплина отсутствует у всех выбранных программ, контраста нет.
    if (!present.length) return false;

    // Один вуз имеет дисциплину, другой — нет: это значимое различие.
    if (present.length !== records.length) return true;

    const vals = present.map(r => Number(r.zet || 0));
    const max = Math.max(...vals);
    const min = Math.min(...vals);
    if (max <= 0) return false;
    return (max - min) / max > 0.30;
  }

  function significantCell(subject, programId) {
    if (!state.highlightDiff || !subjectHasDiff(subject)) return false;
    const ids = state.selectedUniIds.filter(Boolean);
    const record = recordForCourse(subject, programId);
    const records = ids.map(id => recordForCourse(subject, id));
    const present = records.filter(r => r && Number(r.zet || 0) > 0);

    // В этой строке есть реальный контраст: отсутствует у одного из вузов.
    if (!record || Number(record.zet || 0) <= 0) return true;
    if (present.length !== records.length) return true;

    const vals = present.map(r => Number(r.zet || 0));
    const max = Math.max(...vals);
    const min = Math.min(...vals);
    return max > 0 && (max - min) / max > 0.30;
  }

  function recordStatus(record) {
    if (!record) return '';
    if (record.facultative) return 'факультатив';
    if (record.elective) return 'выборное';
    return '';
  }

  function computeBreakdown(programId) {
    const result = { prof: 0, fgos: 0, secondary: 0, total: 0 };
    getFaculty().subjects.forEach(subject => {
      const r = recordForCourse(subject, programId);
      if (!r) return;
      result[subject.category] += r.zet;
      result.total += r.zet;
    });
    return result;
  }


  function renderSegmented(container, options, current, onChange) {
    container.innerHTML = '';
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'segmented__btn' + (current === opt.id ? ' is-active' : '');
      btn.textContent = opt.label;
      btn.setAttribute('aria-selected', String(current === opt.id));
      btn.addEventListener('click', () => {
        if (current === opt.id) return;
        onChange(opt.id);
      });
      container.appendChild(btn);
    });
  }

  function renderFilters() {
    renderSegmented(el.categoryFilter, [
      { id: 'all', label: 'Все' },
      { id: 'prof', label: 'Профильные (Математика + IT)' },
      { id: 'fgos', label: 'ФГОС / Гуманитарный блок' },
      { id: 'secondary', label: 'Дополнительные дисциплины' }
    ], state.category, value => {
      state.category = value;
      renderFilters();
      renderAllData();
    });

    renderSegmented(el.courseFilter, COURSE_META, state.course, value => {
      state.course = value;
      renderFilters();
      renderAllData();
    });
  }

  function availableIds(exceptIndex) {
    const faculty = getFaculty();
    return faculty.universities
      .map(u => u.id)
      .filter(id => !state.selectedUniIds.some((selected, i) => i !== exceptIndex && selected === id));
  }

  function setSlot(index, value) {
    if (value === '') {
      state.selectedUniIds[index] = null;
    } else {
      const duplicateIndex = state.selectedUniIds.indexOf(value);
      if (duplicateIndex !== -1 && duplicateIndex !== index) {
        state.selectedUniIds[duplicateIndex] = state.selectedUniIds[index];
      }
      state.selectedUniIds[index] = value;
    }
    renderAllData();
  }

  function addProgramSlot() {
    const index = state.selectedUniIds.findIndex(id => !id);
    if (index === -1) return;
    const next = availableIds(index)[0];
    if (next) {
      state.selectedUniIds[index] = next;
      renderAllData();
    }
  }

  function removeProgramSlot(index) {
    state.selectedUniIds[index] = null;
    // Сдвигаем выбранные программы влево, сохраняя максимум три слота.
    const compact = state.selectedUniIds.filter(Boolean);
    while (compact.length < 3) compact.push(null);
    state.selectedUniIds = compact;
    renderAllData();
  }

  function makeProgramSelect(index) {
    const wrap = document.createElement('div');
    wrap.className = 'uni-slot';

    const value = state.selectedUniIds[index];

    if (!value) {
      const add = document.createElement('button');
      add.type = 'button';
      add.className = 'add-program';
      add.textContent = '+ Добавить программу';
      add.addEventListener('click', addProgramSlot);
      wrap.appendChild(add);
      return wrap;
    }

    const program = getProgram(value);
    const dot = document.createElement('span');
    dot.className = 'uni-select__dot';
    dot.style.background = program.color;

    const select = document.createElement('select');
    select.className = 'uni-select__input';
    select.setAttribute('aria-label', `Программа ${index + 1}`);

    const empty = document.createElement('option');
    empty.value = '';
    empty.textContent = 'Не выбрано';
    select.appendChild(empty);

    getFaculty().universities.forEach(option => {
      if (!availableIds(index).includes(option.id) && option.id !== value) return;
      const opt = document.createElement('option');
      opt.value = option.id;
      opt.textContent = option.shortName;
      opt.selected = option.id === value;
      select.appendChild(opt);
    });

    select.addEventListener('change', e => setSlot(index, e.target.value));

    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'slot-remove';
    remove.textContent = '×';
    remove.title = 'Убрать программу из сравнения';
    remove.addEventListener('click', () => removeProgramSlot(index));

    wrap.append(dot, select, remove);
    return wrap;
  }

  function renderMobileProgramPicker() {
    if (!el.mobileProgramSlots) return;
    el.mobileProgramSlots.innerHTML = '';

    state.selectedUniIds.forEach((value, index) => {
      const wrap = document.createElement('div');
      wrap.className = 'mobile-program-slot';

      const label = document.createElement('label');
      label.textContent = `Программа ${index + 1}`;
      label.setAttribute('for', `mobileProgramSelect${index}`);

      const row = document.createElement('div');
      row.className = 'mobile-program-slot__row';

      const select = document.createElement('select');
      select.id = `mobileProgramSelect${index}`;
      select.className = 'mobile-program-select';
      select.innerHTML = '<option value="">+ Добавить программу</option>';

      const allowed = availableIds(index);
      getFaculty().universities.forEach(program => {
        if (!allowed.includes(program.id) && program.id !== value) return;
        const option = document.createElement('option');
        option.value = program.id;
        option.textContent = program.shortName;
        option.selected = program.id === value;
        select.appendChild(option);
      });
      select.addEventListener('change', event => setSlot(index, event.target.value));

      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'slot-remove';
      remove.textContent = '×';
      remove.title = 'Убрать программу из сравнения';
      remove.setAttribute('aria-label', `Убрать программу ${index + 1}`);
      remove.disabled = !value;
      remove.addEventListener('click', () => removeProgramSlot(index));

      row.append(select, remove);
      wrap.append(label, row);
      el.mobileProgramSlots.appendChild(wrap);
    });

    if (!state.selectedUniIds.some(Boolean)) {
      const add = document.createElement('button');
      add.type = 'button';
      add.className = 'add-program';
      add.textContent = '+ Добавить программу';
      add.addEventListener('click', addProgramSlot);
      el.mobileProgramSlots.appendChild(add);
    }
  }

  function renderEmptyProgramState() {
    const hasPrograms = state.selectedUniIds.some(Boolean);
    el.programEmptyState.hidden = hasPrograms;
    el.comparisonContent.hidden = !hasPrograms;
    if (el.mobileProgramPicker) el.mobileProgramPicker.hidden = false;
  }

  function renderTableHead() {
    el.matrixHead.innerHTML = '';
    const row = document.createElement('tr');

    const subjectTh = document.createElement('th');
    subjectTh.className = 'matrix-table__subject-title matrix-table__subject-header';

    const subjectHeader = document.createElement('div');
    subjectHeader.className = 'matrix-table__subject-header-title';
    subjectHeader.textContent = 'Дисциплина';

    const search = document.createElement('label');
    search.className = 'subject-search';
    search.setAttribute('for', 'subjectSearch');
    search.innerHTML = '<span aria-hidden="true">⌕</span>';
    const input = document.createElement('input');
    input.id = 'subjectSearch';
    input.type = 'search';
    input.placeholder = 'Поиск по дисциплинам...';
    input.autocomplete = 'off';
    input.value = state.subjectSearch;
    input.addEventListener('input', event => {
      state.subjectSearch = event.target.value;
      renderTable();
      renderCardsView();
    });
    search.appendChild(input);
    subjectTh.append(subjectHeader, search);
    row.appendChild(subjectTh);

    state.selectedUniIds.forEach((_, index) => {
      const th = document.createElement('th');
      th.className = 'matrix-table__uni-header';
      const value = state.selectedUniIds[index];
      if (value) {
        const program = getProgram(value);
        th.style.setProperty('--uni-color', program.color);
      }
      th.appendChild(makeProgramSelect(index));
      row.appendChild(th);
    });

    el.matrixHead.appendChild(row);
  }

  function filteredSubjects() {
    const faculty = getFaculty();
    return faculty.subjects.filter(subject => {
      if (state.category !== 'all' && subject.category !== state.category) return false;
      if (!subjectMatchesCourse(subject)) return false;

      const query = state.subjectSearch.trim().toLocaleLowerCase('ru-RU');
      if (query && !subject.title.toLocaleLowerCase('ru-RU').includes(query)) return false;

      // Дисциплины, которых нет ни в одной выбранной программе, не показываем.
      // Если предмет есть хотя бы у одного выбранного ВУЗа, строка остаётся.
      const hasRecord = state.selectedUniIds.some(id => id && recordForCourse(subject, id));
      if (!hasRecord) return false;

      if (state.diffOnly && !subjectHasDiff(subject)) return false;
      return true;
    });
  }

  function groupedSubjects(subjects) {
    const groups = Object.fromEntries(CATEGORY_ORDER.map(category => [category, []]));
    subjects.forEach(subject => {
      if (!groups[subject.category]) groups[subject.category] = [];
      groups[subject.category].push(subject);
    });
    return CATEGORY_ORDER
      .filter(category => groups[category]?.length)
      .map(category => ({ category, subjects: groups[category] }));
  }

  function buildCell(subject, programId) {
    const td = document.createElement('td');
    td.className = 'matrix-table__hours';

    if (!programId) {
      td.innerHTML = '<span class="empty-cell">—</span>';
      return td;
    }

    const record = recordForCourse(subject, programId);
    const delayed = laterStartText(subject, programId);

    if (!record) {
      td.classList.toggle('is-significant', significantCell(subject, programId));
      td.innerHTML = delayed ? `<div class="missing-cell missing-cell--delayed"><strong>${delayed}</strong></div>` : '<span class="missing-cell--dash" aria-label="Отсутствует в плане">—</span>';
      return td;
    }

    td.classList.toggle('is-significant', significantCell(subject, programId));

    const inner = document.createElement('div');
    inner.className = 'matrix-table__hours-cell';

    const hours = document.createElement('strong');
    hours.textContent = zetDisplay(record.zet);

    const badge = document.createElement('span');
    badge.className = 'sem-badge';
    badge.textContent = courseLabel(record);

    inner.append(hours, badge);

    const status = recordStatus(record);
    if (status) {
      const type = document.createElement('span');
      type.className = 'type-badge';
      type.textContent = status;
      inner.appendChild(type);
    }

    td.appendChild(inner);
    return td;
  }

  function renderTable() {
    const subjects = filteredSubjects();
    el.matrixBody.innerHTML = '';
    const groups = groupedSubjects(subjects);
    const colSpan = 1 + state.selectedUniIds.length;

    groups.forEach(({ category, subjects: categorySubjects }) => {
      const catRow = document.createElement('tr');
      catRow.className = 'matrix-table__category-row';
      const catCell = document.createElement('td');
      catCell.colSpan = colSpan;
      const catWrap = document.createElement('div');
      catWrap.className = `category-label category-label--${category}`;
      const catIcon = document.createElement('span');
      catIcon.className = 'category-label__icon';
      catIcon.setAttribute('aria-hidden', 'true');
      catIcon.textContent = ({ prof: '⌘', fgos: '§', secondary: '＋' })[category] || '•';
      const catText = document.createElement('span');
      catText.textContent = CATEGORY_META[category].label;
      catWrap.append(catIcon, catText);
      catCell.appendChild(catWrap);
      catRow.appendChild(catCell);
      el.matrixBody.appendChild(catRow);

      categorySubjects.forEach(subject => {
        const tr = document.createElement('tr');
        if (subjectHasDiff(subject) && state.highlightDiff) tr.classList.add('is-diff');

        const title = document.createElement('td');
        title.className = 'matrix-table__subject-title';
        title.textContent = subject.title;
        tr.appendChild(title);

        state.selectedUniIds.forEach(id => tr.appendChild(buildCell(subject, id)));
        el.matrixBody.appendChild(tr);
      });
    });

    const hasData = subjects.length > 0;
    el.tableScroll.hidden = !hasData;
    el.tableEmpty.hidden = hasData;
  }


  function renderCardsView() {
    const subjects = filteredSubjects();
    el.cardsView.innerHTML = '';

    subjects.forEach(subject => {
      const card = document.createElement('article');
      card.className = 'subject-card';
      if (subjectHasDiff(subject) && state.highlightDiff) card.classList.add('is-diff');

      const title = document.createElement('h3');
      title.className = 'subject-card__title';
      title.textContent = subject.title;
      card.appendChild(title);


      const values = document.createElement('div');
      values.className = 'subject-card__values';

      state.selectedUniIds.forEach((id, index) => {
        if (!id) return;
        const program = getProgram(id);
        const record = recordForCourse(subject, id);
        const item = document.createElement('div');
        item.className = 'subject-card__program';
        if (significantCell(subject, id)) item.classList.add('is-significant');

        const name = document.createElement('div');
        name.className = 'subject-card__program-name';
        name.textContent = program.shortName;

        const value = document.createElement('div');
        value.className = 'subject-card__program-value';

        if (record) {
          const status = recordStatus(record);
          value.innerHTML = `<strong>${zetDisplay(record.zet)}</strong><span>${courseLabel(record)}${status ? ` (${status})` : ''}</span>`;
        } else {
          value.innerHTML = laterStartText(subject, id) ? `<strong class="missing-cell--delayed">${laterStartText(subject, id)}</strong>` : '<strong class="missing-cell--dash" aria-label="Отсутствует в плане">—</strong>';
        }

        item.append(name, value);
        values.appendChild(item);
      });

      card.appendChild(values);
      el.cardsView.appendChild(card);
    });
  }

  function buildProgressRing(percent, color) {
    const size = 72, stroke = 8;
    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - percent / 100);

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'uni-card__ring');
    svg.setAttribute('viewBox', `0 0 ${size} ${size}`);

    const track = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    track.setAttribute('cx', size/2); track.setAttribute('cy', size/2); track.setAttribute('r', radius);
    track.setAttribute('fill', 'none'); track.setAttribute('stroke', 'var(--ring-track)');
    track.setAttribute('stroke-width', stroke);

    const arc = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    arc.setAttribute('cx', size/2); arc.setAttribute('cy', size/2); arc.setAttribute('r', radius);
    arc.setAttribute('fill', 'none'); arc.setAttribute('stroke', color);
    arc.setAttribute('stroke-width', stroke); arc.setAttribute('stroke-linecap', 'round');
    arc.setAttribute('stroke-dasharray', circumference); arc.setAttribute('stroke-dashoffset', offset);
    arc.setAttribute('transform', `rotate(-90 ${size/2} ${size/2})`);

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', size/2); text.setAttribute('y', size/2 + 5);
    text.setAttribute('text-anchor', 'middle'); text.setAttribute('class', 'uni-card__ring-value');
    text.textContent = `${percent}%`;

    svg.append(track, arc, text);
    return svg;
  }

  function renderUniCards() {
    el.uniCards.innerHTML = '';
    const programs = getSelectedPrograms();

    el.uniCards.style.gridTemplateColumns = `repeat(${Math.max(1, Math.min(3, programs.length))}, minmax(0, 1fr))`;

    programs.forEach(program => {
      const breakdown = computeBreakdown(program.id);
      const profPercent = breakdown.total ? Math.round(breakdown.prof / breakdown.total * 100) : 0;
      const fgosPercent = breakdown.total ? Math.round(breakdown.fgos / breakdown.total * 100) : 0;

      const card = document.createElement('article');
      card.className = 'uni-card';
      card.style.setProperty('--uni-color', program.color);

      const head = document.createElement('div');
      head.className = 'uni-card__head';
      head.appendChild(buildProgressRing(profPercent, program.color));

      const name = document.createElement('div');
      const h3 = document.createElement('h3');
      h3.className = 'uni-card__name';
      h3.textContent = program.shortName;
      const meta = document.createElement('p');
      meta.className = 'uni-card__meta';
      meta.textContent = `${formatZet(breakdown.total)} ЗЕТ в выбранном периоде`;

      const ratio = document.createElement('p');
      ratio.className = 'uni-card__ratio';
      ratio.innerHTML = `<strong>Профильные предметы:</strong> ${profPercent}% (${formatZet(breakdown.prof)} ЗЕТ) <span>|</span> <strong>ФГОС:</strong> ${fgosPercent}% (${formatZet(breakdown.fgos)} ЗЕТ)`;
      name.append(h3, meta, ratio);
      head.appendChild(name);

      const stats = document.createElement('div');
      stats.className = 'uni-card__stats';
      [
        ['Профиль', `${profPercent}%`],
        ['ФГОС', `${fgosPercent}%`],
        ['Факультативы', `${breakdown.total ? Math.round(breakdown.secondary / breakdown.total * 100) : 0}%`]
      ].forEach(([label, value]) => {
        const item = document.createElement('div');
        item.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
        stats.appendChild(item);
      });

      const admission = document.createElement('button');
      admission.type = 'button';
      admission.className = 'admission-info-trigger';
      admission.innerHTML = '<span aria-hidden="true">ⓘ</span> Доп. баллы, БВИ за олимпиады';
      admission.addEventListener('click', () => openAdmissionInfo(program));

      card.append(head, stats, admission);
      el.uniCards.appendChild(card);
    });
  }

  function renderAllData() {
    renderMobileProgramPicker();
    renderEmptyProgramState();
    renderTableHead();
    renderUniCards();
    renderTable();
    renderCardsView();
  }

  function applyTheme(theme) {
    document.body.dataset.theme = theme;
    localStorage.setItem('azimut-theme', theme);
    el.themeToggle.querySelector('.theme-toggle__icon').textContent = theme === 'dark' ? '☀' : '☾';
    el.themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему');
  }

  function admissionLines(text) {
    return String(text || '')
      .split(/\n/)
      .map(line => line.trim())
      .filter(Boolean);
  }

  function renderAdmissionSection(title, text) {
    const section = document.createElement('section');
    section.className = 'admission-section';
    const heading = document.createElement('h3');
    heading.textContent = title;
    section.appendChild(heading);

    const body = document.createElement('div');
    body.className = 'admission-section__body';
    admissionLines(text).forEach(line => {
      if (line === 'Одно из:') {
        return;
      } else if (/^\d+\s*балл(?:а|ов)?\s*:/i.test(line)) {
        const h = document.createElement('h4');
        h.textContent = line;
        body.appendChild(h);
      } else {
        const item = document.createElement('div');
        item.className = 'admission-section__item';
        item.textContent = line.replace(/^[-•]\s*/, '');
        body.appendChild(item);
      }
    });
    section.appendChild(body);
    return section;
  }

  function openAdmissionInfo(program) {
    if (!el.admissionInfoModal || !el.admissionInfoContent || !program) return;
    const data = (typeof ADMISSION_DATA !== 'undefined' && ADMISSION_DATA[program.id]) || {};
    el.admissionInfoContent.innerHTML = '';

    const intro = document.createElement('p');
    intro.className = 'admission-info__program';
    intro.innerHTML = `<strong>${program.shortName}</strong>`;
    el.admissionInfoContent.appendChild(intro);

    el.admissionInfoContent.appendChild(renderAdmissionSection('Дополнительные баллы и индивидуальные достижения', data.additionalPoints));
    el.admissionInfoContent.appendChild(renderAdmissionSection('Условия для БВИ (кроме ВОШ)', data.bvi));

    el.admissionInfoModal.hidden = false;
    el.admissionInfoModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeAdmissionInfo() {
    if (!el.admissionInfoModal) return;
    el.admissionInfoModal.hidden = true;
    el.admissionInfoModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function wireEvents() {
    el.diffOnlyToggle.addEventListener('change', e => {
      state.diffOnly = e.target.checked;
      renderAllData();
    });

    el.highlightDiffToggle.addEventListener('change', e => {
      state.highlightDiff = e.target.checked;
      renderAllData();
    });




    el.themeToggle.addEventListener('click', () => {
      applyTheme(document.body.dataset.theme === 'dark' ? 'light' : 'dark');
    });

    const zetButton = document.getElementById('zetInfoButton');
    const zetPopup = document.getElementById('zetInfoPopup');
    if (zetButton && zetPopup) {
      const showZet = () => {
        zetPopup.hidden = false;
        zetButton.setAttribute('aria-expanded', 'true');
      };
      const hideZet = () => {
        zetPopup.hidden = true;
        zetButton.setAttribute('aria-expanded', 'false');
      };
      zetButton.addEventListener('mouseenter', showZet);
      zetButton.addEventListener('mouseleave', hideZet);
      zetButton.addEventListener('focus', showZet);
      zetButton.addEventListener('blur', hideZet);
      zetButton.addEventListener('touchstart', event => {
        event.preventDefault();
        zetPopup.hidden ? showZet() : hideZet();
      }, { passive: false });
    }

    if (el.emptyAddProgram) el.emptyAddProgram.addEventListener('click', addProgramSlot);

    document.querySelectorAll('[data-close-admission-info]').forEach(node => {
      node.addEventListener('click', closeAdmissionInfo);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('azimut-theme');
    applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

    wireEvents();
    renderFilters();

    // Стартуем с одного выбранного элемента — остальные слоты пустые.
    state.selectedUniIds[0] = getFaculty().universities[0]?.id || null;
    renderAllData();
  });
})();
