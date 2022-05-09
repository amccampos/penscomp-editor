import type Blockly from 'blockly/core.js'

import './blocks/list'

import { contents as if_contents } from './toolbox_if'

// categorias de condicionais mais as de laços (com for each) e as de listas
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
      { kind: 'block', type: 'controls_forEach' },
    ] as Blockly.utils.toolbox.BlockInfo[],
  },
  {
    ...(undefined as Blockly.utils.toolbox.StaticCategoryInfo),
    kind: 'category',
    name: '%{BKY_CAT_LISTS}',
    colour: '%{BKY_LISTS_HUE}',
    contents: [
      {
        kind: 'block',
        blockxml: `
          <block type="lists_create_with">
            <mutation items="0" />
          </block>
        `,
      },
      { kind: 'block', type: 'lists_addItem' },
      { kind: 'block', type: 'lists_setItem' },
      { kind: 'block', type: 'lists_getItem' },
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