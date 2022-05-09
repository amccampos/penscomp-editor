<div class="grow-col">
	<Navbar />
	<div class="grow-row">
		<div class="grow-col">
			<!-- <Tabs {tabs} selected={toolboxIndex} on:selection={e => changeToolbox(e.detail)} /> -->
			<Blockly toolbox={ $toolbox }></Blockly>
		</div>
		<div class="fixed-col">
			<Runner />
		</div>	
	</div>
</div>

<script>
	import Blockly from './lib/blockly/Blockly.svelte'
	import Navbar from './lib/Navbar.svelte'
	import Runner from './lib/Runner.svelte'
	import { toolbox } from './stores/toolbox'
</script>

<style>
.grow-row {
	display: flex;
	flex-direction: row;
	flex-grow: 1;
}
.grow-col {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
}
.fixed-col {
	display: flex;
	flex-direction: column;
	width: 300px;
}
</style>