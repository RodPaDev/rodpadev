<style lang="scss">
  nav {
    max-width: 700px;
    padding: 1em;
    margin: 0 auto;
  }
  ul {
    display: flex;
    justify-content: space-around;
    @media (min-width: $desktop) {
    justify-content: flex-end
      
    }
  }
  li {
    padding: 1rem;
  }
  a {
    font-size: 2rem;
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
    <li>
      <a
        class="{segment === 'contact' ? 'selected' : ''}"
        href="contact">contact</a>
    </li>
    <li>
      <a
        class="{segment === 'projects' ? 'selected' : ''}"
        href="projects">projects</a>
    </li>
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
