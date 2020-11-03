<style lang="scss">
  a {
    font-size: $fs_mobileRegular;
    color: black;
    text-decoration: none;
    &:hover {
      color: orange;
    }
  }
</style>

<script lang="ts">
  export let href: string
  export let isNext: boolean
</script>

{#if isNext}
  <a rel="external" href="{href}">Next{' >'}</a>
{:else}
  <a rel="external" href="{href}">{'< '}Previous</a>
{/if}
