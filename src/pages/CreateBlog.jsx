import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BasicContext } from "../context/basic";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addBlog } = useContext(BasicContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim() || !description.trim()) {
      alert("გთხოვთ შეავსოთ ყველა ველი");
      return;
    }

    addBlog({ title, description });
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">ახალი ბლოგის დამატება</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">სათაური</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="შეიყვანეთ სათაური"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">აღწერა</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="6"
              placeholder="დაწერეთ ბლოგის შინაარსი"
              required
            />
          </div>
          
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            დამატება
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
