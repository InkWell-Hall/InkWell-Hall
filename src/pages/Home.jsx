import React, { useEffect, useState } from "react";
import Navigate from "../assets/images/navigate1.jpg";
import notification from "../assets/images/notification.jpg";
import search from "../assets/images/search2.jpg";
import { ArrowRight } from "lucide-react";
import another from "../assets/images/another.jpg";
import stars from "../assets/images/Stars.png";
import compLogo from "../assets/images/logo.svg";
import user1 from "../assets/images/1chat.jfif";
import header from "../assets/images/header.jpg";
import Lartey from "../assets/images/Lartey.jpg";
import Adubea from "../assets/images/Adubea.jpg";
import vid from "../assets/images/womanhelp.mp4";
import HomeNavbar from "../components/HomeNavbar.jsx";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://fakestoreapi.in/api/products")
      .then((response) => {
        console.log("Fetched response:", response.products);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const getData = () => {
    fetch("http://localhost:5173/api/v1/Books")
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  useEffect(() => {
    fetchData();
    // console.log(data);
  }, []);
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div>
      <HomeNavbar />
      <header className=" header w-full h-[65vh] relative overflow-hidden">
        <video
          src={vid}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover object-center-90%"
        ></video>
      </header>
      <div className="w-[80%] flex flex-col md:flex lg:flex-row justify-center items-center mx-auto gap-10 mt-20">
        <div className="lg:w-[50%]">
          <h1 className="text-[50px] font-lead-font welcome-text">
            Revolutionize your Library Experience Today{" "}
          </h1>
        </div>

        <div className="lg:w-[50%] welcome-p">
          <p className=" font-700 text-[20px] font-body-font">
            Discover a seamless way to manage your library with our innovative
            system. Wheteher you're a patron or a librarian, our platform is
            designed to enhance your experience and streamline operation{" "}
          </p>
          <div className="flex gap-8 mt-5">
            <button className="bg-[#de3326] text-white py-2 px-3 rounded-full cursor-pointer">
              <a href="/sign-up"> Learn More </a>
            </button>
            <button className="bg-[#fff] text-black border border-gray-400 cursor-pointer py-2 px-3 rounded-full">
              <a href="/sign-up">Sign Up</a>
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="mt-20  bg-[#F5F5DC]">
        <div className="text-center">
          <h1 className="font-lead-font text-[30px] font-light pt-15 mb-20">
            Discover the essential features of <br /> our Library Management
            System.
          </h1>

          <div className="features-container w-[80%] mx-auto pb-20">
            <div className="feature-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {/* .......the first card ............ */}
              <div className="cards flex flex-col items-center gap-4">
                <img src={Navigate} alt="" className="w-70 rounded" />
                <h1 className="font-lead-font font-bold">
                  Streamlined Interface Designed for Efortless navigation and
                  usability
                </h1>
                <p className="font-body-font">
                  Our user-friendly interface ensures a seamless experience for
                  all users
                </p>
                <a
                  href="/sign-up"
                  className="flex gap-2 items-center hover:gap-3 transition-all duration-300 font-bold"
                >
                  Learn more <ArrowRight size={17} />
                </a>
              </div>

              {/* .......the second card ............ */}

              <div className="cards flex flex-col items-center gap-4">
                <img src={search} alt="" className="w-70 rounded" />
                <h1 className="font-lead-font font-bold">
                  Advanced search funtionality for quick access to library
                  resources
                </h1>
                <p>Find books by genre, author, or availabilty with ease</p>
                <a
                  href="#"
                  className="flex gap-2 items-center hover:gap-3 transition-all duration-300 font-bold"
                >
                  Explore <ArrowRight size={17} />{" "}
                </a>
              </div>

              {/* .......the third card ............ */}

              <div className="cards flex flex-col items-center gap-4">
                <img src={notification} alt="" className="w-70 rounded" />
                <h1 className="font-lead-font font-bold">
                  Real-time Notification to Keep you updated on your library
                  activities
                </h1>
                <p>
                  Our user-friendly interface ensures a seamless experience for
                  all users
                </p>
                <div>
                  <a
                    href="/sign-up"
                    className="flex gap-2 items-center hover:gap-3 transition-all duration-300 font-bold"
                  >
                    Sign up <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <section className="Discover  bg-black md:h-[70vh] lg:h-[95vh]">
        <div className=" w-[80%] mx-auto text-white pt-20 flex gap-10 lg:flex">
          <div className="w-full lg:w-[50%] mt-10">
            <h1 className="font-lead-font text-[30px]">
              Discover the transformative benefits of our library management
              system today!
            </h1>
            <p className="font-[Lato] font-700 text-[20px]">
              Discover a seamless way to manage your library with our innovative
              system. Wheteher you're a patron or a librarian, our platform is
              designed to enhance your experience and streamline operation{" "}
            </p>
            <div className="mt-15 mb-15 flex gap-8">
              <div>
                <h1 className="font-lead-font text-[27px]">Efficiency</h1>
                <p>Save time and reduce adminitrative workflow</p>
              </div>
              <div>
                <h1 className="font-lead-font text-[27px]">Accessibility</h1>
                <p>Easily find and enjoy your favorite book</p>
              </div>
            </div>
          </div>

          {/*  */}

          {/*  */}
          <div className="w-[50%] hidden lg:block">
            <img src={another} alt="" className="h-[50%] w-full lg:h-[75vh]" />
          </div>
        </div>
      </section>
      {/*  */}

      <section className="bg-[#F5F5DC] text-black" id="testimonials ">
        <div className="w-[80%] mx-auto pt-10 pb-20">
          <h1 className="welcome-text">Users' Testimonials</h1>
          <p className="font-body-font text-[20px] mb-20">
            This system transformed our library experience
          </p>

          <div className="testi-cards flex justify-between items-center gap-10 flex-col md:flex-row">
            <div className="text-center">
              <p>
                "The library management is intuitive and efficient it has <br />
                streamlined our operation significantly"
              </p>
              <div className="user-deet flex items-center gap-7 my-6 flex-col md:flex-row ">
                <img src={user1} alt="" className="rounded-full w-13" />
                <div>
                  <h1 className="font-lead-font font-bold">Madam</h1>
                  <p>Librarian/Otp Library</p>
                </div>
                <hr />
                <img src={stars} alt="" className="w-29" />
              </div>
            </div>
            {/*  */}
            <div className="text-center">
              <p>
                "The library management is intuitive and efficient it has <br />
                streamlined our operation significantly"
              </p>
              <div className="user-deet flex items-center gap-7 my-6 flex-col md:flex-row ">
                <img src={user1} alt="" className="rounded-full w-13" />
                <div>
                  <h1 className="font-lead-font font-bold">Madam</h1>
                  <p>Librarian/Otp Library</p>
                </div>
                <hr />
                <img src={stars} alt="" className="w-29" />
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </section>
      {/*  */}

      <section className="exp bg-black text-white">
        <div className="w-[80%] mx-auto flex gap-20 items-center pt-20 pb-10">
          <div className="w-[50%]">
            <h1 className="font-lead-font text-[40px]">
              Transform Your Library Experience
            </h1>
            <p className="font-body-font mt-2">
              Sign up for a free trial and streamline your library management
              effortlessly
            </p>
            <div className="flex gap-10 mt-7">
              <button className="bg-[#de3326] px-4 py-2 rounded-full text-white">
                <a href="/sign-up">Sign Up</a>
              </button>
              <button className="bg-black border border-white px-3 py-2 rounded-full text-white">
                <a href="/sign-up">Learn more</a>
              </button>
            </div>
          </div>
          <div className="w-[50%]">
            <img src={header} alt="" className="" />
          </div>
        </div>
      </section>
      {/*  */}
      <section className="team mt-10 ">
        <div className="text-center gap-3 flex flex-col mb-5">
          <p className="font-body-font font-bold">Meet</p>
          <h1 className="font-lead-font text-[20px]">Our Team</h1>
          <p>Dedicated professionals committed to library innovation</p>
        </div>

        <div className="team-cards grid grid-cols-5 gap-5 w-[80%] mx-auto">
          {/* my card */}
          <div className="cards flex flex-col items-center gap-4">
            <img src={search} alt="" className="w-70 rounded" />
            <h1 className="font-lead-font font-bold">Swatson Jnr</h1>
            <p>Team Lead</p>
            <p>
              Passionat about creating a user-friendly library solution and
              enhancing community management{" "}
            </p>
            <a
              href="#"
              className="flex gap-2 items-center hover:gap-3 transition-all duration-300 font-bold"
            >
              Explore <ArrowRight size={17} />{" "}
            </a>
          </div>
          {/* Kofi lartey's card */}
          <div className="cards flex flex-col items-center gap-4">
            <img src={Lartey} alt="" className="w-70 rounded" />
            <h1 className="font-lead-font font-bold">Alpheius Gbegbi</h1>
            <p>Snr Backend Developer</p>
            <p>
              Passionat about creating a user-friendly library solution and
              enhancing community management{" "}
            </p>
            <a
              href="#"
              className="flex gap-2 items-center hover:gap-3 transition-all duration-300 font-bold"
            >
              Explore <ArrowRight size={17} />{" "}
            </a>
          </div>
          {/* angela */}
          <div className="cards flex flex-col items-center gap-4">
            <img src={Adubea} alt="" className="w-70 rounded" />
            <h1 className="font-lead-font font-bold">Angela</h1>
            <p>Data Analyst</p>
            <p>
              Passionat about creating a user-friendly library solution and
              enhancing community management{" "}
            </p>
            <a
              href="#"
              className="flex gap-2 items-center hover:gap-3 transition-all duration-300 font-bold"
            >
              Explore <ArrowRight size={17} />{" "}
            </a>
          </div>
          {/*  */}
          <div className="cards flex flex-col items-center gap-5">
            <img src={search} alt="" className="w-70 rounded" />
            <h1 className="font-lead-font font-bold">Swatson Jnr</h1>
            <p>Team Lead</p>
            <p>
              Passionat about creating a user-friendly library solution and
              enhancing community management{" "}
            </p>
            <a
              href="#"
              className="flex gap-2 items-center hover:gap-3 transition-all duration-300 font-bold"
            >
              Explore <ArrowRight size={17} />{" "}
            </a>
          </div>
          {/*  */}
          <div className="cards flex flex-col items-center gap-4">
            <img src={search} alt="" className="w-70 rounded" />
            <h1 className="font-lead-font font-bold">Swatson Jnr</h1>
            <p>Team Lead</p>
            <p>
              Passionat about creating a user-friendly library solution and
              enhancing community management{" "}
            </p>
            <a
              href="#"
              className="flex gap-2 items-center hover:gap-3 transition-all duration-300 font-bold"
            >
              Explore <ArrowRight size={17} />{" "}
            </a>
          </div>
        </div>
        {/* join us */}
        <div className="text-center mt-20">
          <h1 className="font-lead-font text-[27px] mb-4">Open positions</h1>
          <p>Disciver your future with us today!</p>
          <button className="border border-black px-4 rounded-full py-2 cursor-pointer mt-4">
            <a href="/login"> Apply now! </a>
          </button>
        </div>
      </section>
      {/*  */}
      <footer className="mt-20 bg-black text-white">
        <div className="footer-container grid grid-cols-6 mb-20 w-[90%] mx-auto pt-10">
          <div>logo</div>
          {/*  */}
          <div>
            <h1 className="font-bold">Resource Section</h1>
            <div>
              <ul>
                <li>About Us</li>
                <li>Contact Support</li>
                <li>Help Center</li>
                <li>Blog posts</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div>
            <h1 className="font-bold">Support Links</h1>
            <div>
              <ul>
                <li>About Us</li>
                <li>Contact Support</li>
                <li>Help Center</li>
                <li>Blog posts</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div>
            <h1 className="font-bold">Legal Information</h1>
            <div>
              <ul>
                <li>About Us</li>
                <li>Contact Support</li>
                <li>Help Center</li>
                <li>Blog posts</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div>
            <h1 className="font-bold">Follow Us</h1>
            <div>
              <ul>
                <li>About Us</li>
                <li>Contact Support</li>
                <li>Help Center</li>
                <li>Blog posts</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div>
            <h1 className="font-bold">Contact Us</h1>
            <div>
              <ul>
                <li>About Us</li>
                <li>Contact Support</li>
                <li>Help Center</li>
                <li>Blog posts</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-2">
          <div className="flex">
            <div className="flex gap-8">
              <p className="text-[14px]">
                © 2025 InkWell-Hall || All rights reserved
              </p>
              <p className="text-[14px]">Privacy Policy</p>
              <p className="text-[14px]">Terms of Services</p>
            </div>

            <div className="socials"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
