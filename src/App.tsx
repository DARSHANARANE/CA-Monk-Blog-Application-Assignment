import { useState, useEffect } from "react";
import BlogList from "@/components/BlogList";
import BlogDetail from "@/components/BlogDetail";
import CreateBlogForm from "@/components/CreateBlogForm";
import { useBlogs } from "@/hooks/useBlogs";

function App() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
  const { data: blogs } = useBlogs();

  const isDesktop = window.innerWidth >= 768;

  // ✅ Auto-select ONLY on desktop, ONLY once blogs are loaded
  useEffect(() => {
    if (isDesktop && blogs && blogs.length > 0 && selectedBlogId === null) {
      setSelectedBlogId(blogs[0].id);
    }
  }, [blogs, isDesktop, selectedBlogId]);

  return (
    <div className="p-4 md:p-6">
      {/* ================= Desktop Layout ================= */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        <div className="col-span-1 space-y-4">
          <CreateBlogForm />
          <BlogList
            onSelect={setSelectedBlogId}
            selectedId={selectedBlogId}
          />
        </div>

        <div className="col-span-2 border rounded-lg p-6">
          <BlogDetail blogId={selectedBlogId} />
        </div>
      </div>

      {/* ================= Mobile Layout ================= */}
      <div className="md:hidden">
        {selectedBlogId === null ? (
          <>
            <CreateBlogForm />
            <BlogList
              onSelect={setSelectedBlogId}
              selectedId={null}
            />
          </>
        ) : (
          <BlogDetail
            blogId={selectedBlogId}
            isMobile
            onBack={() => setSelectedBlogId(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
