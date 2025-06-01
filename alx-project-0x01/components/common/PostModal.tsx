import { PostData, PostModalProps } from "@/interfaces";
import React, { useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [post, setPost] = useState<PostData>({
    userId: 1,
    title: '',
    body: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(post);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Add New Post</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={post.title}
          onChange={handleChange}
          className="w-full p-2 border mb-2"
        />
        <textarea
          name="body"
          placeholder="Body"
          value={post.body}
          onChange={handleChange}
          className="w-full p-2 border mb-2"
        />
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
