import { Post } from "@/hashnode/generated/graphql";
import Link from "next/link";
import { Badge } from "./ui/badge";

type Props = {
  post: Post;
};

export default function BlogPostListItem({ post }: Props) {
  return (
    <li>
      <div className="flex flex-col prose prose-neutral dark:prose-invert gap-2">
        <div>
          <Link className="no-underline hover:text-primary" href={`/blog/${post.slug}`}>
            <span className="text-lg">{post.title}</span>
          </Link>
          <div className="flex items-center text-sm">
            <span>{new Date(post.publishedAt).toLocaleDateString()} • {post.readTimeInMinutes} min read</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1">{post.tags?.map((tag) => <Badge key={tag.name}>{tag.name.toLocaleLowerCase()}</Badge>)}</div>
        <span className="leading-tight text-sm text-muted-foreground">{post.brief}</span>
      </div>
    </li>
  );
}
