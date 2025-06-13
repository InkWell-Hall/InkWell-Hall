import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router";
import { ShopContext } from "../context/ShopContext";
import Card from "../components/Card";
import { ArrowBigRight, ArrowDown } from "lucide-react";
import SearchBar from "../components/SearchBar";
import InkyBot from "../components/InkyBot";

const Collections = () => {
  const [showlfilter, setShowFilter] = useState(false);
  const [filterBooks, setFilterBooks] = useState([]);
  const [category, setCategory] = useState([]);

  const { books, search, showSearch } = useContext(ShopContext);
  // const [books, setBooks] = useState([]);
  const atCollectionPage = location.pathname === "/collections";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Toggle for category
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // // Applying the togglers
  const applyFilter = () => {
    let booksCopy = books.slice();

    if (showSearch && search) {
      booksCopy = booksCopy.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      booksCopy = booksCopy.filter((item) => category.includes(item.category));
    }

    setFilterBooks(booksCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, books, search, showSearch]);

  return filterBooks ? (
    <>
      <Navbar />
      <SearchBar />
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t m-4">
        {/* Filter options */}
        <div className="min-w-60 ml-8 mt-20">
          <p
            onClick={() => setShowFilter(!showlfilter)}
            className="my-2 text-xl flex items-center cursor=pointer gap-2 cursor-pointer"
          >
            FILTERS
            <ArrowBigRight
              color="black"
              className={`h-3 sm:hidden ${showlfilter ? "rotate-90" : ""}`}
            />
          </p>
          {/* Category Filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showlfilter ? " " : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">CATEGORY</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value="IT"
                  onClick={toggleCategory}
                />{" "}
                IT
              </p>

              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value="Romance"
                  onClick={toggleCategory}
                />{" "}
                Romance
              </p>

              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value="classic"
                  onClick={toggleCategory}
                />{" "}
                Classic
              </p>
            </div>
          </div>
        </div>

        {/* The Right side */}
        <div className="flex-1">
          {/* Map products */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid=cols-4 gap-4 gap-y-6">
            {filterBooks.map((item, index) => (
              <div key={index}>
                <Link to={`/books/${item.id}`}>
                  <Card
                    author={item.author}
                    isbn={item.isbn}
                    image={item.imageURL[0]}
                    title={item.title}
                    category={item.category}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <InkyBot />
      </div>
    </>
  ) : null;
};

export default Collections;
