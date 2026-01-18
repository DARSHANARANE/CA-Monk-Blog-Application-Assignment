import { useState } from "react";
import { useCreateBlog } from "@/hooks/useCreateBlog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const CreateBlogForm = () => {
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [content, setContent] = useState("");

  const { mutate, isPending } = useCreateBlog();
  const { toast } = useToast();

  const isMobile = window.innerWidth < 768;

  const resetForm = () => {
    setTitle("");
    setCategory("");
    setDescription("");
    setCoverImage("");
    setContent("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(
      {
        title,
        category: category.split(",").map((c) => c.trim().toUpperCase()),
        description,
        coverImage,
        content,
        date: new Date().toISOString(),
      },
      {
        onSuccess: () => {
          toast({
            title: "Blog created 🎉",
            description: "Your blog was published successfully.",
          });

          resetForm();
          setOpen(false);
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to create blog.",
          });
        },
      }
    );
  };

  const FormContent = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <Input
        placeholder="Categories (comma separated)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <Input
        placeholder="Cover Image URL"
        value={coverImage}
        onChange={(e) => setCoverImage(e.target.value)}
      />

      <Textarea
        placeholder="Short description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <Textarea
        placeholder="Full content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? "Creating..." : "Create Blog"}
      </Button>
    </form>
  );

  /* ================= Mobile → Bottom Drawer ================= */
  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="w-full mb-2">+ Create New Blog</Button>
        </SheetTrigger>

        <SheetContent side="bottom" className="rounded-t-2xl ">
          <SheetHeader>
            <SheetTitle>Create New Blog</SheetTitle>
          </SheetHeader>

          <div className="p-6 pt-0">{FormContent}</div>
        </SheetContent>
      </Sheet>
    );
  }

  /* ================= Desktop → Dialog ================= */
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">+ Create New Blog</Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Create New Blog</DialogTitle>
        </DialogHeader>

        {FormContent}
      </DialogContent>
    </Dialog>
  );
};

export default CreateBlogForm;
