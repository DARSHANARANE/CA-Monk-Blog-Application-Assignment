import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/services/blogs.service";
import type { Blog } from "@/types/blog";

export const useBlogs = () => {
  return useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });
};
