import Pt from 'blockly/msg/pt-br.js'
import type { Locale } from "svelte-blockly"

const pt: Locale = {
  rtl: false,
  msg: {
    ...Pt,
    CAT_LOGIC: 'Lógica',
    CAT_LOOPS: 'Laços',
    CAT_MATH: 'Matemática',
    CAT_LISTS: 'Listas',
    CAT_VARIABLES: 'Variáveis',
    CAT_FUNCTIONS: 'Funções',
    CAT_TEXT: 'Texto',
    MATH_MODULO_TITLE: 'resto de %1 ÷ %2',
    CONTROLS_IF_MSG_IF: 'se',
    CONTROLS_REPEAT_INPUT_DO: 'execute',
    CONTROLS_REPEAT_TITLE: 'por %1 vezes',
    VARIABLES_SET: 'faça %1 valer %2',
    PROCEDURES_DEFNORETURN_PROCEDURE: 'nome',
    PROCEDURES_DEFNORETURN_TITLE: 'função',
    PROCEDURES_DEFRETURN_PROCEDURE: 'nome',
    PROCEDURES_DEFRETURN_TITLE: 'função'
    // CONTROLS_FOR_TITLE: 'para %1 de %2 até %3',
  },
};
export const locales: Record<string, Locale> = { pt };
