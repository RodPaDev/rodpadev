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
    :global(p) {
      font-size: $fs_articleParagraph;
      margin-bottom: 2rem;
      line-height: 1.2;
      font-weight: lighter;
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
</style>

<script context="module">
  import ButterCMS from '../../includes/ButterCMS'
  export async function preload(page, session) {
    const { slug } = page.params
    let butter = new ButterCMS(session.BUTTER)
    const res = await butter.getPost(slug)
    const article = await res.data

    return { article }
  }
</script>

<script>
  export let article
  const { data, meta } = article
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<article>
  <h1>{data.title}</h1>
  <img src="{data.featured_image}" alt="{data.featured_image_alt}" />
  <div class="article-body">
    {@html data.body}
  </div>
</article>
