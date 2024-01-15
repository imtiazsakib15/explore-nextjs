import Link from "next/link";
import styles from "./blogs.module.css";

export const metadata = {
  title: "Blogs",
  description: "This is blog page",
};

const BlogPage = async () => {
  // Incremental Static Regeneration(ISR)
  // const res = await fetch("http://localhost:5000/posts", {
  //   next: {
  //     revalidate: 5,
  //   },
  // });

  // Server Side Rendering(SSR)
  const res = await fetch("http://localhost:5000/posts", {
    cache: "no-cache",
  });
  const blogs = await res.json();
  // console.log(blogs);

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className={styles.header_text}>Blogs</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {blogs?.map((blog) => (
          <div className="bg-slate-700 rounded p-5 text-white" key={blog.id}>
            <h3 className="text-2xl font-semibold">{blog.title}</h3>
            <p>{blog.description}</p>
            <p className="text-blue-600 font-medium pb-6">
              Likes: {blog.likes_count}
            </p>
            <Link
              className="px-5 py-2 bg-green-700 text-white"
              href={`/blogs/${blog.id}`}
            >
              See Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
