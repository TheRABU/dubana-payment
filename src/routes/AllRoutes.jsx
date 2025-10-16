import { createBrowserRouter, RouterProvider } from "react-router";
import Payment from "../pages/Payment";
import RootLayout from "../layouts/RootLayout";

const AllRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Payment />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default AllRoutes;
