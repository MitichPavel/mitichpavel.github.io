<script lang="ts">
  import Input from './lib/Input.svelte'
</script>

<main>
  <h1>Zoom page on focus input IOS Solution</h1> 

  <form class="form" id="test">
    <label for="zoom-page">Zoom page font-size: 15px</label>
    <Input id="zoom-page" class="zoom-page" placeholder="input zoom page" />
    <label for="zoom-page">NO zoom page font-size: 16px</label>
    <Input class="no-zoom-page" placeholder="input no zoom page" />
  </form>
</main>

<style style="scss">
  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  :global(.zoom-page) {
    font-size: 15px;
  }

  :global(.no-zoom-page) {
    font-size: 16px;
  }
</style>
