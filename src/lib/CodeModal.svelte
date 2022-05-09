<div class={'modal' + (show ? ' is-active' : '') }>
  <div class="modal-background" on:click={ close }></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Código em Python</p>
    </header>
    <section class="modal-card-body ">
      <Highlight language={ python } { code } />
    </section>
    <footer class="modal-card-foot">
      <button class="button" use:copy={ code } on:svelte-copy={() => copied = true }>
        Copiar para área de transferência
      </button>
      {#if copied}
        <span class="copied">Copiado</span>
      {/if}
    </footer>
  </div>
</div>

<script lang="ts">
  import { onDestroy, createEventDispatcher } from 'svelte'
  import Highlight from "svelte-highlight"
  import python from "svelte-highlight/languages/python"
  import "svelte-highlight/styles/github.css"

  import { copy } from 'svelte-copy'

  export let show: boolean = false
  const dispatcher = createEventDispatcher()

  import { pyCode } from '../stores/code'
  let code = 'Sem código no momento.'
  const unsubscribe = pyCode.subscribe(value => {
    code = value || 'Sem código no momento.'
  })
  onDestroy(unsubscribe)

  let copied = false

  function close() {
    show = false
    dispatcher('close')
  }
</script>

<style>
  .copied {
    font-style: italic;
  }
</style>