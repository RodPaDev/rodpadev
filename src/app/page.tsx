import BlogPostListItem from "@/components/blog-post-list-item";
import { Post } from "@/hashnode/generated/graphql";
import { cn, fadeIn } from "@/lib/utils";
import { Suspense } from "react";

async function LatestPost() {
  'use client';
  const getBlogPosts = (await import("@/server/get-blog-posts")).default;
  
  const latestPost = await getBlogPosts({ first: 1 });
  const post = latestPost?.edges[0]?.node as Post | undefined;
  
  return (
    <ol className="flex flex-col gap-6 px-2">
      {post && <BlogPostListItem post={post} />}
    </ol>
  );
}

export default function Page() {
  return (
    <main className="flex flex-col gap-4 pb-12 pt-4 text-left items-center sm:gap-8 sm:py-12">
      <section className={cn(fadeIn, "animation-delay-200 flex flex-col gap 2")}>
        <h1 className="text-4xl text-muted-primary font-bold sm:text-3xl">rodpa.dev</h1>
        <h2 className="text-md pt-3 font-light text-muted-foreground sm:text-md">
          I&apos;m Patrick Rodrigues, a full-stack developer based in Portugal with a passion for building software, currently groking at{" "}
          <a href="https://altar.io" className="underline hover:text-foreground">
            Altar.io
          </a>
          .
        </h2>
      </section>
      <section className={cn(fadeIn, "animation-delay-400 w-full")}>
        <hr className="border-1 border-muted-foreground pb-8" />
        <Suspense fallback={<div className="animate-pulse h-24 bg-muted rounded-md"></div>}>
          <LatestPost />
        </Suspense>
      </section>
    </main>
  );
}