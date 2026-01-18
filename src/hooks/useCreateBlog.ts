import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "@/services/blogs.service";
import type { Blog } from "@/types/blog";

export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation<Blog, Error, Omit<Blog, "id">>({
    mutationFn: (newBlog) => createBlog(newBlog),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};


