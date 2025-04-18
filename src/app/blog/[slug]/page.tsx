import Analytics from "@/components/analytics";
import { Mdx } from "@/components/mdx";
import createPostJsonLd from "@/lib/create-post-json-ld";
import { cn, fadeIn } from "@/lib/utils";
import getBlogPost from "@/server/get-blog-post";
import getPublication from "@/server/get-publication";
import { Inconsolata } from "next/font/google";
import Image from "next/image";
import { Metadata } from "next/types";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const post = await getBlogPost(params);

  const title = post?.seo?.title || post?.title;
  const canonicalUrl = post?.canonicalUrl;
  const description = post?.seo?.description || post?.subtitle || post?.title;
  const images = post?.coverImage?.url;

  const metadata: Metadata = {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "rodpa.dev",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
      creator: "@rodpadev",
    },
  };

  return metadata;
}

export default async function Page({ params }: Props) {
  const post = await getBlogPost(params);
  const publication = await getPublication();

  if (!post) {
    return null;
  }

  const jsonLd = createPostJsonLd(publication, post);

  const {
    publishedAt,
    readTimeInMinutes,
    title,
    subtitle,
    id,
    content: { markdown },
  } = post;

  return (
    <>
      <section className={cn(fadeIn, "animation-delay-200 mb-8 flex flex-col gap-1")}>
        <h1 className="text-3xl font-bold">{title}</h1>
        {subtitle && <h2 className="text-xl font-light">{subtitle}</h2>}
        <h4 className="text-xs font-light">
          {new Date(publishedAt).toLocaleDateString()} • {readTimeInMinutes} min read
        </h4>
      </section>
      <article className={cn(inconsolata.className, fadeIn, "animation-delay-400")}>
        {post.coverImage?.url && (
          <Image
            src={post.coverImage?.url}
            alt={title}
            className="mb-4"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={668}
            height={445}
          />
        )}
        <Mdx code={markdown} />
      </article>
      <Analytics postId={id} publicationId={publication?.id!} />
      <script id="jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
