<style lang="scss">
  div{
    padding: 1rem;
  }
  .whisper {
    font-size: $fs_mobileTiny;
    color: $grey;
  }
  h3 {
    margin: 2rem 0;
    text-transform: uppercase;
    &::before {
      content: '# ';
      font-weight: bold;
    }
  }
  h1 {
    text-transform: uppercase;
  }

  #title {
    margin-bottom: 2rem;
  }
</style>

<script context="module" lang="ts">
</script>

<script lang="ts">
</script>

<svelte:head>
  <title>TS SCSS Boilerplate</title>
</svelte:head>

<div>
  <section id="title">
    <h1>Patrick Rodrigues</h1>
    <h2>Software Developer</h2>
  </section>

  <section class="intro">
    <p>
      It's nice to see you around here! I'm a 23 year old fullstack software
      developer.
      <br />
      Altough I attended Lambda School, I consider myself self-taught. My
      mission in life is to change the school system, not to merely change it
      but to revolutionize how we teach people.
    </p>
  </section>

  <section class="tech-stack">
    <h3>What's my tech stack?</h3>
    <p>
      I don't like tech stacks. I believe that as a software developer, we
      should strive on learning and not keep resuing the same tools! Take this
      website as an example, the first version was written in React, was a
      single page application and I used DEV.to for my blog, now it is written
      with Svelte, it is server side rendering and it uses ButterCMS for my blog
      posts
    </p>
  </section>

  <section class="tech-skills">
    <h3>What are my most used tech skills?</h3>
    <p>HTML, CSS, ReactJS, Redux, PostgreSQL, NodeJs, ExpressJs, Python, C#</p>
    <p class="whisper">2 impostors remaining.</p>
  </section>
</div>
