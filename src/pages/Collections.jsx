import React, { useContext, useEffect, useState } from "react";
import { apiClient } from "../api/client";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router";
import Modal from "../modals/DeleteBookModal";
import { ShopContext } from "../context/ShopContext";

const Collections = () => {
  const { books } = useContext(ShopContext);
  // const [books, setBooks] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // const getBooks = () => {
  //   apiClient
  //     .get("/Books")
  //     .then((response) => {
  //       // console.log(response.data);
  //       setBooks(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getBooks();
  //   console.log(books);
  // }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="flex justify-end items-center">
        <div className="grid grid-cols-2 md:grid-cols-3  gap-10 mt-20 mr-20 w-[74%] mx-auto">
          {books.map((item, index) => {
            return (
              <div key={index} className="w-70">
                <Link to={`/books/${item.id}`}>
                  <div>
                    <img src={`${item.imageURL[0]}`} alt="" />
                  </div>
                  <div>
                    <h1 className="font-body-font">
                      Ttile: <span className="font-bold"> {item.title}</span>
                    </h1>
                    <p>Author: {item.author}</p>
                  </div>
                </Link>
                <button onClick={openModal}>Open Modal</button>
              </div>
            );
          })}
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
          <p>Are you sure you want to delete?</p>
          <p>Please we beg reconsider oo!!</p>
        </Modal>
      </div>
    </>
  );
};
export default Collections;
