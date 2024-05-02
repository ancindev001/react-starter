import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Error from "../pages/Error";
import Default from "../pages/Todo/Index";
import TodoDetail from "../pages/TodoDetail/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Default />,
      },
      {
        path: "todo/:id",
        element: <TodoDetail />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
