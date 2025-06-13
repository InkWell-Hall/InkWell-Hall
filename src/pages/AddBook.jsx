import React, { useEffect, useState } from "react";
import { apiClient } from "../api/client";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import logowhite from "../assets/images/whitelogo.jpg";
import Sidebar from "../components/Sidebar";
import InkyBot from "../components/InkyBot";

const AddBook = () => {
  const [images, setImages] = React.useState([""]);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState([""]);
  const [author, setAuthor] = useState([]);
  const [category, setCategory] = useState("");

  const postBook = (event) => {
    event.preventDefault();
    setLoading(true); // Start loading
    //collect form input

    // let data = new FormData(event.target);
    let data = {
      imageURL: [imageURL.trim()],
      title,
      author,
      description,

      isbn,
      category,
    };
    //post data to API
    apiClient
      .post("/Books", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          toast.success("Book added successfully");
          setTitle("");
          setIsbn("");
          setDescription("");
          setImageURL("");
          setAuthor("");
          setCategory("");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error) {
          toast.error(error.message);
        }
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  };

  const handleReset = (event) => {
    event.preventDefault();
    setTitle("");
    setIsbn("");
    setDescription("");
    setImageURL([]);
    setAuthor("");
  };

  return (
    <div>
      {" "}
      <Navbar />
      <Sidebar />
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center lg:ml-50 ">
        <div className="form-container w-full max-w-2xl rounded-xl overflow-hidden">
          <div className="bg-black py-6 px-8 text-white flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Add New Book</h1>
              <p className="text-indigo-100">Enter the book details below</p>
            </div>
            <div className="book-icon">
              <img src={logowhite} alt="" className="w-30" />
            </div>
          </div>

          <form
            id="bookForm"
            className="bg-white py-8 px-8"
            onSubmit={postBook}
          >
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label
                  for="isbn"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  ISBN
                </label>
                <input
                  type="text"
                  id="isbn"
                  name="isbn"
                  value={isbn}
                  onChange={(e) => setIsbn(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g., 9783161484100"
                />
                <p className="mt-1 text-xs text-gray-500">
                  International Standard Book Number
                </p>
              </div>

              <div>
                <label
                  for="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                  name="title"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Book title"
                />
              </div>

              <div>
                <label
                  for="author"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  name="author"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Author name"
                />
              </div>

              <div>
                <label
                  for="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Book description"
                ></textarea>
              </div>

              <div>
                <label
                  for="imagePath"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Image Path
                </label>
                <input
                  type="text"
                  id="imagePath"
                  value={imageURL}
                  onChange={(e) => setImageURL(e.target.value)}
                  name="imageURL"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Path to book cover image"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Enter a URL or file path to the book cover
                </p>
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Book Category{" "}
                </label>
                <input
                  type="text"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  name="imageURL"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="eg., Romance"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Enter a URL or file path to the book cover
                </p>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="reset"
                  onClick={handleReset}
                  id="resetBtn"
                  class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                >
                  Reset Form
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 border border-transparent cursor-pointer rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {loading ? "Adding..." : "Add Book"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <InkyBot />
    </div>
  );
};

export default AddBook;
