import Blockly from 'blockly/core.js'
import 'blockly/blocks.js'

import { contents as list_contents } from './toolbox_list'

Blockly.Blocks['procedures_ifreturn'] = null;  // remove o "se X return Y"

// categorias de laços mais as de funções
export const contents: Blockly.utils.toolbox.CategoryInfo[] = [
  ...list_contents,
  {
    ...(undefined as Blockly.utils.toolbox.StaticCategoryInfo),
    kind: 'category',
    name: '%{BKY_CAT_FUNCTIONS}',
    custom: 'PROCEDURE',
    colour: '%{BKY_PROCEDURES_HUE}',
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