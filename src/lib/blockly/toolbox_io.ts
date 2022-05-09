import Blockly from 'blockly/core.js'
import 'blockly/blocks.js'

import './blocks/print'
import './blocks/input_number'
import './blocks/input_line'

Blockly.Blocks['math_change'] = null;  // remove o "alterar VAR por X"

export const contents: Blockly.utils.toolbox.StaticCategoryInfo[] = [
  {
    ...(undefined as Blockly.utils.toolbox.StaticCategoryInfo),
    kind: 'category',
    name: 'E/S',
    colour: '%{BKY_COLOUR_HUE}',
    contents: [
      { kind: 'block', type: 'io_print' },
      { kind: 'block', type: 'io_input_number' },
      { kind: 'block', type: 'io_input_line' },
    ] as Blockly.utils.toolbox.BlockInfo[],
  },
  {
    ...(undefined as Blockly.utils.toolbox.StaticCategoryInfo),
    kind: 'category',
    name: '%{BKY_CAT_MATH}',
    colour: '%{BKY_MATH_HUE}',
    contents: [
      { kind: 'block', type: 'math_number' },
      { kind: 'block', type: 'math_arithmetic' },
      { kind: 'block', type: 'math_modulo' },
    ] as Blockly.utils.toolbox.BlockInfo[],
  },
  {
    ...(undefined as Blockly.utils.toolbox.StaticCategoryInfo),
    kind: 'category',
    name: '%{BKY_CAT_TEXT}',
    colour: '%{BKY_TEXTS_HUE}',
    contents: [
      { kind: 'block', type: 'text' } as Blockly.utils.toolbox.BlockInfo,
      {
        ...(undefined as Blockly.utils.toolbox.BlockInfo),
        kind: 'block',
        blockxml: `<block type="text_join" inline="true" />`,
      },
    ],
  },
]

// Toolbox com as categorias em `contents` mais a categoria de variáveis
export default {
  kind: 'categoryToolbox',
  contents: [
    ...contents,
    { kind: 'sep' } as Blockly.utils.toolbox.SeparatorInfo,
    {
      ...(undefined as Blockly.utils.toolbox.StaticCategoryInfo),
      kind: 'category',
      name: '%{BKY_CAT_VARIABLES}',
      custom: 'VARIABLE',
      colour: '%{BKY_VARIABLES_HUE}',
    },
  ],
} as Blockly.utils.toolbox.ToolboxInfo
