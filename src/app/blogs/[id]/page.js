import Link from "next/link";

const BlogDetailsPage = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`http://localhost:5000/posts/${id}`);
  const blog = await res.json();
//   console.log(blog);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center py-6">Blog Details</h1>
      <div className="bg-slate-700 rounded p-5 text-white" key={blog.id}>
        <h3 className="text-2xl font-semibold">{blog.title}</h3>
        <p>{blog.description}</p>
        <p className="text-blue-600 font-medium pb-6">
          Likes: {blog.likes_count}
        </p>
        <Link className="px-5 py-2 bg-blue-700 text-white" href={`/blogs`}>
          Back
        </Link>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
