import { lazy } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";

import { Spinner } from "components";
import ErrorBoundary from "pages/error/ErrorBoundary";

const SignIn = lazy(() => import("pages/signIn/SignIn"));
const SignUp = lazy(() => import("pages/signUp/SignUp"));

const NotFound = lazy(() => import("pages/404/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
    errorElement: <ErrorBoundary />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const PublicRouts = () => {
  redirect("/");

  return <RouterProvider router={router} fallbackElement={<Spinner />} />;
};

export default PublicRouts;
