<button class="button is-light" on:click={ showCode }>
  Executa
</button>
<div class="content">
  <h3>Entrada</h3>
  <textarea class="textarea" bind:value={ inputStr }></textarea>
</div>
<div class="content">
  <h3>Saída produzida</h3>
  <textarea class="textarea" bind:value={ outputStr } readonly></textarea>
</div>

<script lang="ts">
  import Blockly from 'blockly/core.js'
  import { jsCode } from '../stores/code'

  const JavaScript = Blockly['JavaScript']

  JavaScript.addReservedWords('Blockly')
  JavaScript.addReservedWords('JavaScript')
  JavaScript.addReservedWords('jsCode')

  let inputStr: string = ''
  let outputStr = ''

  function showCode() {
    console.log($jsCode)
    const input: string[] = inputStr.split('\n')
    const output: string[] = []
    console.log(input)

    try {
      eval($jsCode);
    } catch (e) {
      console.error(e);
    }
    outputStr = output.join('\n')
    console.log(output)
    console.log(outputStr)
  }
</script>


<style>
  .button {
    margin: 5px;
  }
  h3 {
    margin: 0 5px;
    font-size: 12pt;
    font-weight: normal;
    line-height: 18pt;
  }
  .content {
    flex-grow: 1;
    margin: 5px;
    display: flex;
    flex-direction: column;
  }
  textarea {
    /* width: 283px; */
    flex-grow: 1;
    /* margin: 5px; */
    /* border-color: #ccc; */
  }
</style>