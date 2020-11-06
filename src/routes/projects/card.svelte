<style lang="scss">
  section {
    padding: 1rem;
  }
  .project {
    @media (min-width: $desktop) {
      width: 32%;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0.3rem;
    border-radius: 0.25rem;
    position: relative;
    border: 0.1rem solid black;
    text-align: center;
  }
  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }
  h1 {
    font-size: $fs_mobileRegular;
  }
  p {
    font-size: $fs_mobileSmall;
  }
  a{
    width: 100%;
  }
  button {
    margin: 1rem 0;
    font-size: $fs_mobileSmall;
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: 0.1rem solid black;
    border-radius: 0.25rem;
    cursor: pointer;
    &:hover {
      border-color: $orange;
      color: $orange;

    }
  }
</style>

<script>
  export let project;
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'
  dayjs.extend(relativeTime)
</script>

<div id="{project.name}" class="project">
  <img src="{project.thumbnail}" alt="" />
  <section>
    <h1>{project.name}</h1>
    <p>{project.brief}</p>
  </section>
  <p>{dayjs(project.created).fromNow()}</p>
  <a rel="preload" href="/projects/{project.name}">
    <button>Learn More</button>
  </a>
</div>
