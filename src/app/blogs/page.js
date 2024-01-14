export const metadata = {
  title: "Blogs",
  description: "This is blog page",
};

const BlogPage = async () => {
  // ISR : normally used in E-commerce websites
  const res = await fetch("http://localhost:5000/posts", {
    next: {
      revalidate: 5,
    },
  });
  const blogs = await res.json();
  // console.log(blogs);

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center py-6">Blogs</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {blogs?.map((blog) => (
          <div className="bg-slate-700 rounded p-5 text-white" key={blog.id}>
            <h3 className="text-2xl font-semibold">{blog.title}</h3>
            <p>{blog.description}</p>
            <p className="text-blue-600 font-medium">
              Likes: {blog.likes_count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
