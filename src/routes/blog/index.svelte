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
</style>

<script context="module">
  export async function preload(page, session) {
    const { BUTTER } = session

    return { token: BUTTER }
  }
</script>

<script lang="ts">
  import Loading from '../../components/Loading.svelte'

  import { onMount } from 'svelte'
  import ButterCMS from '../../includes/ButterCMS'
  export let token
  let butter = new ButterCMS(token)
  let posts = []
  onMount(async () => {
    const res = await butter.getPostAll(1)
    posts = await res.data.data
  })
</script>

{#each posts as post}
  <a href="/blog/{post.slug}">
    <article>
      <h1>{post.title}</h1>
      {#if post.featured_image}
      <img src="{post.featured_image}" alt="{post.featured_image_alt}" />
      {/if}
      <p>{post.meta_description}...<span>Read More</span></p>
    </article>
  </a>
{:else}
  <div class="loading">
    <Loading color="{'#f79515'}" size="{65}" />
  </div>
{/each}
