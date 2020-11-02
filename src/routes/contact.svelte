<style lang="scss">
  div {
    padding: 1rem;
  }
  h1 {
    font-weight: bold;
    text-transform: uppercase;
    line-height: 2;
  }
  .gif{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
  }
</style>

<svelte:head>
  <title>🚀 Contact</title>
</svelte:head>

<div>
    <div class="links">
        <h1># Let's talk dev!</h1>
    <p>
      My prefered way to talk is
      <a href="mailto:contact@rodriguespatrick.com">Email</a>
      or
      <a href="https://twitter.com/RodPaDev/">Twitter</a>.
    </p>
    <br />
    <p>
      You can also follow me on
      <a href="https://github.com/rodpadev">GitHub</a>
      too see production breaking commits, and connect with me on
      <a href="https://www.linkedin.com/in/RodPaDev/">LinkedIn</a>
    </p>
  </div>

  <div class="gif">
    <p>and in the meantime...</p>
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <img src="/carlton-dance.gif" alt="" />
    </a>
  </div>
</div>
