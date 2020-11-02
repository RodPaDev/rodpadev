<style lang="scss">
  main{
    text-align: center;
  }
  h1{
    font-size: $fs_big;
  }
  p{
    font-size: $fs_medium;
  }
</style>

<script>
  export let status
  export let error

  const dev = process.env.NODE_ENV === 'development'
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>


<main>
  <h1>{status}</h1>

  <p>{error.message}</p>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</main>
