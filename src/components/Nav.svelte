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
    @media (max-width: $iphone5) {
      padding: 0.5rem;
    }
    padding: 1rem;
  }
  a {
    @media (max-width: $iphone5) {
      font-size: 1.9rem;
    }
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
        target="_blank" rel="noopener noreferrer"
        class="{segment === 'blog' ? 'selected' : ''}"
        href="https://blog.rodpa.dev/">
        blog
      </a>
    </li>
  </ul>
</nav>
