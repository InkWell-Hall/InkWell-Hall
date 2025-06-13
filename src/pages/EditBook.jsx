import React, { useEffect, useState } from "react";
import { apiClient } from "../api/client";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
import whitelogo from "../assets/images/whitelogo.jpg";
import { Link, useNavigate, useParams, useSearchParams } from "react-router";
import InkyBot from "../components/InkyBot";

const EditBook = () => {
  const [images, setImages] = React.useState([""]);
  const [update, setUpdate] = React.useState([""]);
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState([]);
  // const [publisher, setPublisher] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const atEditPage = location.pathname === `/edit-book/${id}`;

  const handleReset = (event) => {
    event.preventDefault();
    setTitle("");
    setIsbn("");
    setDescription("");
    setImageURL([]);
    setAuthor("");
  };
  // console.log(id);
  useEffect(() => {
    if (id) {
      apiClient
        .get(`/Books/${id}`)
        .then((response) => {
          console.log(response);
          setAuthor(response.data.author);
          setTitle(response.data.title);
          setIsbn(response.data.isbn);
          setDescription(response.data.description);
          setAuthor(response.data.author);
          setImageURL(response.data.imageURL);
        })
        .catch((error) => error);
    }
  }, []);

  const updateBook = (event) => {
    event.preventDefault();
    //collect form input
    let data = { title, description, imageURL, author, isbn };
    //post data to API
    apiClient
      .patch("/Books/" + `${id}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          toast.success("Book updated successfully");
          event.target.reset();
          navigate(`/books/${id}`);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error) {
          toast.error(error.message);
        }
      });
  };

  return (
    <div>
      <Navbar id={id} />
      <div
        className={
          atEditPage
            ? "min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center "
            : "min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center ml-50"
        }
      >
        <div className="form-container w-full max-w-2xl rounded-xl overflow-hidden">
          <div className="bg-black py-6 px-8 text-white flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Edit Book</h1>
              <p className="text-indigo-100">Edit the book details below</p>
            </div>
            <div className="book-icon">
              <Link to={"/dashboard"}>
                {" "}
                <img src={whitelogo} alt="" className="w-30" />
              </Link>
            </div>
          </div>

          <form
            id="bookForm"
            className="bg-white py-8 px-8"
            onSubmit={updateBook}
          >
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="isbn"
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
                  placeholder="e.g., 978-3-16-148410-0"
                />
                <p className="mt-1 text-xs text-gray-500">
                  International Standard Book Number
                </p>
              </div>

              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Book title"
                />
              </div>

              <div>
                <label
                  htmlFor="author"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Author name"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  value={description}
                  required
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Book description"
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="imagePath"
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

              <div className="flex items-center justify-between pt-4">
                <button
                  type="reset"
                  onClick={handleReset}
                  id="resetBtn"
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                >
                  Reset form
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 border border-transparent cursor-pointer rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Edit Book
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

export default EditBook;
