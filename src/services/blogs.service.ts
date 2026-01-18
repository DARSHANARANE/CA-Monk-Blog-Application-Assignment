import type { Blog } from "@/types/blog";

const BASE_URL = "http://localhost:3001";

export const createBlog = async (blog: Omit<Blog, "id">): Promise<Blog> => {
  const res = await fetch(`${BASE_URL}/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  });

  if (!res.ok) {
    throw new Error("Failed to create blog");
  }

  return res.json();
};

export const getBlogById = async (id: string): Promise<Blog> => {
  const res = await fetch(`${BASE_URL}/blogs/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }

  return res.json();
};

// ...existing code...

export const getBlogs = async (): Promise<Blog[]> => {
  const response = await fetch(`${BASE_URL}/blogs`);
  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }
  return response.json();
};