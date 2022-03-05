<style lang="scss">
  div {
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
  <title>👋 RodPaDev</title>
</svelte:head>

<div>
  <section id="title">
    <h1>Patrick Rodrigues</h1>
    <h2>Software Developer</h2>
  </section>

  <section class="intro">
    <p>
      It's nice to see you around here! I'm a 24 year old fullstack software
      developer.
    </p>
    <br/>
    <p>
      I want to learn and teach software development and with my knowledge disrupt the education system 
      which hasn't seen any innovation since they stopped using stone tablets for electronic ones.
    </p>
  </section>

  <section class="tech-skills">
    <h3>What are my most used tech skills?</h3>
    <p>AWS, React, PostgreSQL, DynamoDB, NodeJs, GraphQL, Go, Unity</p>
  </section>
</div>
