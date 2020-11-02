<script context="module">
    export async function preload(page, session) {
    const { BUTTER } = session;

    return { token: BUTTER };
  }
</script>

<script lang="ts">
    import ButterCMS from "../../includes/TButterCMS"
    export let token;
    let butter = new ButterCMS(token)
    butter.printKey()
</script>

<main>
  <h1>HELLO</h1>
</main>
