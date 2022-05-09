<div class="navbar">
  <h1>Programação em blocos</h1>
  <h2 class="mr">Ferramentas</h2>
  <div class="select is-light mr">
    <select bind:value={ $toolboxId }>
      {#each toolboxList as toolbox, i}
        <option value={i}>{toolbox}</option>
      {/each}
    </select>
  </div>
  <button class="button is-light" on:click={ () => showModal = true }>
    código Python
  </button>
</div>

<CodeModal show={ showModal } on:close={ () => showModal = false } />

<script>
  import CodeModal from './CodeModal.svelte'
  import { toolboxId, toolboxList } from '../stores/toolbox'

  let showModal = false
</script>

<style>
  .navbar {
    padding: 10px;
    background-color: #dddddd;
    border-bottom: solid 2px #ccc;
    display: flex;
    align-items: center;
  }
  h1 {
    margin: 0px;
    font-size: 18pt;
    font-weight: normal;
    flex-grow: 1;
  }
  h2 {
    font-size: 14pt;
  }
  .mr {
    margin-right: 10px;
  }
</style>