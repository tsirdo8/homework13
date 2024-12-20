import { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "პირველი ბლოგი",
      description: "პირველი ბლოგის აღწერა..."
    },
    {
      id: 2,
      title: "მეორე ბლოგი",
      description: "მეორე ბლოგის აღწერა..."
    }
  ]);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, { ...newBlog, id: blogs.length + 1 }]);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
}; 