import { useContext } from "react";
import { Link } from "react-router-dom";
import { BasicContext } from "../context/basic";

const HomePage = () => {
  const { blogs } = useContext(BasicContext);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div 
            key={blog.id} 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              {blog.title}
            </h2>
            
            <p className="text-gray-600 mb-4">
              {blog.description.length > 150 
                ? `${blog.description.substring(0, 150)}...` 
                : blog.description}
            </p>
            
            <Link
              to={`/blog/${blog.id}`}
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              სრულად ნახვა →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
