<style lang="scss">
  nav {
    max-width: 700px;
    padding: 1em;
  }
  ul {
    display: flex;
    justify-content: flex-end;
  }
  li {
    padding: 1rem;
  }
  a {
    font-size: 2.6rem;
    color: black;
    text-decoration: none;
    &:hover {
      color: $orange;
    }
  }
  .selected:visited {
    color: $orange;
  }
</style>

<script lang="ts">
  export let segment
</script>

<nav>
  <ul>
    <li>
      <a class="{segment === undefined ? 'selected' : ''}" href=".">home</a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
             the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        class="{segment === 'blog' ? 'selected' : ''}"
        href="blog">
        blog
      </a>
    </li>
  </ul>
</nav>
