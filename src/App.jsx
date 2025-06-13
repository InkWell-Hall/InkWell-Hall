import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Collections from "./pages/Collections";
import Books from "./pages/Books";
import NotFound from "./pages/NotFound";
import AddBook from "./pages/AddBook";
// import SearchBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import EditBook from "./pages/EditBook";
import InkyBot from "./components/InkyBot";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/collections",
    element: <Collections />,
  },
  {
    path: "/books/:bookId",
    element: <Books />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/add-book",
    element: <AddBook />,
  },
  {
    path: "/edit-book/:id",
    element: <EditBook />,
  },
  {
    path: "/inky",
    element: <InkyBot />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <div>
      {/* <SearchBar /> */}
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};

export default App;
