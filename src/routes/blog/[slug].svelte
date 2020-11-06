<style lang="scss">
  article {
    position: relative;
  }
  h1 {
    font-size: $fs_artcileTitle;
    line-height: 1;
    font-weight: bold;
    padding: 1rem;
  }

  img {
    width: 100%;
    overflow: visible;
    margin: 1rem 0;
  }

  .article-body {
    padding: 0 1rem;
    :global(h2) {
      font-size: $fs_mobileMedium;
      font-weight: 600;
      margin-bottom: 2rem;
      &:before {
        content: '# ';
      }
    }
    :global(h3) {
      font-size: $fs_mobileRegular;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    :global(p) {
      font-size: $fs_articleParagraph;
      margin-bottom: 2rem;
      line-height: 1.2;
      font-weight: lighter;
    }
    :global(ul) {
      font-size: $fs_articleParagraph;
      font-weight: lighter;
      line-height: 1.3;
      list-style-type: disc;
      list-style-position: inside;
      padding: 2rem;
    }
    :global(li) {
      margin: 2rem 0;
    }
    :global(blockquote) {
      background: #f9f9f9;
      font-weight: bold;
      border-left: 0.5rem solid #ccc;
      font-style: italic;
      padding: 0.5rem 1rem;
      margin: 1.5rem 1rem;
    }
    :global(strong) {
      font-weight: 500;
    }
  }
  .profile {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    img {
      width: 5rem;
      border-radius: 50%;
    }
    div {
      display: flex;
      align-items: baseline;
      padding: 1rem;
    }
    h2 {
      font-size: $fs_mobileRegular;
    }
    p {
      &::before {
        content: ' • ';
      }
      font-size: $fs_mobileTiny;
      font-weight: 500;
      color: $orange;
      margin-left: 0.5rem;
    }
  }
  .article-footer {
    border-top: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: $fs_mobileSmall;
      margin: 0;
    }
  }
  .page-nav{
    display: flex;
    justify-content: space-between;
  }
</style>

<script context="module">
  import ButterCMS from '../../includes/ButterCMS'
  export async function preload(page, session) {
    const { slug } = page.params
    const { BUTTER } = session
    let butter = new ButterCMS(BUTTER)
    const article = await butter.getPost(slug)

    return { article }
  }
</script>

<script>
  import dayjs from 'dayjs'
  import { averageReadtime } from '../../includes/articleHelpers'
  import NavigateBtn from '../../components/NavigateBtn.svelte'


  export let article
  const { data, meta } = article

  const date = dayjs(data.published).format('MMMM D, YYYY')
  const readTime = averageReadtime(data.body)
</script>

<svelte:head>
  <script
    defer
    type="text/javascript"
    src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5fa09db30a87b736">
  </script>
  <title>🤔 {data.title}</title>
  <meta property="og:description" content="{data.summary}">
  <meta property="og:title" content="{data.title}">
  <meta property="og:image" content="{data.featured_image}">
  <meta property="og:type" content="article" />
  <meta property="og:url" content="{data.url}" />
</svelte:head>

<article>
  <h1>{data.title}</h1>
  <div class="profile">
    <img src="{data.author.profile_image}" alt="" />
    <div>
      <h2>{data.author.first_name} {data.author.last_name}</h2>
      <p>{readTime} min</p>
    </div>
  </div>
  <img src="{data.featured_image}" alt="{data.featured_image_alt}" />
  <div class="article-body">
    {@html data.body}
    <div class="article-footer">
      <div class="addthis_inline_share_toolbox"></div>
      <p>{date}</p>
    </div>
  </div>
</article>

<div class="page-nav">
  {#if meta.previous_post}
    <NavigateBtn href="/blog/{meta.previous_post.slug}" />
  {/if}

  {#if meta.next_post}
    <div></div>
    <NavigateBtn href="/blog/{meta.next_post.slug}" isNext="{true}" />
  {/if}
</div>
