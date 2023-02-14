import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Intro from "../pages/Intro";
import NotFound from "../pages/NotFound";
import Projects from "../pages/Projects";
import Work from "../pages/Work";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Intro />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
], {
  basename: "/portfolio-example"
});
