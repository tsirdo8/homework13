import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { BasicContext } from "../context/basic";

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs } = useContext(BasicContext);
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-500">ბლოგი ვერ მოიძებნა</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Link to="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
          ← უკან დაბრუნება
        </Link>
        
        <h1 className="text-3xl font-bold mt-4 mb-6">{blog.title}</h1>
        
        <p className="text-gray-600 leading-relaxed">
          {blog.description}
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
