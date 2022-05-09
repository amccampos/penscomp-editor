import { derived, writable, type Writable } from "svelte/store"
import toolboxIO from '../lib/blockly/toolbox_io'
import toolboxIF from '../lib/blockly/toolbox_if'
import toolboxLOOP from '../lib/blockly/toolbox_loop'
import toolboxLIST from '../lib/blockly/toolbox_list'
import toolboxFUNC from '../lib/blockly/toolbox_func'

export enum ToolboxType {
  IO,
  CONDITIONALS,
  LOOPS,
  LISTS,
  FUNCTIOS
}

export const toolboxList = ['E/S e variáveis', 'Condicionais', 'Laços', 'Listas', 'Funções']
export const toolboxes = [toolboxIO, toolboxIF, toolboxLOOP, toolboxLIST, toolboxFUNC]

export const toolboxId: Writable<ToolboxType> = writable(ToolboxType.IO)
export const toolbox = derived(toolboxId, $id => toolboxes[$id])