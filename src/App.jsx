import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Collections from "./pages/Collections";
import Books from "./pages/Books";
import NotFound from "./pages/NotFound";
// import SearchBar from "./components/SearchBar";

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
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <div>
      {/* <SearchBar /> */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
