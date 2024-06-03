import { RouteObject } from "react-router";
import App from "../components/App";
import About from "../pages/About";
import Code from "../pages/Code";
import Failures from "../pages/Failures";
import Home from "../pages/Home";
import Visuals from "../pages/Visuals";
import Words from "../pages/Words";

const routes: RouteObject[] = [
  {
    path: "/portfolio",
    element: <App />,
    children: [
      {
        path: "/portfolio",
        element: <Home />,
        handle: {
          name: "home",
        }
      },
      {
        index: true,
        path: "/portfolio/words",
        element: <Words />,
        handle: {
          name: "words",
        }
      },
      {
        path: "/portfolio/visuals",
        element: <Visuals />,
        handle: {
          name: "visuals",
        }
      },
      {
        path: "/portfolio/code",
        element: <Code />,
        handle: {
          name: "code",
        }
      },
      {
        path: "/portfolio/failures",
        element: <Failures />,
        handle: {
          name: "failures",
        }
      },
      {
        path: "/portfolio/about",
        element: <About />,
        handle: {
          name: "about",
        }
      },
    ],
  },
];

export default routes;
