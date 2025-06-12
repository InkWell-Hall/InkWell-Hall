import { useParams } from "react-router";
import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/images/assets";
import RelatedBooks from "../components/RelatedBooks";
import { apiClient } from "../api/client";
import { Delete, DeleteIcon, Edit } from "lucide-react";
const Books = () => {
  const { bookId } = useParams();
  // const { products, books } = useContext(ShopContext);
  const [bookData, setBookData] = useState(null);
  const [image, setImage] = useState("");

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
          <h1 className="font-medium text-2xl mt-2">{bookData.title}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <p className="pl-2">(677)</p>
          </div>
          <p className="mt-5 text-3xl ">
            Written by: <span className="font-medium">{bookData.author}</span>
          </p>
          <p className="mt-5 text-gray-500 md-w-4/5">{bookData.description}</p>
          <hr className="mt-4 sm:w-4/5" />
          <div className="text-sm text-gray-500 xl:mt-79 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
          <div className="actions">
            <Edit />
            <DeleteIcon />
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, porro
          eligendi. Fugiat labore distinctio ratione alias eos consequuntur id
          impedit voluptate velit, dicta ad maxime delectus ipsum fuga hic rerum
          corporis culpa quos doloribus similique quia. Hic facilis quisquam id.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error
          impedit eius. <br />
          inventore voluptatibus nulla maxime cumque aliquid officiis autem
          minima soluta delectus debitis, consequatur quisquam illo similique
          incidunt rerum? Enim quae voluptatem fugit quis impedit nulla iste
          facere illum iusto et hic porro, laborum voluptatum a debitis non aut
          sed! Quasi quo fugiat architecto rerum magnam alias assumenda
          voluptatum excepturi atque. Maxime numquam architecto obcaecati optio
          asperiores quisquam facilis.
        </div>
      </div>
      {/* ...........Display related products...........*/}
      <RelatedBooks
        category={bookData.category}
        // subCategory={bookData.subCategory}
      />
    </div>
  ) : (
    <div className="">no data</div>
  );
};

export default Books;
