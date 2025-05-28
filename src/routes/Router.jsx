import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "../component/Home";
function Layout() {
  return (
    <>
      <Home />
      {/* <Outlet /> */}
      {/* <Footer /> */}
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
    //   { path: "about", element: <About /> },
    //   { path: "contact", element: <Contact /> },
    //   { path: "Pages", element: <Pages /> },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;