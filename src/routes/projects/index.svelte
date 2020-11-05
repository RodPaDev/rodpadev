<style lang="scss">
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
}

</style>

<script context="module">
  import ButterCMS from '../../includes/ButterCMS'
  export async function preload(page, session) {
    const { BUTTER } = session
    let butter = new ButterCMS(BUTTER)
    let res = await butter.getCollection(['projects'])
    let projects = await res.data
    return projects
  }
</script>

<script>
  import Card from './card.svelte';
  export let projects
</script>

<svelte:head>
  <title>⚡ Projects</title>
</svelte:head>

<div class="container">
  {#each projects as project}
    <Card {project} />
  {/each}
</div>
