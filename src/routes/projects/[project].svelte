<style lang="scss">
  .thumbnail {
    position: relative;
    a {
      font-size: $fs_mobileSmall;
      font-weight: 500;
      text-decoration: none;
      color: black;
      position: absolute;
      background: white;
      padding: 0.5rem;
      border-radius: 0 0 0.5rem 0;
      border-right: 0.3rem solid black;
      border-bottom: 0.3rem solid black;
      &:hover {
        color: $orange;
        border-color: $orange;
      }
    }
    img {
      width: 100%;
    }
  }
  h1 {
    font-size: $fs_mobileRegular;
  }

  .content {
    padding: 1rem;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1rem;
      section {
        display: flex;
        flex-direction: column;
        @media (min-width: $desktop) {
          flex-direction: row;
          width: 30%;
          justify-content: space-between;
        }
      }
    }
    .svg {
      display: flex;
      align-items: center;
      img {
        width: 1.6rem;
        padding: 0.25rem;
      }
      span {
        font-size: $fs_mobileSmall;
        margin-left: 0.5rem;
        width: 100%;
      }
    }
  }
  .description {
    margin: 1rem;
    line-height: 1.5;
  }
  .technologies {
    margin: 1rem;
    font-weight: 600;
  }
  .links {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
    a {
      font-size: $fs_mobileSmall;
      &:hover {
        color: black;
      }
    }
  }
</style>

<script context="module">
  import ButterCMS from '../../includes/ButterCMS';
  export async function preload(page, session) {
    const { BUTTER } = session;
    const { projectName } = page.params;
    const options = { 'fields.name': projectName };
    let butter = new ButterCMS(BUTTER);
    let res = await butter.getCollection(['projects'], options);
    let project = await res.data.projects[0];

    return { project };
  }
</script>

<script>
  export let project;
  import dayjs from 'dayjs';
  import duration from 'dayjs/plugin/duration';
  import relativeTime from 'dayjs/plugin/relativeTime';
  dayjs.extend(relativeTime);
  dayjs.extend(duration);
</script>

<div class="project">
  <div class="thumbnail">
    <a href="/projects/">{'<< back'}</a>
    <img src="{project.thumbnail}" alt="" />
  </div>

  <div class="content">
    <h1>{project.name} - {project.role}</h1>
    <div class="top">
      <section>
        <div class="svg">
          <img src="/clock.svg" alt="" />
          <span>{dayjs.duration(project.duration, 'hours').humanize()}</span>
        </div>

        <div class="svg">
          <img src="/group.svg" alt="" />
          <span>{project.team_size}</span>
        </div>
      </section>
      <p>{dayjs(project.created).format('MMMM D, YYYY')}</p>
    </div>
    <p class="description">{project.description}</p>
    <div class="technologies">
      <p>Built with:</p>
      <p>{project.technologies}</p>
    </div>
  </div>

  <div class="links">
    <a href="{project.repo_url}">See the code</a>
    <a href="{project.deploy_url}">Latest Deployment</a>
  </div>
</div>
