<script context="module">
    export async function preload(page, session) {
    const { BUTTER } = session;

    return { token: BUTTER };
  }
</script>

<script lang="ts">
    import ButterCMS from "./_ButterCMS";
    export let token;
</script>

<main>
  <h1>HELLO</h1>
</main>
