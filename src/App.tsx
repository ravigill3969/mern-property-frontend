import Register from "./pages/Register";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import AddLising from "./pages/AddLising";
import ProtectedRoute from "./components/ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />{" "}
      </Layout>
    ),
  },
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
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
