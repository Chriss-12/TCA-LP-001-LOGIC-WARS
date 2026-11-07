import type { QuestionBank } from "../types/question.types";

export const questionBank: QuestionBank = {
  // =========================================================
  // CÁLCULO
  // =========================================================

  CAL_001: {
    id: "CAL_001",
    category: "calculo",
    difficulty: "easy",
    question: "Resuelve: 3² + 4(5 - 2)",
    options: {
      A: "21",
      B: "27",
      C: "29",
      D: "31",
    },
    correctAnswer: "A",
    explanation: "9 + 4 × 3 = 21.",
  },

  CAL_002: {
    id: "CAL_002",
    category: "calculo",
    difficulty: "easy",
    question: "Resuelve: 5 + 2³ × 2",
    options: {
      A: "18",
      B: "21",
      C: "26",
      D: "32",
    },
    correctAnswer: "B",
    explanation: "2³ = 8; 8 × 2 = 16; 16 + 5 = 21.",
  },

  CAL_003: {
    id: "CAL_003",
    category: "calculo",
    difficulty: "easy",
    question: "¿Qué número sigue? 7, 11, 15, 19, ...",
    options: {
      A: "21",
      B: "22",
      C: "23",
      D: "24",
    },
    correctAnswer: "C",
    explanation: "La secuencia aumenta de 4 en 4.",
  },

  CAL_004: {
    id: "CAL_004",
    category: "calculo",
    difficulty: "easy",
    question: "Resuelve: 18 ÷ 3 + 5 × 2",
    options: {
      A: "12",
      B: "14",
      C: "16",
      D: "20",
    },
    correctAnswer: "C",
    explanation: "18 ÷ 3 = 6 y 5 × 2 = 10; 6 + 10 = 16.",
  },

  CAL_005: {
    id: "CAL_005",
    category: "calculo",
    difficulty: "easy",
    question: "¿Cuánto vale √81 + 7?",
    options: {
      A: "14",
      B: "15",
      C: "16",
      D: "18",
    },
    correctAnswer: "C",
    explanation: "√81 = 9; entonces 9 + 7 = 16.",
  },

  CAL_006: {
    id: "CAL_006",
    category: "calculo",
    difficulty: "easy",
    question: "Resuelve: 2⁵ ÷ 4",
    options: {
      A: "6",
      B: "8",
      C: "10",
      D: "12",
    },
    correctAnswer: "B",
    explanation: "2⁵ = 32; 32 ÷ 4 = 8.",
  },

  CAL_007: {
    id: "CAL_007",
    category: "calculo",
    difficulty: "medium",
    question: "Si 3x + 7 = 25, ¿cuánto vale x?",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "7",
    },
    correctAnswer: "C",
    explanation: "3x = 18; por tanto x = 6.",
  },

  CAL_008: {
    id: "CAL_008",
    category: "calculo",
    difficulty: "medium",
    question: "¿Qué número sigue? 2, 6, 18, 54, ...",
    options: {
      A: "108",
      B: "126",
      C: "162",
      D: "216",
    },
    correctAnswer: "C",
    explanation: "Cada término se multiplica por 3.",
  },

  CAL_009: {
    id: "CAL_009",
    category: "calculo",
    difficulty: "medium",
    question: "Resuelve: (4² - 2³) × 3",
    options: {
      A: "18",
      B: "21",
      C: "24",
      D: "30",
    },
    correctAnswer: "C",
    explanation: "16 - 8 = 8; 8 × 3 = 24.",
  },

  CAL_010: {
    id: "CAL_010",
    category: "calculo",
    difficulty: "medium",
    question: "Si x/4 + 3 = 8, ¿cuánto vale x?",
    options: {
      A: "16",
      B: "18",
      C: "20",
      D: "24",
    },
    correctAnswer: "C",
    explanation: "x/4 = 5; entonces x = 20.",
  },

  CAL_011: {
    id: "CAL_011",
    category: "calculo",
    difficulty: "medium",
    question: "¿Qué número sigue? 1, 4, 9, 16, 25, ...",
    options: {
      A: "30",
      B: "32",
      C: "36",
      D: "49",
    },
    correctAnswer: "C",
    explanation: "Son cuadrados perfectos: 1², 2², 3², 4², 5², 6².",
  },

  CAL_012: {
    id: "CAL_012",
    category: "calculo",
    difficulty: "medium",
    question: "¿Cuál es el promedio de 8, 12, 15 y 5?",
    options: {
      A: "8",
      B: "10",
      C: "11",
      D: "12",
    },
    correctAnswer: "B",
    explanation: "(8 + 12 + 15 + 5) ÷ 4 = 40 ÷ 4 = 10.",
  },

  CAL_013: {
    id: "CAL_013",
    category: "calculo",
    difficulty: "hard",
    question: "Si x² - 5x + 6 = 0, ¿cuánto suman sus raíces?",
    options: {
      A: "3",
      B: "5",
      C: "6",
      D: "8",
    },
    correctAnswer: "B",
    explanation: "Las raíces son 2 y 3; su suma es 5.",
  },

  CAL_014: {
    id: "CAL_014",
    category: "calculo",
    difficulty: "hard",
    question: "Resuelve: (2³ + 4²) ÷ 3",
    options: {
      A: "6",
      B: "8",
      C: "10",
      D: "12",
    },
    correctAnswer: "B",
    explanation: "(8 + 16) ÷ 3 = 24 ÷ 3 = 8.",
  },

  CAL_015: {
    id: "CAL_015",
    category: "calculo",
    difficulty: "hard",
    question: "Si 2ˣ = 32, ¿cuánto vale x?",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "8",
    },
    correctAnswer: "B",
    explanation: "32 = 2⁵.",
  },

  CAL_016: {
    id: "CAL_016",
    category: "calculo",
    difficulty: "hard",
    question: "Si a = 3 y b = 4, ¿cuánto vale √(a² + b²)?",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "7",
    },
    correctAnswer: "B",
    explanation: "√(9 + 16) = √25 = 5.",
  },

  CAL_017: {
    id: "CAL_017",
    category: "calculo",
    difficulty: "hard",
    question: "¿Qué número sigue? 2, 6, 12, 20, 30, ...",
    options: {
      A: "36",
      B: "40",
      C: "42",
      D: "44",
    },
    correctAnswer: "C",
    explanation: "Las diferencias son 4, 6, 8, 10 y luego 12.",
  },

  CAL_018: {
    id: "CAL_018",
    category: "calculo",
    difficulty: "hard",
    question: "Si 2x + y = 11 y x - y = 1, ¿cuánto vale x?",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6",
    },
    correctAnswer: "B",
    explanation: "De x - y = 1 se obtiene y = x - 1. Entonces 3x - 1 = 11 y x = 4.",
  },

  // =========================================================
  // DERIVADAS
  // =========================================================

  DER_001: {
    id: "DER_001",
    category: "derivadas",
    difficulty: "easy",
    question: "Deriva: f(x) = 4x³",
    options: {
      A: "4x²",
      B: "12x²",
      C: "12x³",
      D: "3x²",
    },
    correctAnswer: "B",
    explanation: "d/dx(4x³) = 12x².",
  },

  DER_002: {
    id: "DER_002",
    category: "derivadas",
    difficulty: "easy",
    question: "Deriva: f(x) = 7x + 5",
    options: {
      A: "5",
      B: "7",
      C: "7x",
      D: "12",
    },
    correctAnswer: "B",
    explanation: "La derivada de 7x es 7 y la constante desaparece.",
  },

  DER_003: {
    id: "DER_003",
    category: "derivadas",
    difficulty: "easy",
    question: "Deriva: f(x) = x²",
    options: {
      A: "x",
      B: "2x",
      C: "x²",
      D: "2",
    },
    correctAnswer: "B",
    explanation: "d/dx(x²) = 2x.",
  },

  DER_004: {
    id: "DER_004",
    category: "derivadas",
    difficulty: "easy",
    question: "¿Cuál es la derivada de una constante?",
    options: {
      A: "0",
      B: "1",
      C: "La misma constante",
      D: "x",
    },
    correctAnswer: "A",
    explanation: "Una constante no cambia respecto a x.",
  },

  DER_005: {
    id: "DER_005",
    category: "derivadas",
    difficulty: "easy",
    question: "Deriva: f(x) = 5x² + 3",
    options: {
      A: "5x",
      B: "10x",
      C: "10x + 3",
      D: "5x²",
    },
    correctAnswer: "B",
    explanation: "d/dx(5x²) = 10x y la constante desaparece.",
  },

  DER_006: {
    id: "DER_006",
    category: "derivadas",
    difficulty: "easy",
    question: "Deriva: f(x) = 2x⁴",
    options: {
      A: "6x³",
      B: "8x³",
      C: "8x⁴",
      D: "4x³",
    },
    correctAnswer: "B",
    explanation: "2 × 4x³ = 8x³.",
  },

  DER_007: {
    id: "DER_007",
    category: "derivadas",
    difficulty: "medium",
    question: "Si f(x) = 3x² - 4x, ¿cuánto vale f'(2)?",
    options: {
      A: "4",
      B: "6",
      C: "8",
      D: "12",
    },
    correctAnswer: "C",
    explanation: "f'(x) = 6x - 4; f'(2) = 12 - 4 = 8.",
  },

  DER_008: {
    id: "DER_008",
    category: "derivadas",
    difficulty: "medium",
    question: "Deriva: f(x) = x³ + 2x² - 5",
    options: {
      A: "3x² + 4x",
      B: "3x² + 2x",
      C: "x² + 4x",
      D: "3x³ + 4x",
    },
    correctAnswer: "A",
    explanation: "La derivada es 3x² + 4x.",
  },

  DER_009: {
    id: "DER_009",
    category: "derivadas",
    difficulty: "medium",
    question: "Si f(x) = x² + 3x, ¿cuánto vale f'(1)?",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6",
    },
    correctAnswer: "C",
    explanation: "f'(x) = 2x + 3; f'(1) = 5.",
  },

  DER_010: {
    id: "DER_010",
    category: "derivadas",
    difficulty: "medium",
    question: "Deriva: f(x) = 2x³ - x² + 4x",
    options: {
      A: "6x² - 2x + 4",
      B: "6x² - x + 4",
      C: "2x² - 2x + 4",
      D: "6x³ - 2x",
    },
    correctAnswer: "A",
    explanation: "Se deriva término por término.",
  },

  DER_011: {
    id: "DER_011",
    category: "derivadas",
    difficulty: "medium",
    question: "Si f'(x) = 2x - 6, ¿para qué valor de x la pendiente es 0?",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "6",
    },
    correctAnswer: "B",
    explanation: "2x - 6 = 0; entonces x = 3.",
  },

  DER_012: {
    id: "DER_012",
    category: "derivadas",
    difficulty: "medium",
    question: "Deriva: f(x) = 6x⁵ - 2x",
    options: {
      A: "30x⁴ - 2",
      B: "30x⁵ - 2",
      C: "6x⁴ - 2",
      D: "30x⁴",
    },
    correctAnswer: "A",
    explanation: "d/dx(6x⁵) = 30x⁴ y d/dx(-2x) = -2.",
  },

  DER_013: {
    id: "DER_013",
    category: "derivadas",
    difficulty: "hard",
    question: "Deriva: f(x) = (x² + 1)(x + 2)",
    options: {
      A: "2x² + 2x + 1",
      B: "3x² + 4x + 1",
      C: "3x² + 2x + 2",
      D: "x² + 4x + 1",
    },
    correctAnswer: "B",
    explanation: "Por producto: 2x(x + 2) + (x² + 1) = 3x² + 4x + 1.",
  },

  DER_014: {
    id: "DER_014",
    category: "derivadas",
    difficulty: "hard",
    question: "Si f(x) = x³ - 3x² + 2, ¿cuánto vale f'(3)?",
    options: {
      A: "3",
      B: "6",
      C: "9",
      D: "12",
    },
    correctAnswer: "C",
    explanation: "f'(x) = 3x² - 6x; f'(3) = 27 - 18 = 9.",
  },

  DER_015: {
    id: "DER_015",
    category: "derivadas",
    difficulty: "hard",
    question: "Deriva: f(x) = (2x + 1)²",
    options: {
      A: "2(2x + 1)",
      B: "4(2x + 1)",
      C: "4x + 1",
      D: "8x",
    },
    correctAnswer: "B",
    explanation: "Regla de la cadena: 2(2x + 1) × 2.",
  },

  DER_016: {
    id: "DER_016",
    category: "derivadas",
    difficulty: "hard",
    question: "Si f(x) = x⁴ - 4x², ¿cuánto vale f'(2)?",
    options: {
      A: "8",
      B: "12",
      C: "16",
      D: "24",
    },
    correctAnswer: "C",
    explanation: "f'(x) = 4x³ - 8x; f'(2) = 32 - 16 = 16.",
  },

  DER_017: {
    id: "DER_017",
    category: "derivadas",
    difficulty: "hard",
    question: "Deriva: f(x) = x² / 2",
    options: {
      A: "x",
      B: "2x",
      C: "x/2",
      D: "1",
    },
    correctAnswer: "A",
    explanation: "La derivada de (1/2)x² es x.",
  },

  DER_018: {
    id: "DER_018",
    category: "derivadas",
    difficulty: "hard",
    question: "Si f(x) = x³ + x y g(x) = f'(x), ¿cuánto vale g(2)?",
    options: {
      A: "9",
      B: "11",
      C: "13",
      D: "15",
    },
    correctAnswer: "C",
    explanation: "f'(x) = 3x² + 1; g(2) = 12 + 1 = 13.",
  },

  // =========================================================
  // PROGRAMACIÓN
  // =========================================================

  PRO_001: {
    id: "PRO_001",
    category: "programacion",
    difficulty: "easy",
    question: "¿Cuánto vale x?",
    code: "let x = 4;\nx += 3;\nx *= 2;",
    options: {
      A: "10",
      B: "11",
      C: "14",
      D: "16",
    },
    correctAnswer: "C",
    explanation: "4 + 3 = 7 y luego 7 × 2 = 14.",
  },

  PRO_002: {
    id: "PRO_002",
    category: "programacion",
    difficulty: "easy",
    question: "¿Qué devuelve esta expresión?",
    code: "17 % 5",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5",
    },
    correctAnswer: "A",
    explanation: "El operador % devuelve el resto de la división.",
  },

  PRO_003: {
    id: "PRO_003",
    category: "programacion",
    difficulty: "easy",
    question: "¿Cuánto vale x?",
    code: "let x = 10;\nx--;",
    options: {
      A: "8",
      B: "9",
      C: "10",
      D: "11",
    },
    correctAnswer: "B",
    explanation: "x-- disminuye el valor en 1.",
  },

  PRO_004: {
    id: "PRO_004",
    category: "programacion",
    difficulty: "easy",
    question: "¿Qué valor tiene a[1]?",
    code: "const a = [2, 4, 6];",
    options: {
      A: "2",
      B: "4",
      C: "6",
      D: "undefined",
    },
    correctAnswer: "B",
    explanation: "Los arreglos comienzan en índice 0.",
  },

  PRO_005: {
    id: "PRO_005",
    category: "programacion",
    difficulty: "easy",
    question: "¿Cuánto vale x?",
    code: "let x = 5;\nif (x > 3) {\n  x = 8;\n}",
    options: {
      A: "3",
      B: "5",
      C: "8",
      D: "11",
    },
    correctAnswer: "C",
    explanation: "5 > 3 es verdadero, así que x pasa a valer 8.",
  },

  PRO_006: {
    id: "PRO_006",
    category: "programacion",
    difficulty: "easy",
    question: "¿Cuántas veces se ejecuta el bucle?",
    code: "for (let i = 0; i < 4; i++) {\n  // iteración\n}",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6",
    },
    correctAnswer: "B",
    explanation: "i toma los valores 0, 1, 2 y 3.",
  },

  PRO_007: {
    id: "PRO_007",
    category: "programacion",
    difficulty: "medium",
    question: "¿Cuánto vale x?",
    code: "let x = 2;\nfor (let i = 0; i < 3; i++) {\n  x *= 2;\n}",
    options: {
      A: "8",
      B: "12",
      C: "16",
      D: "32",
    },
    correctAnswer: "C",
    explanation: "2 → 4 → 8 → 16.",
  },

  PRO_008: {
    id: "PRO_008",
    category: "programacion",
    difficulty: "medium",
    question: "¿Cuánto vale a[1] + a[3]?",
    code: "const a = [3, 5, 7, 9];",
    options: {
      A: "12",
      B: "14",
      C: "16",
      D: "18",
    },
    correctAnswer: "B",
    explanation: "a[1] = 5 y a[3] = 9; 5 + 9 = 14.",
  },

  PRO_009: {
    id: "PRO_009",
    category: "programacion",
    difficulty: "medium",
    question: "¿Cuál es el resultado?",
    code: "let sum = 0;\nfor (let i = 1; i <= 3; i++) {\n  sum += i;\n}",
    options: {
      A: "3",
      B: "5",
      C: "6",
      D: "9",
    },
    correctAnswer: "C",
    explanation: "1 + 2 + 3 = 6.",
  },

  PRO_010: {
    id: "PRO_010",
    category: "programacion",
    difficulty: "medium",
    question: "¿Cuál es el resultado?",
    code: "let x = 7;\nif (x % 2 === 0) {\n  x += 2;\n} else {\n  x += 3;\n}",
    options: {
      A: "8",
      B: "9",
      C: "10",
      D: "12",
    },
    correctAnswer: "C",
    explanation: "7 es impar, por lo tanto se ejecuta x += 3.",
  },

  PRO_011: {
    id: "PRO_011",
    category: "programacion",
    difficulty: "medium",
    question: "¿Qué valor devuelve JavaScript?",
    code: "Boolean(0)",
    options: {
      A: "true",
      B: "false",
      C: "0",
      D: "undefined",
    },
    correctAnswer: "B",
    explanation: "0 es un valor falsy.",
  },

  PRO_012: {
    id: "PRO_012",
    category: "programacion",
    difficulty: "medium",
    question: "¿Cuál es el valor final de x?",
    code: "let x = 1;\nwhile (x < 10) {\n  x *= 2;\n}",
    options: {
      A: "8",
      B: "10",
      C: "16",
      D: "20",
    },
    correctAnswer: "C",
    explanation: "1 → 2 → 4 → 8 → 16.",
  },

  PRO_013: {
    id: "PRO_013",
    category: "programacion",
    difficulty: "hard",
    question: "¿Cuál es el resultado?",
    code: "let x = 2;\nfor (let i = 0; i < 3; i++) {\n  x = x * 2 + 1;\n}",
    options: {
      A: "15",
      B: "19",
      C: "23",
      D: "31",
    },
    correctAnswer: "C",
    explanation: "2 → 5 → 11 → 23.",
  },

  PRO_014: {
    id: "PRO_014",
    category: "programacion",
    difficulty: "hard",
    question: "¿Cuál es el resultado?",
    code: "let s = 0;\nfor (let i = 1; i <= 4; i++) {\n  s += i * i;\n}",
    options: {
      A: "20",
      B: "25",
      C: "30",
      D: "36",
    },
    correctAnswer: "C",
    explanation: "1² + 2² + 3² + 4² = 30.",
  },

  PRO_015: {
    id: "PRO_015",
    category: "programacion",
    difficulty: "hard",
    question: "¿Cuál es el resultado?",
    code: "let count = 0;\nfor (let i = 1; i <= 4; i++) {\n  for (let j = 0; j < i; j++) {\n    count++;\n  }\n}",
    options: {
      A: "8",
      B: "10",
      C: "12",
      D: "16",
    },
    correctAnswer: "B",
    explanation: "Se ejecuta 1 + 2 + 3 + 4 = 10 veces.",
  },

  PRO_016: {
    id: "PRO_016",
    category: "programacion",
    difficulty: "hard",
    question: "¿Cuál es el resultado?",
    code: "let x = 10;\nfor (let i = 0; i < 3; i++) {\n  x -= i;\n}",
    options: {
      A: "6",
      B: "7",
      C: "8",
      D: "9",
    },
    correctAnswer: "B",
    explanation: "x resta 0, luego 1 y luego 2: 10 - 3 = 7.",
  },

  PRO_017: {
    id: "PRO_017",
    category: "programacion",
    difficulty: "hard",
    question: "¿Cuánto vale b[2]?",
    code: "const a = [1, 2, 3, 4];\nconst b = a.map((x) => x * 2);",
    options: {
      A: "4",
      B: "6",
      C: "8",
      D: "10",
    },
    correctAnswer: "B",
    explanation: "b = [2, 4, 6, 8], por lo tanto b[2] = 6.",
  },

  PRO_018: {
    id: "PRO_018",
    category: "programacion",
    difficulty: "hard",
    question: "¿Cuál es el resultado?",
    code: "let x = 1;\nfor (let i = 0; i < 4; i++) {\n  x += x;\n}",
    options: {
      A: "8",
      B: "12",
      C: "16",
      D: "32",
    },
    correctAnswer: "C",
    explanation: "1 → 2 → 4 → 8 → 16.",
  },

  // =========================================================
  // COMPLEJIDAD ALGORÍTMICA
  // =========================================================

  COM_001: {
    id: "COM_001",
    category: "complejidad",
    difficulty: "easy",
    question: "Un bucle recorre n elementos una sola vez. ¿Complejidad?",
    options: {
      A: "O(1)",
      B: "O(log n)",
      C: "O(n)",
      D: "O(n²)",
    },
    correctAnswer: "C",
    explanation: "La cantidad de operaciones crece linealmente con n.",
  },

  COM_002: {
    id: "COM_002",
    category: "complejidad",
    difficulty: "easy",
    question: "¿Qué complejidad tiene este acceso?",
    code: "array[5]",
    options: {
      A: "O(1)",
      B: "O(n)",
      C: "O(log n)",
      D: "O(n²)",
    },
    correctAnswer: "A",
    explanation: "El acceso por índice es constante.",
  },

  COM_003: {
    id: "COM_003",
    category: "complejidad",
    difficulty: "easy",
    question: "¿Cuál crece más rápido?",
    options: {
      A: "O(1)",
      B: "O(log n)",
      C: "O(n)",
      D: "O(n²)",
    },
    correctAnswer: "D",
    explanation: "Entre esas opciones, n² crece más rápido.",
  },

  COM_004: {
    id: "COM_004",
    category: "complejidad",
    difficulty: "easy",
    question: "¿Qué complejidad tiene buscar un valor en una lista de n elementos?",
    options: {
      A: "O(1)",
      B: "O(log n)",
      C: "O(n)",
      D: "O(n²)",
    },
    correctAnswer: "C",
    explanation: "En el peor caso se revisan los n elementos.",
  },

  COM_005: {
    id: "COM_005",
    category: "complejidad",
    difficulty: "easy",
    question: "¿Qué complejidad es más eficiente cuando n es grande?",
    options: {
      A: "O(n²)",
      B: "O(n)",
      C: "O(log n)",
      D: "O(2ⁿ)",
    },
    correctAnswer: "C",
    explanation: "O(log n) crece mucho más lentamente.",
  },

  COM_006: {
    id: "COM_006",
    category: "complejidad",
    difficulty: "easy",
    question: "¿Qué complejidad tiene una instrucción que se ejecuta una sola vez?",
    options: {
      A: "O(1)",
      B: "O(n)",
      C: "O(n²)",
      D: "O(log n)",
    },
    correctAnswer: "A",
    explanation: "No depende del tamaño de entrada.",
  },

  COM_007: {
    id: "COM_007",
    category: "complejidad",
    difficulty: "medium",
    question: "¿Qué complejidad tiene este bucle?",
    code: "for (let i = 1; i < n; i *= 2) {\n  // operación constante\n}",
    options: {
      A: "O(1)",
      B: "O(n)",
      C: "O(log n)",
      D: "O(n²)",
    },
    correctAnswer: "C",
    explanation: "i se duplica en cada iteración.",
  },

  COM_008: {
    id: "COM_008",
    category: "complejidad",
    difficulty: "medium",
    question: "¿Qué complejidad tienen dos bucles consecutivos de n iteraciones?",
    options: {
      A: "O(1)",
      B: "O(n)",
      C: "O(n²)",
      D: "O(2ⁿ)",
    },
    correctAnswer: "B",
    explanation: "n + n = 2n, que se simplifica a O(n).",
  },

  COM_009: {
    id: "COM_009",
    category: "complejidad",
    difficulty: "medium",
    question: "¿Qué complejidad producen dos bucles anidados de n iteraciones?",
    options: {
      A: "O(n)",
      B: "O(log n)",
      C: "O(n²)",
      D: "O(2n)",
    },
    correctAnswer: "C",
    explanation: "n × n = n².",
  },

  COM_010: {
    id: "COM_010",
    category: "complejidad",
    difficulty: "medium",
    question: "¿Cuál es la complejidad típica de la búsqueda binaria?",
    options: {
      A: "O(1)",
      B: "O(log n)",
      C: "O(n)",
      D: "O(n²)",
    },
    correctAnswer: "B",
    explanation: "Cada paso reduce el espacio de búsqueda aproximadamente a la mitad.",
  },

  COM_011: {
    id: "COM_011",
    category: "complejidad",
    difficulty: "medium",
    question: "¿Cómo se expresa la complejidad de un bucle con n/2 iteraciones?",
    options: {
      A: "O(1)",
      B: "O(log n)",
      C: "O(n)",
      D: "O(n²)",
    },
    correctAnswer: "C",
    explanation: "Las constantes se ignoran en notación Big O.",
  },

  COM_012: {
    id: "COM_012",
    category: "complejidad",
    difficulty: "medium",
    question: "¿Cómo se simplifica O(3n + 10)?",
    options: {
      A: "O(1)",
      B: "O(3n)",
      C: "O(n)",
      D: "O(n²)",
    },
    correctAnswer: "C",
    explanation: "Big O ignora constantes y términos menores.",
  },

  COM_013: {
    id: "COM_013",
    category: "complejidad",
    difficulty: "hard",
    question: "Un bucle de n contiene otro de i iteraciones. ¿Qué complejidad tiene?",
    options: {
      A: "O(log n)",
      B: "O(n)",
      C: "O(n²)",
      D: "O(2ⁿ)",
    },
    correctAnswer: "C",
    explanation: "1 + 2 + ... + n es proporcional a n².",
  },

  COM_014: {
    id: "COM_014",
    category: "complejidad",
    difficulty: "hard",
    question: "Un bucle de n contiene otro que duplica i hasta n. ¿Complejidad?",
    options: {
      A: "O(n)",
      B: "O(log n)",
      C: "O(n log n)",
      D: "O(n²)",
    },
    correctAnswer: "C",
    explanation: "O(n) × O(log n) = O(n log n).",
  },

  COM_015: {
    id: "COM_015",
    category: "complejidad",
    difficulty: "hard",
    question: "¿Qué complejidad tiene este bucle?",
    code: "for (i = n; i > 1; i /= 2) {\n  // operación constante\n}",
    options: {
      A: "O(1)",
      B: "O(log n)",
      C: "O(n)",
      D: "O(n²)",
    },
    correctAnswer: "B",
    explanation: "El valor se divide por 2 en cada iteración.",
  },

  COM_016: {
    id: "COM_016",
    category: "complejidad",
    difficulty: "hard",
    question: "Un algoritmo ejecuta n² + n + 100 operaciones. ¿Big O?",
    options: {
      A: "O(n)",
      B: "O(n²)",
      C: "O(n³)",
      D: "O(100)",
    },
    correctAnswer: "B",
    explanation: "Domina el término de mayor crecimiento: n².",
  },

  COM_017: {
    id: "COM_017",
    category: "complejidad",
    difficulty: "hard",
    question: "El problema se divide entre 2 en cada paso. ¿Qué complejidad tiene?",
    options: {
      A: "O(1)",
      B: "O(log n)",
      C: "O(n)",
      D: "O(n²)",
    },
    correctAnswer: "B",
    explanation: "El número de divisiones necesarias crece logarítmicamente.",
  },

  COM_018: {
    id: "COM_018",
    category: "complejidad",
    difficulty: "hard",
    question: "Un algoritmo O(n²) duplica su entrada. ¿Cuánto aumenta el trabajo?",
    options: {
      A: "El doble",
      B: "El triple",
      C: "Cuatro veces",
      D: "Ocho veces",
    },
    correctAnswer: "C",
    explanation: "(2n)² = 4n².",
  },

  // =========================================================
  // LÓGICA
  // =========================================================

  LOG_001: {
    id: "LOG_001",
    category: "logica",
    difficulty: "easy",
    question: "¿Qué número sigue? 2, 5, 10, 17, 26, ...",
    options: {
      A: "35",
      B: "36",
      C: "37",
      D: "38",
    },
    correctAnswer: "C",
    explanation: "Las diferencias son 3, 5, 7, 9 y luego 11.",
  },

  LOG_002: {
    id: "LOG_002",
    category: "logica",
    difficulty: "easy",
    question: "Si A = verdadero y B = falso, ¿cuánto vale A AND NOT B?",
    options: {
      A: "Verdadero",
      B: "Falso",
      C: "Indefinido",
      D: "0",
    },
    correctAnswer: "A",
    explanation: "NOT B es verdadero; verdadero AND verdadero es verdadero.",
  },

  LOG_003: {
    id: "LOG_003",
    category: "logica",
    difficulty: "easy",
    question: "¿Qué número sigue? 3, 6, 12, 24, ...",
    options: {
      A: "36",
      B: "42",
      C: "48",
      D: "54",
    },
    correctAnswer: "C",
    explanation: "Cada término se multiplica por 2.",
  },

  LOG_004: {
    id: "LOG_004",
    category: "logica",
    difficulty: "easy",
    question: "Si todos los gatos son animales y Mishi es gato, entonces...",
    options: {
      A: "Mishi no es animal",
      B: "Mishi es animal",
      C: "No se puede saber",
      D: "Mishi es perro",
    },
    correctAnswer: "B",
    explanation: "Es una deducción directa.",
  },

  LOG_005: {
    id: "LOG_005",
    category: "logica",
    difficulty: "easy",
    question: "¿Cuánto vale NOT(true)?",
    options: {
      A: "true",
      B: "false",
      C: "1",
      D: "null",
    },
    correctAnswer: "B",
    explanation: "La negación de verdadero es falso.",
  },

  LOG_006: {
    id: "LOG_006",
    category: "logica",
    difficulty: "easy",
    question: "Si A = false y B = true, ¿cuánto vale A OR B?",
    options: {
      A: "true",
      B: "false",
      C: "undefined",
      D: "0",
    },
    correctAnswer: "A",
    explanation: "OR es verdadero cuando al menos uno es verdadero.",
  },

  LOG_007: {
    id: "LOG_007",
    category: "logica",
    difficulty: "medium",
    question: "Si todos los A son B y ningún B es C, ¿puede algún A ser C?",
    options: {
      A: "Sí",
      B: "No",
      C: "Solo algunos",
      D: "No se sabe",
    },
    correctAnswer: "B",
    explanation: "Si A pertenece a B y ningún B pertenece a C, entonces ningún A puede ser C.",
  },

  LOG_008: {
    id: "LOG_008",
    category: "logica",
    difficulty: "medium",
    question: "¿Cuál es el resultado binario de 1011 + 0010?",
    options: {
      A: "1100",
      B: "1101",
      C: "1110",
      D: "1111",
    },
    correctAnswer: "B",
    explanation: "11 + 2 = 13, y 13 en binario es 1101.",
  },

  LOG_009: {
    id: "LOG_009",
    category: "logica",
    difficulty: "medium",
    question: "Si A → B y A es verdadero, ¿qué debe ocurrir con B?",
    options: {
      A: "Debe ser verdadero",
      B: "Debe ser falso",
      C: "Puede ser cualquiera",
      D: "No existe",
    },
    correctAnswer: "A",
    explanation: "Por modus ponens, A y A → B implican B.",
  },

  LOG_010: {
    id: "LOG_010",
    category: "logica",
    difficulty: "medium",
    question: "¿Qué número sigue? 1, 2, 4, 7, 11, 16, ...",
    options: {
      A: "20",
      B: "21",
      C: "22",
      D: "23",
    },
    correctAnswer: "C",
    explanation: "Se suma 1, 2, 3, 4, 5 y luego 6.",
  },

  LOG_011: {
    id: "LOG_011",
    category: "logica",
    difficulty: "medium",
    question: "¿Cuántos valores posibles tiene una variable booleana?",
    options: {
      A: "1",
      B: "2",
      C: "4",
      D: "8",
    },
    correctAnswer: "B",
    explanation: "Verdadero o falso.",
  },

  LOG_012: {
    id: "LOG_012",
    category: "logica",
    difficulty: "medium",
    question: "Si P es falso y Q es falso, ¿cuánto vale P OR Q?",
    options: {
      A: "Verdadero",
      B: "Falso",
      C: "Indefinido",
      D: "1",
    },
    correctAnswer: "B",
    explanation: "OR solo es verdadero si al menos una condición es verdadera.",
  },

  LOG_013: {
    id: "LOG_013",
    category: "logica",
    difficulty: "hard",
    question: "Si A implica B y B es falso, ¿qué se concluye sobre A?",
    options: {
      A: "A es verdadero",
      B: "A es falso",
      C: "A puede ser cualquiera",
      D: "B es verdadero",
    },
    correctAnswer: "B",
    explanation: "Por modus tollens: A → B y ¬B implican ¬A.",
  },

  LOG_014: {
    id: "LOG_014",
    category: "logica",
    difficulty: "hard",
    question: "¿Cuántas combinaciones forman 4 variables booleanas?",
    options: {
      A: "8",
      B: "12",
      C: "16",
      D: "24",
    },
    correctAnswer: "C",
    explanation: "Cada variable tiene 2 estados: 2⁴ = 16.",
  },

  LOG_015: {
    id: "LOG_015",
    category: "logica",
    difficulty: "hard",
    question: "Si P = true y Q = false,\n¿cuánto vale (P\u00A0AND\u00A0Q) OR NOT\u00A0Q?",
    options: {
      A: "true",
      B: "false",
      C: "undefined",
      D: "null",
    },
    correctAnswer: "A",
    explanation: "P AND Q es false; NOT Q es true; false OR true = true.",
  },

  LOG_016: {
    id: "LOG_016",
    category: "logica",
    difficulty: "hard",
    question: "¿Qué número sigue? 1, 3, 7, 15, 31, ...",
    options: {
      A: "47",
      B: "55",
      C: "63",
      D: "64",
    },
    correctAnswer: "C",
    explanation: "Cada término es el anterior × 2 + 1.",
  },

  LOG_017: {
    id: "LOG_017",
    category: "logica",
    difficulty: "hard",
    question: "Tres interruptores booleanos pueden formar ¿cuántas combinaciones?",
    options: {
      A: "4",
      B: "6",
      C: "8",
      D: "9",
    },
    correctAnswer: "C",
    explanation: "2³ = 8 combinaciones.",
  },

  LOG_018: {
    id: "LOG_018",
    category: "logica",
    difficulty: "hard",
    question: "Si A XOR B es verdadero y A es verdadero, ¿cuánto vale B?",
    options: {
      A: "Verdadero",
      B: "Falso",
      C: "Ambos",
      D: "No se puede saber",
    },
    correctAnswer: "B",
    explanation: "XOR es verdadero únicamente cuando los valores son diferentes.",
  },
};
