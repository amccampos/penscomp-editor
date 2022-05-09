<div class="blockly-container">
	<BlocklyComponent
		{config}
		locale={locales[locale]}
		bind:workspace
		bind:transform
		on:change={onChange}
	/>
</div>

<script lang="ts">
	import Blockly from 'blockly/core.js'
	import 'blockly/blocks.js'
	import 'blockly/javascript.js'
	import 'blockly/python.js'

	import BlocklyComponent from 'svelte-blockly'
  import type { Transform } from 'svelte-blockly'

	import { locales } from './locales'
	import { config } from './config'
	import { jsCode, pyCode } from '../../stores/code'

	let locale = 'pt'
	let transform: Transform
	let workspace: Blockly.WorkspaceSvg

	export let toolbox: Blockly.utils.toolbox.ToolboxDefinition
	$: config.toolbox = toolbox

	// para ser igual ao do curso da OBI
	Blockly.HSV_SATURATION = 0.6;
	Blockly.HSV_VALUE = 0.7;
	
	// let saved: [string, Transform] | undefined = undefined
	// function handleSave() {
	// 	const xml = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace));
	// 	saved = [xml, transform];
	// }
	// function handleRestore() {
	// 	Blockly.Xml.clearWorkspaceAndLoadFromXml(Blockly.Xml.textToDom(saved[0]), workspace);
	// 	transform = saved[1];
	// }

	function onChange() {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const python = (Blockly as any)['Python'];
		const js = (Blockly as any)['JavaScript'];
		try {
			const pycode = python.workspaceToCode(workspace)
			const jscode = js.workspaceToCode(workspace)
			pyCode.set(pycode)
			jsCode.set(jscode)
		} catch (_err) {
			// Happens e.g. when deleting a function that is used somewhere.
			// Blockly will quickly recover from this, so it's not a big deal.
			// Just make sure the app doesn't crash until then.
		}
	}
</script>

<style>
	.blockly-container {
		display: flex;
		flex-direction: row;
		flex-grow: 1;
		width: 100%;
		z-index: 0;
	}
</style>