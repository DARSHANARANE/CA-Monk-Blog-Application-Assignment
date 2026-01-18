import { useBlogs } from "@/hooks/useBlogs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BlogListSkeleton from "./BlogListSkeleton";
import clsx from "clsx";

interface BlogListProps {
  onSelect: (id: number) => void;
  selectedId: number | null;
}

const BlogList = ({ onSelect, selectedId }: BlogListProps) => {
  const { data, isLoading, isError } = useBlogs();

  if (isLoading) return <BlogListSkeleton />;

  if (isError) {
    return (
      <p className="text-destructive text-sm">
        Failed to load blogs. Please try again.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {data?.map((blog) => {
        const isActive = blog.id === selectedId;

        return (
          <Card
            key={blog.id}
            onClick={() => onSelect(blog.id)}
            className={clsx(
              "relative cursor-pointer transition-all",
              "hover:bg-muted/50 hover:shadow-sm",
              isActive &&
                "bg-muted shadow-sm before:absolute before:left-0 before:top-2 before:h-[90%] before:w-1 before:bg-primary before:rounded-full"
            )}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                                {blog.category.join(", ")}
                </p>
                <p className="text-xs text-muted-foreground">
                  {new Date(blog.date).toLocaleDateString()}
                </p>
              </div>
             
              <CardTitle>{blog.title}</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {blog.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default BlogList;
