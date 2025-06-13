import { Link, useNavigate, useParams } from "react-router";
import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/images/assets";
import RelatedBooks from "../components/RelatedBooks";
import { apiClient } from "../api/client";
import { ArrowBigLeft, Delete, DeleteIcon, Edit, Trash2 } from "lucide-react";
import Modal from "../modals/DeleteBookModal";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import InkyBot from "../components/InkyBot";
import stars from "../assets/images/star-icon.jpeg";
import loadingicon from "../assets/images/loadingicon.gif";

const Books = () => {
  const { bookId } = useParams();
  // const { deleteBook } = useContext(ShopContext);
  const navigate = useNavigate();
  const [bookData, setBookData] = useState(null);
  const [image, setImage] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const fetchBooksData = () => {
    apiClient
      .get("/Books")
      .then((response) => {
        const allBooks = response.data;
        const book = allBooks.find((item) => item.id === bookId);
        console.log("Found book:", book);

        if (book) {
          setBookData(book);
          setImage(book.imageURL[0]);
        } else {
          console.log("No book found with ID:", bookId);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteBook = () => {
    apiClient
      .delete("/Books/" + `${bookId}`)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          toast.success("Book Has been Deleted Successfully");
          navigate("/collections");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  useEffect(() => {
    fetchBooksData();
  }, [bookId]);

  // Separate useEffect to log when bookData actually changes
  useEffect(() => {
    // setBookData(books);
    if (bookData) {
      console.log("bookData updated:", bookData);
    }
  }, [bookData]);

  return bookData ? (
    <>
      <Navbar id={bookId} />
      <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 px-10">
        {/* BookData */}
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/* bookImage */}
          <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {bookData.imageURL?.map((item, index) => {
                return (
                  <img
                    src={item}
                    alt=""
                    onClick={() => setImage(item)}
                    key={index}
                    className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  />
                );
              })}
            </div>
            <div className="w-full sm:w-[80%]">
              <img src={image} alt="" className="w-full h-auto" />
            </div>
          </div>
          {/* .........book Info......... */}
          <div className="flex-1">
            <div className=" flex justify-between">
              <h1 className="font-medium text-2xl mt-2">{bookData.title}</h1>
              <Link to={"/collections"}>
                <button className="text-white bg-black px-2 py-2 whitespace-nowrap rounded font-body-font cursor-pointer flex">
                  <ArrowBigLeft /> Go Back
                </button>
              </Link>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <img src={stars} alt="" className="w-3 5" />
              <img src={stars} alt="" className="w-3 5" />
              <img src={stars} alt="" className="w-3 5" />
              <img src={stars} alt="" className="w-3 5" />
              <img src={stars} alt="" className="w-3 5" />
              <p className="pl-2">(677)</p>
            </div>
            <p className="mt-5 text-3xl ">
              Written by: <span className="font-medium">{bookData.author}</span>
            </p>
            <p className="mt-5 text-gray-500 md-w-4/5">
              {bookData.description}
            </p>
            <hr className="mt-4 sm:w-4/5" />
            <div className="text-sm text-gray-500 flex flex-col gap-1">
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
            <div className="actions">
              <h1 className="text-2xl font-lead-font font-bold mb-5">
                Actions
              </h1>
              <div className="flex gap-1.5 items-center">
                <Link
                  to={`/edit-book/${bookData.id}`}
                  className="bg-gray-500 py-2 px-2 rounded"
                >
                  <Edit className="cursor-pointer" />
                </Link>
                <div className=" bg-red-400 py-2 px-2 rounded">
                  <Trash2
                    color="black"
                    className="cursor-pointer"
                    onClick={openModal}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* book description */}
        <div className="mt-20">
          <div className="flex">
            <b className="border px-5 py-3 text-sm">Description</b>
            <p className="border px-5 py-3 text-sm">Reviews (100)</p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            {bookData.description}
          </div>
        </div>
        {/* ...........Display related products...........*/}
        <RelatedBooks
          category={bookData.category}
          // subCategory={bookData.subCategory}
        />
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-xl font-semibold mb-4">Delete Book</h2>
          <p>Are you sure you want to delete?</p>
          <p>Please we beg reconsider oo!!</p>
          <div className="flex justify-between gap-3 mt-2">
            <button
              className="bg-gray-700 px-2 py-1 text-white cursor-pointer rounded"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className="bg-red-900 px-2 py-1 text-white cursor-pointer rounded"
              onClick={deleteBook}
            >
              Delete
            </button>
          </div>
        </Modal>
        <InkyBot />
      </div>
    </>
  ) : (
    <div className="flex justify-center items-center h-full">
      <img src={loadingicon} alt="Loading..." className="w-32 h-32 mt-40" />
    </div>
  );
};

export default Books;
