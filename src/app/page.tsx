import BlogPostListItem from "@/components/blog-post-list-item";
import { Post } from "@/hashnode/generated/graphql";
import { cn, fadeIn } from "@/lib/utils";
import getBlogPosts from "@/server/get-blog-posts";

async function getLatestPost(): Promise<Post | undefined> {
  const latestPost = await getBlogPosts({ first: 1 });

  if (!latestPost || latestPost?.edges.length === 0) {
    return undefined;
  }

  return latestPost.edges[0].node as Post;
}

export default async function Page() {
  const latestPost = await getLatestPost();

  return (
    <main className="flex flex-col gap-4 pb-12 pt-4 text-left items-center sm:gap-8 sm:py-12">
      <section className={cn(fadeIn, "animation-delay-200 flex flex-col gap 2")}>
        <h1 className="text-4xl font-bold sm:text-7xl">rodpa.dev</h1>
        <h2 className="text-lg pt-3 font-light text-muted-foreground sm:text-xl">
          I&apos;m Patrick Rodrigues, a full-stack developer based in Portugal with a passion for building software, currently doing so at{" "}
          <a href="https://altar.io" className="text-primary underline">
            Altar.io
          </a>
          .
        </h2>
      </section>
      <section className={cn(fadeIn, "animation-delay-400 w-full")}>
        <hr className="border-1 border-muted-foreground pb-8" />
        <ol className="flex flex-col gap-6 px-2">{latestPost && <BlogPostListItem post={latestPost} />}</ol>
      </section>
    </main>
  );
}
