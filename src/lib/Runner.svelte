<button class="button is-light" on:click={ runCode }>
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

  JavaScript.addReservedWords('Blockly,JavaScript,jsCode,inputStr,outputStr,console,document,window')

  let inputStr: string = ''
  let outputStr = ''

  function runCode() {
    const __input: string[] = inputStr.split('\n')
    const __output: string[] = []
    const code = $jsCode

    try {
      eval(code);
    } catch (e) {
      console.error(e);
    }
    outputStr = __output.join('\n')
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