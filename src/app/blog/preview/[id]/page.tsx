import { Mdx } from "@/components/mdx";
import { cn, fadeIn } from "@/lib/utils";
import getBlogPostDraft from "@/server/get-blog-post-draft";
import { Inconsolata } from "next/font/google";
import Image from "next/image";
import { Metadata } from "next/types";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const post = await getBlogPostDraft(params);
  const title = post?.seo?.title || post?.title || "";
  const canonicalUrl = post?.canonicalUrl;
  const description = post?.seo?.description || post?.subtitle || post?.title || "";
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
  const draft = await getBlogPostDraft(params);

  if (!draft) {
    return null;
  }

  const title = draft.title || "";
  const markdown = draft.content?.markdown || "";

  const { readTimeInMinutes, subtitle } = draft;

  return (
    <>
      <section className={cn(fadeIn, "animation-delay-200 mb-8 flex flex-col gap-1")}>
        <h1 className="text-3xl font-bold">{title}</h1>
        {subtitle && <h2 className="text-xl font-light">{subtitle}</h2>}
        <h4 className="text-xs font-light">
          {new Date().toLocaleDateString()} • {readTimeInMinutes} min read
        </h4>
      </section>
      <article className={cn(inconsolata.className, fadeIn, "animation-delay-400 leading-7")}>
        {draft.coverImage?.url && (
          <Image
            src={draft.coverImage?.url}
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
    </>
  );
}
