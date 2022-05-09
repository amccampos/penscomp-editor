import type Blockly from 'blockly/core.js'

import './blocks/for_count'
import './blocks/while'

import { contents as if_contents } from './toolbox_if'

// categorias de condicionais mais as de laços
export const contents: Blockly.utils.toolbox.StaticCategoryInfo[] = [
  ...if_contents,
  {
    ...(undefined as Blockly.utils.toolbox.StaticCategoryInfo),
    kind: 'category',
    name: '%{BKY_CAT_LOOPS}',
    colour: '%{BKY_LOOPS_HUE}',
    contents: [
      { kind: 'block', type: 'controls_repeat_ext' },
      { kind: 'block', type: 'controls_while2' },
      { kind: 'block', type: 'controls_for_count' },
    ] as Blockly.utils.toolbox.BlockInfo[],
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