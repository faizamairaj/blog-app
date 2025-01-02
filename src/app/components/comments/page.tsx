
"use client";
import { useState } from "react";

interface Comment {
  id: number;
  author: string;
  text: string;
}

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [author, setAuthor] = useState("");

  const handleAddComment = () => {
    if (newComment && author) {
      setComments((prevComments) => [
        ...prevComments,
        { id: prevComments.length + 1, author, text: newComment },
      ]);
      // Reset inputs
      setNewComment("");
      setAuthor("");
    }
  };

  return (
    <>
      <div className="p-6 py-14 px-7 border rounded-lg shadow-lg bg-blue-50 mt-6 max-w-2xl mx-auto">
        <h2 className="md:text-3xl text-2xl font-bold font-serif text-center text-blue-800 mb-6 capitalize">
          Feel free to leave your comments below!
        </h2>

        {/* Input Section */}
        <div className="flex flex-col gap-3 mb-4 pt-4">
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Your Name"
            className="border border-blue-300 rounded-md p-3 px-6 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 bg-white"
          />
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Comment here"
            className="border border-blue-300 rounded-md p-3 px-6 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 bg-white"
          />
          <button
            onClick={handleAddComment}
            className="bg-blue-800 text-white px-6 py-3 pt-2 rounded-lg hover:bg-blue-500 transition-colors duration-300 shadow-md"
          >
            Add Comment
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-6">
        <ul className="space-y-4">
          {comments.map(({ id, author, text }) => (
            <li
              key={id}
              className="bg-white border border-blue-500 rounded-lg shadow-md shadow-blue-400 p-6  overflow-hidden"
            >
              <p className="text-xl font-semibold text-gray-600 break-words">
                {author}
              </p>
              <p className="text-gray-800 leading-7 mt-2 break-words">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Comments;