import { Post } from "@/hashnode/generated/graphql";
import { SortTypes } from "@/types/sort-types";
import BlogPostListItem from "./blog-post-list-item";

type Props = {
  posts: Post[];
  query?: string;
  sort?: string;
  tags?: string;
};

function BlogPostList({ posts, query = "", sort = "", tags = "" }: Props) {
  const sortedPosts = posts.sort((a, b) => {
    if (sort === SortTypes.Date) {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    } else if (sort === SortTypes.DateAsc) {
      return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
    }

    return 0;
  });

  const tagsArray = tags?.split(",").filter((t) => t !== "");
  const filteredPosts = sortedPosts.filter((post) => {
    const isMatchingQuery = post.content.text?.toLowerCase().includes(query?.toLowerCase() ?? "");
    const isMatchingTags = tagsArray?.length === 0 || tagsArray?.some((tag) => post.tags?.map((t) => t.name.toLowerCase()).includes(tag));
    return isMatchingQuery && isMatchingTags;
  });

  return (
    <ul className="flex flex-col gap-6">
      {filteredPosts.length === 0 && (
        <li className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">No posts found matching your criteria.</p>
          <p className="text-sm text-muted-foreground">Try searching for something else.</p>
        </li>
      )}
      {filteredPosts.map((post) => (
        <BlogPostListItem key={post.id} post={post} />
      ))}
    </ul>
  );
}

export default BlogPostList;
