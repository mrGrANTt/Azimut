// js/data.js — данные из реального CSV «Azimut - Лист1.csv».
// Категории дисциплин переклассифицированы по правилам интерфейса.
const DATA = {
  "meta": {
    "source": "Azimut - Лист1.csv",
    "note": "Данные учебных планов преобразованы из CSV без добавления отсутствующих программ.",
    "unit": "ЗЕТ",
    "categoryHeuristic": "Строгая классификация: профиль = математика/IT и профильные выборные дисциплины; ФГОС = общеобязательные гуманитарные/социально-правовые дисциплины из заданного списка; остальные дисциплины = дополнительные."
  },
  "faculties": [
    {
      "id": "it_programs",
      "title": "Сравнение образовательных программ",
      "shortTitle": "Программы",
      "universities": [
        {
          "id": "program_1",
          "institution": "НИУ ВШЭ филианл НН",
          "name": "ТИДИ",
          "shortName": "НИУ ВШЭ филианл НН — ТИДИ",
          "color": "#0EA5E9",
          "cost": null,
          "minScore": null,
          "budgetPlaces": null
        },
        {
          "id": "program_2",
          "institution": "НИУ ВШЭ филианл НН",
          "name": "КНТ",
          "shortName": "НИУ ВШЭ филианл НН — КНТ",
          "color": "#8B5CF6",
          "cost": null,
          "minScore": null,
          "budgetPlaces": null
        },
        {
          "id": "program_3",
          "institution": "ННГУ",
          "name": "ПИ",
          "shortName": "ННГУ — ПИ",
          "color": "#10B981",
          "cost": null,
          "minScore": null,
          "budgetPlaces": null
        },
        {
          "id": "program_4",
          "institution": "ННГУ",
          "name": "ПМИ",
          "shortName": "ННГУ — ПМИ",
          "color": "#F59E0B",
          "cost": null,
          "minScore": null,
          "budgetPlaces": null
        },
        {
          "id": "program_5",
          "institution": "Политех НГТУ",
          "name": "ПИ",
          "shortName": "Политех НГТУ — ПИ",
          "color": "#EF4444",
          "cost": null,
          "minScore": null,
          "budgetPlaces": null
        },
        {
          "id": "program_6",
          "institution": "Политех НГТУ",
          "name": "ПМИ",
          "shortName": "Политех НГТУ — ПМИ",
          "color": "#06B6D4",
          "cost": null,
          "minScore": null,
          "budgetPlaces": null
        }
      ],
      "subjects": [
        {
          "id": "s_",
          "title": "Архитектура компьютера и операционные системы",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 4 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_soft_skills",
          "title": "Soft Skills (преподается на иностранном языке)",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 5 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Дискретная математика",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 8,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 8 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 8,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 8 ЗЕТ"
            },
            "program_3": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 3 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 11,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 11 ЗЕТ"
            },
            "program_5": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 4 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 9,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 9 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Линейная алгебра и геометрия",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 6 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 8,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 8 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Математический анализ",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 8,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 8 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 8,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 8 ЗЕТ"
            },
            "program_3": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 20,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 20 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 14,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 14 ЗЕТ"
            },
            "program_5": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 13,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 13 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 22,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 22 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Общая алгебра",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 6 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 5 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Методы оптимизации",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ"
            },
            "program_3": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 6 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 5 ЗЕТ"
            },
            "program_5": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 4 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Распределенные вычисления",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 6)"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_python",
          "title": "Программирование Python",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 4 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Теория вероятностей и математическая статистика",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 8,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 8 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 6 ЗЕТ"
            },
            "program_3": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 9,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 9 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ"
            },
            "program_5": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 4 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 8,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 8 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Базы Данных (преподается на иностранном языке)",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 6 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Управление ИТ-проектами",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 7,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 7 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Обеспечение качества и тестирование",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 5,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 5 ЗЕТ (выборное, специализация 3)"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Конструирование программного обеспечения",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Проектирование архитектуры программных систем",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Машинное обучение",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 5 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Технологии программирования",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 4 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 5 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Ряды и кратные интегралы",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Дополнительные главы линейной алгебры",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Алгоритмы и структуры данных",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 8,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 8 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 8,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 8 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 9,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 9 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_c_c",
          "title": "Программирование C/C++",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 4 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 8,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 8 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Разработка и анализ требований",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Введение в рекомендательные системы",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Машинное обучение на графах",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 6 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Обработка естественного языка",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_opencv",
          "title": "Основы компьютерного зрения. Библиотека OpenCV (преподается на иностранном языке)",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Рекомендательные системы +",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 5 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Практические аспекты применения искусственного интеллекта",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Процессы разработки и бизнес-аспекты искусственного интеллекта",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 6 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Введение в сетевой анализ и машинное обучение на графах",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Научно-исследовательский семинар \"Введение в специальность\"",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Научно-исследовательский семинар \"Численные методы\"",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Научно-исследовательский семинар \"Дифференциальные уравнения\"",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Научно-исследовательский семинар \"Введение в машинное обучение\"",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Научно-исследовательский семинар \"Введение в компьютерное зрение\"",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Научно-практический семинар \"Цифровая грамотность\"",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Учебная практика",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 1,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 1 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Производственная практика",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 5 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Преддипломная практика",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 6 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 6 ЗЕТ"
            },
            "program_3": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 6 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 6 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Курсовая работа",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Курсовая исследовательская работа",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Проект",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": 2,
              "courseTo": 4,
              "zet": 12,
              "elective": false,
              "facultative": false,
              "raw": "2–4 курс — 12 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 10,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 10 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Подготовка выпускной квалификационной работы",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 6 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Безопасность жизнедеятельности",
          "category": "fgos",
          "programs": {
            "program_1": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 1,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 1 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 1,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 1 ЗЕТ"
            },
            "program_3": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 2 ЗЕТ"
            },
            "program_5": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 4 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Физическая культура",
          "category": "fgos",
          "programs": {
            "program_1": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 1,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 1 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 1,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 1 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Правовая грамотность",
          "category": "fgos",
          "programs": {
            "program_1": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Экономика",
          "category": "fgos",
          "programs": {
            "program_1": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ"
            },
            "program_3": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "История России",
          "category": "fgos",
          "programs": {
            "program_1": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 4 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 4 ЗЕТ"
            },
            "program_3": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 4 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 4 ЗЕТ"
            },
            "program_5": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 4 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Основы российской государственности",
          "category": "fgos",
          "programs": {
            "program_1": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 2 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 2 ЗЕТ"
            },
            "program_3": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 2 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 2 ЗЕТ"
            },
            "program_5": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 2 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_minor",
          "title": "Minor",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": 2,
              "courseTo": 3,
              "zet": 20,
              "elective": true,
              "facultative": false,
              "raw": "2–3 курс — 20 ЗЕТ (выборное)"
            },
            "program_2": {
              "courseFrom": 2,
              "courseTo": 3,
              "zet": 20,
              "elective": true,
              "facultative": false,
              "raw": "2–3 курс — 20 ЗЕТ (выборное)"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Независимый экзамен по английскому языку",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": null,
              "courseTo": null,
              "zet": 0,
              "elective": false,
              "facultative": false,
              "raw": "— без ЗЕТ"
            },
            "program_2": {
              "courseFrom": null,
              "courseTo": null,
              "zet": 0,
              "elective": false,
              "facultative": false,
              "raw": "— без ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_project_proposal",
          "title": "Подготовка и защита Project Proposal по теме ВКР",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 1,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 1 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 1,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 1 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Независимый экзамен по русскому языку",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": null,
              "courseTo": null,
              "zet": 0,
              "elective": false,
              "facultative": false,
              "raw": "— без ЗЕТ"
            },
            "program_2": {
              "courseFrom": null,
              "courseTo": null,
              "zet": 0,
              "elective": false,
              "facultative": false,
              "raw": "— без ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_1",
          "title": "Внутренний экзамен по английскому языку (1 курс)",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": null,
              "courseTo": null,
              "zet": 0,
              "elective": false,
              "facultative": false,
              "raw": "— без ЗЕТ"
            },
            "program_2": {
              "courseFrom": null,
              "courseTo": null,
              "zet": 0,
              "elective": false,
              "facultative": false,
              "raw": "— без ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Английский язык (преподается на иностранном языке)",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 1,
              "courseTo": 2,
              "zet": 14,
              "elective": false,
              "facultative": true,
              "raw": "1–2 курс — 14 ЗЕТ (факультатив)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Академическое письмо на английском языке (преподается на иностранном языке)",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": true,
              "raw": "4 курс — 2 ЗЕТ (факультатив)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Независимый экзамен по алгоритмическому мышлению и программированию. Продвинутый уровень",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": null,
              "courseTo": null,
              "zet": 0,
              "elective": false,
              "facultative": false,
              "raw": "— без ЗЕТ"
            },
            "program_2": {
              "courseFrom": null,
              "courseTo": null,
              "zet": 0,
              "elective": false,
              "facultative": false,
              "raw": "— без ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Независимый экзамен по анализу данных, искусственному интеллекту и генеративным моделям. Продвинутый уровень",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 1,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 1 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 1,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 1 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Анализ данных (продвинутый уровень)",
          "category": "prof",
          "programs": {
            "program_1": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Независимый экзамен по ИИ-грамотности",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": null,
              "courseTo": null,
              "zet": 0,
              "elective": false,
              "facultative": false,
              "raw": "— без ЗЕТ"
            },
            "program_2": {
              "courseFrom": null,
              "courseTo": null,
              "zet": 0,
              "elective": false,
              "facultative": false,
              "raw": "— без ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Защита выпускной квалификационной работы",
          "category": "secondary",
          "programs": {
            "program_1": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 1,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 1 ЗЕТ"
            },
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 1,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 1 ЗЕТ"
            }
          },
          "coreGroup": "КНТ"
        },
        {
          "id": "s_",
          "title": "Управление данными",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 5 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_java",
          "title": "Программирование Java",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Функциональное программирование",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Компьютерные сети",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Системы технической документации",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 6 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_soft_skills",
          "title": "Soft Skills",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 7,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 7 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Введение в информационную безопасность",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 1)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_java",
          "title": "Программирование на Java (продвинутый уровень)",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_c",
          "title": "Углубленное программирование на C++",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Научно-исследовательский семинар",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Научно-исследовательский семинар (на иностранном языке)",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Проектный семинар (на иностранном языке)",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Имитационное моделирование",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 1)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Теория организации",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 1)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Архитектура предприятия",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 1)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Предпринимательство",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 1)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Управление требованиями и проектирование информационных систем (на иностранном языке)",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 1)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Теория и практика тестирования ИС (на иностранном языке)",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 1)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Управление качеством ИС",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ (выборное, специализация 1)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_low_code",
          "title": "Разработка на бизнес-ориентированных языках программирования и Low-Code системы",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 1)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Финансовый и управленческий учет",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 1)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Электронные платежные средства (на иностранном языке)",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 1)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Эконометрика",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 1)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Теория и история менеджмента",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 1)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Стратегический менеджмент",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 1)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Производственный менеджмент",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ (выборное, специализация 4)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Дизайн-мышление",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 1)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Моделирование бизнес-процессов",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 1)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_2",
          "title": "Математический анализ 2",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ (выборное, специализация 2)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Дифференциальные уравнения (на иностранном языке)",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ (выборное, специализация 2)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Вычислительная линейная алгебра",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ (выборное, специализация 2)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Матричные вычисления (на иностранном языке)",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 2)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Прикладная теория графов",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 2)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Алгоритмы работы с внешней памятью",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 2)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Архитектура вычислительных систем",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 5)"
            },
            "program_4": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Введение в процедуры множественной проверки гипотез",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 2)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Исследование операций",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 5)"
            },
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 5 ЗЕТ"
            },
            "program_5": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 5 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Риски и случайные процессы",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 2)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Непрерывные методы оптимизации",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 2)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Моделирование финансовых операций (на иностранном языке)",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ (выборное, специализация 2)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Алгоритмы исследования операций",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ (выборное, специализация 2)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Стохастические модели принятия решений",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 6)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Проектирование архитектуры программных систем (на иностранном языке)",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 3)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Проектирование отказоустойчивых систем",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 3)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_blockchain",
          "title": "Введение в blockchain (на иностранном языке)",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 3)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Разработка мобильных приложений",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 3)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_devops",
          "title": "Методы и технологии DevOps",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ (выборное, специализация 3)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_low_code",
          "title": "Low-Code системы разработки приложений (на иностранном языке)",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 3)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Анализ и разработка требований",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 3)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Безопасность компьютерных систем (на иностранном языке)",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 3)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_ui_ux",
          "title": "Проектирование интерфейсов (UI/UX)",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ (выборное, специализация 6)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Веб-программирование (на иностранном языке)",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 5,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 5 ЗЕТ (выборное, специализация 3)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Многопоточное программирование (на иностранном языке)",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 3)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Методы и системы обработки больших данных",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 3)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_2",
          "title": "Алгоритмы и структуры данных 2",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ (выборное, специализация 3)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_postmodern_erp",
          "title": "Автоматизация сквозных процессов производственного предприятия (Postmodern ERP) (на иностранном языке)",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 4)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Управление требованиями и проектирование информационных систем",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 4)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Корпоративные информационные системы (на иностранном языке)",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 4)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Управление качеством ИС (на иностранном языке)",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 4)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_1",
          "title": "Информационные технологии для повышения эффективности бизнеса в экосистеме 1С",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 4)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_low_code",
          "title": "Разработка на бизнес-ориентированных языках программирования и Low-Code системы (на иностранном языке)",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 4)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_erp_crm",
          "title": "Практикум по ERP- и CRM-системам (на иностранном языке)",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 4)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Компьютерная безопасность",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 5)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Системы финансового планирования и бюджетирования",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 4)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Управление жизненным циклом ИС поддержки принятия решений",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 5)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Управление и моделирование в информационных системах поддержки принятия решений (на иностранном языке)",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 5)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Управление качеством ИС поддержки принятия решений",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 5)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Проектирование человеко-машинных интерфейсов (на иностранном языке)",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 5)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Модели принятия решений на основе лингвистической информации (на иностранном языке)",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 5)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Методы и системы обработки больших данных (на иностранном языке)",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ (выборное, специализация 5)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Абстрактная алгебра",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное, специализация 5)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Системный анализ (на иностранном языке)",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 5)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Программирование встраиваемых систем (на иностранном языке)",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ (выборное, специализация 6)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Проектирование отказоустойчивых систем (на иностранном языке)",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ (выборное, специализация 6)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Сетевые технологии",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 5,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 5 ЗЕТ (выборное, специализация 6)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_iot",
          "title": "Облачные технологии IoT",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ (выборное, специализация 6)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Интеллектуальный анализ данных (на иностранном языке)",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 6)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Разработка системных интерфейсов для промышленного интернета вещей",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное, специализация 6)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Курсовая междисциплинарная научно-исследовательская работа",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Философия",
          "category": "fgos",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ"
            },
            "program_3": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 2 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 4 ЗЕТ"
            },
            "program_5": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Английский язык (на иностранном языке)",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 14,
              "elective": false,
              "facultative": true,
              "raw": "1 курс — 14 ЗЕТ (факультатив)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Академическое письмо на английском языке",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": true,
              "raw": "4 курс — 2 ЗЕТ (факультатив)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Анализ данных и машинное обучение",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Научно-практический семинар «Цифровая грамотность»",
          "category": "secondary",
          "programs": {
            "program_2": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Алгоритмы и структуры данных (доп. главы)",
          "category": "prof",
          "programs": {
            "program_2": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Иностранный язык",
          "category": "fgos",
          "programs": {
            "program_3": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 5 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 9,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 9 ЗЕТ"
            },
            "program_5": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 10,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 10 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 10,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 10 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Концепции современного естествознания",
          "category": "secondary",
          "programs": {
            "program_3": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 6 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Алгебра и геометрия",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 10,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 10 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 10,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 10 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Математические основы информатики",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 8,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 8 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Теория систем и системный анализ",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Физика",
          "category": "secondary",
          "programs": {
            "program_3": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 7,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 7 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ"
            },
            "program_5": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 8,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 8 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 10,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 10 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Основы информационных систем",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Основы вычислительных систем, сетей и телекоммуникаций",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Схемотехника и организация вычислительных систем",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Операционные системы",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 3 ЗЕТ"
            },
            "program_5": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Программирование (С)",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Интеллектуальные информационные системы",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Базы данных",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 3 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 2 ЗЕТ"
            },
            "program_5": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 5 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Физическая культура и спорт",
          "category": "fgos",
          "programs": {
            "program_3": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 2 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 2 ЗЕТ"
            },
            "program_5": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 2 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Практикум по математическому анализу",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 4 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Введение в проектную деятельность",
          "category": "secondary",
          "programs": {
            "program_3": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 2 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Практикум по алгебре и геометрии",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 6 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Дифференциальные уравнения",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 7,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 7 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 7,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 7 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Теория автоматов и формальные грамматики",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Основы алгоритмизации",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Прикладные задачи принятия решения",
          "category": "secondary",
          "programs": {
            "program_3": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Низкоуровневое программирование",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Шаблоны проектирования",
          "category": "secondary",
          "programs": {
            "program_3": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 5 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Компьютерное геометрическое моделирование",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Логические основы электронно-вычислительных машин",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_windows",
          "title": "Разработка Windows приложений",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Высокоуровневые методы программирования",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Распознавание образов",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Моделирование информационных процессов и систем",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Объектно-ориентированное программирование",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 4 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_web_web",
          "title": "WEB-технологии, web-приложения",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Информационная безопасность",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Программная инженерия",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 5 ЗЕТ"
            },
            "program_5": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Теория вычислимости",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Численные методы",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 6 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 8,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 8 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Введение в проектную деятельность в сфере прикладной информатики",
          "category": "secondary",
          "programs": {
            "program_3": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Расчет ресурсных характеристик конструктивных элементов с использованием программного продукта Логос (выборное)",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Задачи оптимизации на графах (выборное)",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Моделирование течений жидкости и газа методами вычислительной гидроаэродинамики (выборное)",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Многопоточное программирование (выборное)",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Моделирование высокоскоростного удара с грунтом в среде моделирования ЛОГОС (выборное)",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Пользовательский интерфейс - разработка, тестирование (выборное)",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Численное моделирование поведения пороупругих тел и сред (выборное)",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Модели и алгоритмы систем информационной поддержки жизненного цикла изделий (выборное)",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Решение задач в модуле ЛОГОС Тепло (выборное)",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 5 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Основы методов анализа предметных областей (выборное)",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 5 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Ознакомительная практика",
          "category": "secondary",
          "programs": {
            "program_3": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 7,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 7 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Технологическая (проектно-технологическая) практика",
          "category": "secondary",
          "programs": {
            "program_3": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Научно-исследовательская работа",
          "category": "secondary",
          "programs": {
            "program_3": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 6 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 6 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Выпускная квалификационная работа - бакалаврская работа",
          "category": "secondary",
          "programs": {
            "program_3": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 9,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 9 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 6 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Распределение ограниченных ресурсов в сетевых детерминированных системах",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 1,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 1 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Распределение ограниченных ресурсов в сетевых стохастических системах",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 1,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 1 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_startup",
          "title": "Проектирование Startup",
          "category": "secondary",
          "programs": {
            "program_3": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 1,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 1 ЗЕТ"
            },
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 1,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 1 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Задачи нумерации вершин графов",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 1,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 1 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Распознавание изображений",
          "category": "prof",
          "programs": {
            "program_3": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 1,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 1 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Алгебра",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 12,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 12 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Языки и методы программирования",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 9,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 9 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Теория вероятностей",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Основы права",
          "category": "fgos",
          "programs": {
            "program_4": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Экономика. Основы предпринимательской деятельности",
          "category": "fgos",
          "programs": {
            "program_4": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Дополнительные главы математического анализа",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Вероятностные модели",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Функциональный анализ",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": true,
              "raw": "2 курс — 3 ЗЕТ (факультатив)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Комплексный анализ",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Психология и педагогика",
          "category": "secondary",
          "programs": {
            "program_4": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Уравнения математической физики",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 8,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 8 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 11,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 11 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Основы теории вычислений",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Практикум по дополнительным главам математического анализа",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Линейное программирование",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Теория управления",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 14,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 14 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Математическая логика",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Термодинамика",
          "category": "secondary",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Системный анализ",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            },
            "program_5": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Проектная деятельность в сфере прикладной математики и информатики",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Практикум по численным методам",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Введение в специальность",
          "category": "secondary",
          "programs": {
            "program_4": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Общая физика (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Теоретическая механика (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Концепции современного естествознания (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Прикладной тензорный анализ (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Современное естествознание (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 5 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Математические модели современного естествознания (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 5 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Вычислительная геометрия (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Биоинспирированные методы оптимизации (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Параллельное программирование для кластерных систем (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Вероятностные модели в финансовой математике (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Введение в биоинформатику (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Современные архитектуры глубоких нейронных сетей и подходы к их обучению (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Целочисленное программирование (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Управление колебаниями динамических систем (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Операционные системы (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Компьютерное моделирование вероятностных процессов (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Введение в нелинейную динамику (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Информационная нейродинамика. Сосредоточенные системы (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Оптимальное управление динамическими системами (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Дискретная оптимизация (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Инструменты программирования (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Теория выбора и принятия решений (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Численное моделирование динамики распределенных систем (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Модели и задачи управления роботами-манипуляторами (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Математические модели процессов отбора (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Теория графов (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Параллельное программирование для систем с общей памятью (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Дополнительные главы теории вероятностей (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Качественные методы нелинейной динамики (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Информационная нейродинамика. Распределенные системы (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Методы моделирования и прикладной анализ данных (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Теория кодирования (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Основы компьютерного зрения (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Статистика случайных процессов (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Асимптотические методы теории колебаний и волн (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Математические методы нейродинамики (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Прикладной функциональный анализ (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Комбинаторный анализ (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_c",
          "title": "Профессиональный C++ (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Вероятностные модели в теории очередей (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Алгоритмы распознавания образов (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Введение в квантовые алгоритмы (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Машинное обучение и анализ данных (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Физические основы вычислительной техники (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Математическое моделирование и прикладной анализ данных (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Помехоустойчивое кодирование (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_java",
          "title": "Разработка сетевых приложений на Java (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Теория массового обслуживания (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Численные методы в биофотонике (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Введение в теорию волновых процессов (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Теория меры (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Компьютерная алгебра (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Системы поддержки принятия решений (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Вероятностные модели в естествознании (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Математические методы биоинформатики (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Качественные методы исследования динамических систем (выборное)",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Эффективные алгоритмы и структуры данных",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 8,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 8 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Олимпиадная математика",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 1,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 1 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Оптимизация производительности программ",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 1,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 1 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Компьютерная графика",
          "category": "prof",
          "programs": {
            "program_4": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 2 ЗЕТ"
            },
            "program_5": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 6 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Основы проектной деятельности",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 4 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Линейная алгебра",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Информатика",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 5 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 5 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Электротехника",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Правоведение",
          "category": "fgos",
          "programs": {
            "program_5": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Программирование",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 9,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 9 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Основы информационной безопасности",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Информационные сети",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 7,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 7 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Основы личностной и коммуникативной культуры",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 3 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Культура научной и деловой речи",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 1,
              "elective": true,
              "facultative": false,
              "raw": "1 курс — 1 ЗЕТ (выборное)"
            },
            "program_6": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 1,
              "elective": true,
              "facultative": false,
              "raw": "1 курс — 1 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Культура и личность",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 1,
              "elective": true,
              "facultative": false,
              "raw": "1 курс — 1 ЗЕТ (выборное)"
            },
            "program_6": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 1,
              "elective": true,
              "facultative": false,
              "raw": "1 курс — 1 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Управление проектами",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_web",
          "title": "Разработка программных приложений и WEB-программирование",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 7,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 7 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Технологии и методы программирования",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Интерфейс \"Человек - электронные вычислительные машины\"",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Вычислительная математика",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Периферийные устройства информационных систем",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Предметноориентированные информационные системы",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Архитектура средств вычислительной техники",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Теория формальных языков и компиляторов",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Методы анализа данных",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Системы искусственного интеллекта и машинное обучение",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Основы теории управления",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Моделирование",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Электронный бизнес",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Математические методы в экономике",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Методы машинного обучения и локального поиска",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Проектирование информационных систем и технологий",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Программное обеспечение информационных систем",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Обработка сигналов",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Теория случайных процессов",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Модели организационных систем",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Математическая экономика",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Параллельное программирование",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Машинные языки и программирование",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Экономика и управление производственными системами",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Экономика предприятия",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 1,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 1 ЗЕТ (выборное)"
            },
            "program_6": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 1,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 1 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Управление производственными системами",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 1,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 1 ЗЕТ (выборное)"
            },
            "program_6": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 1,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 1 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Учебная практика: ознакомительная практика",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 3 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 2,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 2 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Учебная практика: технологическая (проектно-технологическая) практика",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Производственная практика: научно-исследовательская работа",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 5 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Производственная практика: преддипломная (технологическая) практика",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 14,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 14 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Выполнение и защита выпускной квалификационной работы",
          "category": "secondary",
          "programs": {
            "program_5": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 9,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 9 ЗЕТ"
            },
            "program_6": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 9,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 9 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Иностранный язык (для продолжающих обучение)",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 7,
              "elective": false,
              "facultative": true,
              "raw": "2 курс — 7 ЗЕТ (факультатив)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Введение в компьютерное зрение",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 2,
              "elective": false,
              "facultative": true,
              "raw": "3 курс — 2 ЗЕТ (факультатив)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Проектная деятельность",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 9,
              "elective": false,
              "facultative": true,
              "raw": "2 курс — 9 ЗЕТ (факультатив)"
            },
            "program_6": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 10,
              "elective": false,
              "facultative": true,
              "raw": "2 курс — 10 ЗЕТ (факультатив)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Индустриальный интернет вещей",
          "category": "prof",
          "programs": {
            "program_5": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 2,
              "elective": false,
              "facultative": true,
              "raw": "4 курс — 2 ЗЕТ (факультатив)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Основы программирования",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 6 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Структуры данных и алгоритмы",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 1,
              "courseTo": 1,
              "zet": 7,
              "elective": false,
              "facultative": false,
              "raw": "1 курс — 7 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Программирование вычислений",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 5 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Методы построения и анализа алгоритмов",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Технологии баз данных",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Операционные системы и компьютерные сети",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 6,
              "elective": false,
              "facultative": false,
              "raw": "2 курс — 6 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Языки программирования и методы трансляции",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 5,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 5 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Введение в искусственный интеллект и логическое программирование",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Управление ресурсами в вычислительных системах",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Математическое моделирование управляемых систем",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Математические модели в естествознании",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "3 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Современные технологии программирования",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Нейросети",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Интеллектуальные системы",
          "category": "secondary",
          "programs": {
            "program_6": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Цифровые модели и оценивание параметров",
          "category": "secondary",
          "programs": {
            "program_6": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Статистические методы анализа данных",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Метод конечных элементов",
          "category": "secondary",
          "programs": {
            "program_6": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 5,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 5 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Планирование и анализ эксперимента",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 5,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 5 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Статистический анализ нечисловых данных",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 4,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 4 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Элементы современных компьютеров и технологии программирования",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Методы принятия оптимальных решений",
          "category": "secondary",
          "programs": {
            "program_6": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Основы криптографии",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Основы теории информации и криптографии",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_c",
          "title": "Разработка объектно-ориентированных программ с использованием С#/C++",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Численное моделирование динамических систем, описываемых ОДУ",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Численное решение начальных и краевых задач для ОДУ",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_web",
          "title": "Создание современных кроссплатформенных приложений на основе web-технологий",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_web",
          "title": "Разработка web-приложений и распределенных информационных систем",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 3,
              "courseTo": 3,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "3 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Введение в архитектуру компьютера",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Архитектура электронно-вычислительных машин и вычислительных систем",
          "category": "prof",
          "programs": {
            "program_6": {
              "courseFrom": 2,
              "courseTo": 2,
              "zet": 3,
              "elective": true,
              "facultative": false,
              "raw": "2 курс — 3 ЗЕТ (выборное)"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Производственная практика: технологическая (проектно-технологическая) практика",
          "category": "secondary",
          "programs": {
            "program_6": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 3,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 3 ЗЕТ"
            }
          },
          "coreGroup": null
        },
        {
          "id": "s_",
          "title": "Производственная практика: преддипломная практика",
          "category": "secondary",
          "programs": {
            "program_6": {
              "courseFrom": 4,
              "courseTo": 4,
              "zet": 7,
              "elective": false,
              "facultative": false,
              "raw": "4 курс — 7 ЗЕТ"
            }
          },
          "coreGroup": null
        }
      ]
    }
  ],
  "courseMeta": [
    {
      "id": "all",
      "label": "Все 4 года"
    },
    {
      "id": 1,
      "label": "1 Курс"
    },
    {
      "id": 2,
      "label": "2 Курс"
    },
    {
      "id": 3,
      "label": "3 Курс"
    },
    {
      "id": 4,
      "label": "4 Курс"
    }
  ],
  "categoryMeta": {
    "prof": {
      "label": "Профильные предметы (Математика + IT)",
      "shortLabel": "Профиль",
      "color": "#38BDF8"
    },
    "fgos": {
      "label": "ФГОС / Гуманитарный блок",
      "shortLabel": "ФГОС",
      "color": "#7DD3FC"
    },
    "secondary": {
      "label": "Дополнительные дисциплины",
      "shortLabel": "Дополнительные",
      "color": "#CBD5E1"
    }
  }
};


// Нормализация дублирующихся записей английского языка.
// Экзамены и отдельные дисциплины «Академическое письмо...» не относятся
// к общей строке языка и поэтому сохраняются отдельно.
(function normalizeEnglishLanguageSubjects(data) {
  const faculty = data.faculties?.[0];
  if (!faculty || !Array.isArray(faculty.subjects)) return;

  const isEnglishLanguageModule = (title) => {
    const value = String(title || '').trim().toLocaleLowerCase('ru-RU');
    if (!value.startsWith('английский язык')) return false;
    return !/^(английский язык)\s*[-—:]?\s*(академическое письмо|для общих коммуникативных целей)?$/i.test(value)
      || /английский язык\s+(для общих коммуникативных целей|начальный курс|базовый курс|основной курс|продвинутый курс)/i.test(value);
  };

  const englishSubjects = faculty.subjects.filter(subject => {
    const title = String(subject.title || '').trim();
    return /^английский язык\s*(?:для общих коммуникативных целей|[-—:]\s*(?:начальный|базовый|основной|продвинутый) курс|\(|$)/i.test(title)
      && !/экзамен/i.test(title)
      && !/академическое письмо/i.test(title);
  });

  if (!englishSubjects.length) return;

  const merged = { id: 'english_language', title: 'Английский язык', category: 'prof', programs: {}, coreGroup: null };
  englishSubjects.forEach(subject => {
    Object.entries(subject.programs || {}).forEach(([programId, record]) => {
      if (!record) return;
      const previous = merged.programs[programId];
      if (!previous) { merged.programs[programId] = { ...record }; return; }
      const from = [previous.courseFrom, record.courseFrom].filter(Number.isFinite);
      const to = [previous.courseTo, record.courseTo].filter(Number.isFinite);
      merged.programs[programId] = {
        ...previous,
        courseFrom: from.length ? Math.min(...from) : null,
        courseTo: to.length ? Math.max(...to) : null,
        zet: Number(previous.zet || 0) + Number(record.zet || 0),
        elective: Boolean(previous.elective || record.elective),
        facultative: Boolean(previous.facultative || record.facultative),
        raw: [previous.raw, record.raw].filter(Boolean).join(' + ')
      };
    });
  });

  const firstIndex = faculty.subjects.findIndex(subject => englishSubjects.includes(subject));
  faculty.subjects = faculty.subjects.filter(subject => !englishSubjects.includes(subject));
  faculty.subjects.splice(firstIndex < 0 ? faculty.subjects.length : firstIndex, 0, merged);
})(DATA);

const CATEGORY_META = DATA.categoryMeta;
const COURSE_META = DATA.courseMeta;
