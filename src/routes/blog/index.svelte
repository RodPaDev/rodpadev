<style lang="scss">
  a{
    text-decoration: none;
    color: unset;
  }
  article {
    border: 0.1rem solid black;
    padding: 1rem;
    margin: 1rem;
    border-radius: 0.25rem;
  }
  h1 {
    font-weight: bold;
  }
  img {
    width: 100%;
    height: 15rem;
    border-radius: 0.25rem;
    margin: 1rem 0;
    object-fit: cover;
  }
  p {
    font-size: $fs_mobileSmall;
    span{
      color: $orange;
    }
  }
  .loading {
    display: flex;
    justify-content: center;
    padding: 10rem 0;
  }
  .date{
    font-size: $fs_mobileTiny;
    text-align: right;
    margin: 0;
  }
</style>

<script context="module">
  import ButterCMS from '../../includes/ButterCMS'
  export async function preload(page, session) {
    const { BUTTER } = session
    let butter = new ButterCMS(BUTTER)
    const posts = await butter.getPostAll(1)

    return {posts}
  }
</script>

<script>
  import dayjs from 'dayjs'
  
  import Loading from '../../components/Loading.svelte'
  
  export let posts

</script>

<svelte:head>
  <title>📰 Blog</title>
</svelte:head>

{#each posts as post}
  <a href="/blog/{post.slug}">
    <article>
      <h1>{post.title}</h1>
      {#if post.featured_image}
      <img src="{post.featured_image}" alt="{post.featured_image_alt}" />
      {/if}
      <p>{post.meta_description}...<span>Read More</span></p>
      <p class="date">{dayjs(post.published).format('MMMM D, YYYY')}</p>
    </article>
  </a>
{/each}
