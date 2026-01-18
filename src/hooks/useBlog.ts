import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/services/blogs.service";
import type { Blog } from "@/types/blog";

export const useBlog = (id: number | null) => {
  return useQuery<Blog>({
    queryKey: ["blog", id],
    queryFn: () => {
      if (id === null) throw new Error("Invalid blog ID");
      return getBlogById(id.toString());
    },
    enabled: !!id, // only fetch if id is not null
  });
};
