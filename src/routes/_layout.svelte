<Nav {segment} />

<main>
  <slot />
</main>

<Footer />

<style>
main {
  position: relative;
  max-width: 700px;
  /* padding: 1em; */
  margin: 0 auto;
}
</style>

<script>
  import Nav from '../components/Nav.svelte'
  import Footer from '../components/Footer.svelte'


  export let segment
</script>
