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
    :global(h3){
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
  <script
    defer
    type="text/javascript"
    src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5fa09db30a87b736">
  </script>
  <title>🤔 {data.title}</title>
</svelte:head>

<article>
  <h1>{data.title}</h1>
  <img src="{data.featured_image}" alt="{data.featured_image_alt}" />
  <div class="article-body">
    {@html data.body}
    <div class="addthis_inline_share_toolbox"></div>
  </div>
</article>
