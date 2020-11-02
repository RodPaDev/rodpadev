<Nav {segment} />

<main>
  <slot />
</main>

<style>
main {
  position: relative;
  max-width: 700px;
  padding: 1em;
  margin: 0 auto;
}
</style>

<script>
  import Nav from '../components/Nav.svelte'

  export let segment
</script>
