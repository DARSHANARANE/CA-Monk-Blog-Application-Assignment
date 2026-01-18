import { ArrowLeft } from "lucide-react";
import { useBlog } from "@/hooks/useBlog";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogDetailProps {
  blogId: number | null;
  isMobile?: boolean;
  onBack?: () => void;
}

const BlogDetail = ({ blogId, isMobile = false, onBack }: BlogDetailProps) => {
  const { data: blog, isLoading, isError } = useBlog(blogId);

  if (!blogId) {
    return (
      <p className="text-muted-foreground text-sm">
        Select a blog to view details
      </p>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-64 w-full rounded-xl" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    );
  }

  if (isError || !blog) {
    return (
      <p className="text-destructive text-sm">
        Failed to load blog details.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {/* ✅ Mobile Header */}
      {isMobile && (
        <div className="flex items-center gap-2 mb-2">
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-sm font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
        </div>
      )}

      <img
        src={blog.coverImage}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-xl"
      />

      <h2 className="text-2xl font-bold tracking-tight text-accent-foreground">
        {blog.title}
      </h2>

      <p className="text-sm text-muted-foreground">
        {blog.category.join(", ")} ·{" "}
        {new Date(blog.date).toLocaleDateString()}
      </p>
      <p className=" text-md text-foreground line-clamp-2">

        {blog.description}
      </p>
      <p className="leading-relaxed text-foreground text-sm ">
        {blog.content}
      </p>
      <p>
        {/* Extra spacing at the bottom for better readability on mobile */}
        &nbsp;
      </p>
    </div>
  );
};

export default BlogDetail;
