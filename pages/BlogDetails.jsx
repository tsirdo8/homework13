import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>ბლოგი ვერ მოიძებნა</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 mb-4 inline-block">
        ← უკან დაბრუნება
      </Link>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700">{blog.description}</p>
    </div>
  );
};

export default BlogDetails;
