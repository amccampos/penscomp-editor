import type Blockly from 'blockly/core.js'

import { contents as io_contents } from './toolbox_io'

// categorias de IO mais as de lógica
export const contents: Blockly.utils.toolbox.StaticCategoryInfo[] = [
  ...io_contents,
  {
    ...(undefined as Blockly.utils.toolbox.StaticCategoryInfo),
    kind: 'category',
    name: '%{BKY_CAT_LOGIC}',
    colour: '%{BKY_LOGIC_HUE}',
    contents: [
      { kind: 'block', type: 'controls_if' },
      { kind: 'block', type: 'logic_compare' },
      { kind: 'block', type: 'logic_operation' },
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
