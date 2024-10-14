import Register from "./pages/Register";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import AddLising from "./pages/ManageListing";
import ProtectedRoute from "./components/ProtectedRoute";
import MyListing from "./pages/MyListing";
import Search from "./pages/Search";
import SingleListingPage from "./pages/SingleListing";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Layout>
        <Login />,
      </Layout>
    ),
  },
  {
    path: "/register",
    element: (
      <Layout>
        <Register />,
      </Layout>
    ),
  },
  {
    path: "/add-listing",
    element: (
      <ProtectedRoute>
        <Layout>
          <AddLising />,
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/my-listing",
    element: (
      <ProtectedRoute>
        <Layout>
          <MyListing />,
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/edit-listing/:listingId",
    element: (
      <ProtectedRoute>
        <Layout>
          <AddLising />,
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/",
    element: (
      <Layout>
        <Search />,
      </Layout>
    ),
  },
  {
    path: "/details/:listingId",
    element: (
      <Layout>
        <SingleListingPage />,
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
