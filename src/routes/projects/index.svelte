<style lang="scss">
  .container {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
}
section {
    padding: 1rem;
}
.project {
    width: 32%;
    margin: 0.3rem;
    border-radius: 0.25rem;
    position: relative;
    border: 0.1rem solid black;
    text-align: center;
  }
  img {
    width: 100%;
  }
  h1 {
    font-size: $fs_mobileRegular;
  }
  p {
    font-size: $fs_mobileSmall;
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
  export let projects
  projects = new Array(9).fill([...projects]).flat()
</script>

<svelte:head>
  <title>⚡ Projects</title>
</svelte:head>

<div class="container">
  {#each projects as project}
    <div class="project">
      <img src="{project.thumbnail}" alt="" />
      <section>
        <h1>{project.name}</h1>
        <p>{project.brief}</p>
      </section>
    </div>
  {/each}
</div>
