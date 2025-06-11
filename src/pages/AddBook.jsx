import React, { useEffect } from "react";
import { apiClient } from "../api/client";
import { toast } from "react-toastify";

const AddBook = () => {
  const postBook = (event) => {
    event.preventDefault();
    //collect form input
    const data = new FormData(event.target);
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
    // <div className=" h-[100vh] w-[80%] bg-black mx-auto flex flex-col justify-center items-center">
    //   <h1 className="font-lead-font text-4xl mb-3">ADD NEW BOOK</h1>
    //   <div>
    //     <form onSubmit={postBook}>
    //       <div className="flex flex-col">
    //         <label>Book Title:</label>
    //         <input type="text" name="title" className="border border-black" />
    //       </div>
    //       <div className="flex flex-col">
    //         <label>Book Subtitle:</label>
    //         <input
    //           type="text"
    //           name="subtitle"
    //           className="border border-black"
    //         />
    //       </div>
    //       <div className="flex flex-col">
    //         <label>Book Author:</label>
    //         <input type="text" name="author" className="border border-black" />
    //       </div>
    //       <div className="flex flex-col">
    //         <label>Book Publisher:</label>
    //         <input
    //           type="text"
    //           name="publisher"
    //           className="border border-black"
    //         />
    //       </div>
    //       <div className="flex flex-col">
    //         <label>Date Published:</label>
    //         <input
    //           type="text"
    //           name="published"
    //           className="border border-black"
    //         />
    //       </div>
    //       <div className="flex flex-col">
    //         <label>Number of Pages:</label>
    //         <input type="text" name="pages" className="border border-black" />
    //       </div>
    //       <div className="flex flex-col">
    //         <label>ISBN:</label>
    //         <input type="text" name="isbn" className="border border-black" />
    //       </div>
    //       <div className="flex flex-col">
    //         <label>Book Description:</label>
    //         <textarea
    //           name="description"
    //           id=""
    //           className="border border-black"
    //         ></textarea>
    //       </div>
    //       <div className="flex flex-col">
    //         <label clas>Book Website:</label>
    //         <input type="text" name="website" />
    //       </div>
    //       <div className="flex flex-col  gap-2 justify-center items-start mb-1.5">
    //         <label className="font-body-font text-2xl">Book Image:</label>
    //         <input
    //           type="text"
    //           name="imagePath"
    //           placeholder="Set Image"
    //           className="border border-gray-900 px-3 py-2 rounded "
    //         />
    //       </div>

    //       <button
    //         type="submit"
    //         className="text-white bg-black p-3 cursor-pointer"
    //       >
    //         Add Book
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div class="form-container w-full max-w-2xl rounded-xl overflow-hidden">
        <div class="bg-indigo-600 py-6 px-8 text-white flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold">Add New Book</h1>
            <p class="text-indigo-100">Enter the book details below</p>
          </div>
          <div class="book-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
        </div>

        <form id="bookForm" class="bg-white py-8 px-8">
          <div class="grid grid-cols-1 gap-6">
            <div>
              <label
                for="isbn"
                class="block text-sm font-medium text-gray-700 mb-1"
              >
                ISBN
              </label>
              <input
                type="text"
                id="isbn"
                name="isbn"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="e.g., 978-3-16-148410-0"
              />
              <p class="mt-1 text-xs text-gray-500">
                International Standard Book Number
              </p>
            </div>

            <div>
              <label
                for="title"
                class="block text-sm font-medium text-gray-700 mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Book title"
              />
            </div>

            <div>
              <label
                for="author"
                class="block text-sm font-medium text-gray-700 mb-1"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Author name"
              />
            </div>

            <div>
              <label
                for="description"
                class="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Book description"
              ></textarea>
            </div>

            <div>
              <label
                for="imagePath"
                class="block text-sm font-medium text-gray-700 mb-1"
              >
                Image Path
              </label>
              <input
                type="text"
                id="imagePath"
                name="imagePath"
                class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Path to book cover image"
              />
              <p class="mt-1 text-xs text-gray-500">
                Enter a URL or file path to the book cover
              </p>
            </div>

            <div class="flex items-center justify-between pt-4">
              <button
                type="button"
                id="resetBtn"
                class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Reset Form
              </button>
              <button
                type="submit"
                class="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Book
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
