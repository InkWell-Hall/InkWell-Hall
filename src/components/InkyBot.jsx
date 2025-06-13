import React, { useState } from "react";
import logo from "../assets/images/white.png";
import Modal from "../modals/DeleteBookModal";
import { Link, useLocation } from "react-router";
import white from "../assets/images/stripe_logo.png";

const InkyBot = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const atDashboardPage = location.pathname === "/dashboard";

  return (
    <>
      <div className="inky fixed bottom-0 right-0 cursor-pointer">
        <img src={logo} alt="" className="w-20" onClick={openModal} />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-semibold mb-4">Ink_Bot here 👋 </h2>
        <p className="text-black">
          <span className="font-bold mb-1.5">
            👋 Hey there! I'm Inky-Bot, your virtual assistant
          </span>{" "}
          <br />. I'm here to help you navigate the app, answer your questions,
          or point you in the right direction. What would you like to do today?
          <br />
          I'm here to help you navigate the app, answer your questions, or point
          you in the right direction. What would you like to do today?
        </p>
        <div className="flex justify-between items-center mt-17 text-black">
          {" "}
          <input
            type="text"
            placeholder="Type your message..."
            // value={userInput}
            // onChange={handleInputChange}
            className="w-70 px-4 py-2 border rounded-md text-black"
          />
          <Link>
            <button
              className="bg-red-500 px-3 py-1 rounded text-white cursor-pointer"
              onClick={closeModal}
            >
              Send
            </button>
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default InkyBot;
