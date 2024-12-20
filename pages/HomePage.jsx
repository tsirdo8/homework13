import { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const HomePage = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ბლოგები</h1>
      <Link
        to="/create"
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        ბლოგის დამატება
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p className="mt-2">{blog.description}</p>
            <Link
              to={`/blog/${blog.id}`}
              className="text-blue-500 mt-2 inline-block"
            >
              სრულად ნახვა
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
