import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Spinner } from "components";

import { lazy } from "react";

const Layout = lazy(() => import("layout/Layout"));
const NotFound = lazy(() => import("pages/404/NotFound"));
const ErrorBoundary = lazy(() => import("pages/error/ErrorBoundary"));

const Home = lazy(() => import("pages/home/Home"));

const BooksList = lazy(() => import("pages/books/list/BooksList"));
const BookAdd = lazy(() => import("pages/books/add/BookAdd"));
const BookEdit = lazy(() => import("pages/books/edit/BookEdit"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        children: [
          {
            path: "",
            element: <BooksList />,
          },
          {
            path: "add",
            element: <BookAdd />,
          },
          {
            path: "edit/:bookId",
            element: <BookEdit />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
    errorElement: <ErrorBoundary />,
  },
]);

const PrivateRouts = () => {
  // return <MainRouts />;
  // if (status === "pending") {
  //   return (
  //     <Box
  //       minHeight="100vh"
  //       display="flex"
  //       justifyContent="center"
  //       alignItems="center"
  //     >
  //       <Spinner />
  //     </Box>
  //   );
  // }

  return <RouterProvider router={router} fallbackElement={<Spinner />} />;
};

export default PrivateRouts;
