import { Navigate, RouteObject } from "react-router";
import PortfolioLayout from "../layouts/PortfolioLayout";
import About from "../pages/About";
import Code from "../pages/Code";
import Failures from "../pages/Failures";
import Visuals from "../pages/Visuals";
import Words from "../pages/Words";
import BlogLayout from "../layouts/BlogLayout";
import HomeLayout from "../layouts/HomeLayout";

export enum SubDomain {
  portfolio = "portfolio",
  blog = "blog",
}

type TSubDomainRoutes<SubDomain extends keyof typeof SubDomain> =
  (RouteObject & {
    path: `/${SubDomain}` | `/${SubDomain}/` | `/${SubDomain}/${string}`;
  })[];

const portfolioRoutes: TSubDomainRoutes<SubDomain.portfolio> = [
  {
    element: <Navigate to="/portfolio/words" replace={true} />,
    path: "/portfolio",
  },
  {
    path: "/portfolio/words",
    element: <Words />,
    handle: {
      name: "words",
    },
  },
  {
    path: "/portfolio/visuals",
    element: <Visuals />,
    handle: {
      name: "visuals",
    },
  },
  {
    path: "/portfolio/code",
    element: <Code />,
    handle: {
      name: "code",
    },
  },
  {
    path: "/portfolio/failures",
    element: <Failures />,
    handle: {
      name: "failures",
    },
  },
  {
    path: "/portfolio/about",
    element: <About />,
    handle: {
      name: "about",
    },
  },
];

const blogRoutes: TSubDomainRoutes<SubDomain.blog> = [
  {
    element: <Navigate to="/topics" replace={true} />,
    path: "/blog",
  },
  {
    path: "/blog/topics",
    element: <>Topics</>,
    handle: {
      name: "topics",
    },
  },
  {
    path: "/blog/chronological",
    element: <>Chronological</>,
    handle: {
      name: "chronological",
    },
  },
  {
    path: "/blog/about",
    element: <About />,
    handle: {
      name: "about",
    },
  },
];

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/blog",
    element: <BlogLayout />,
    children: blogRoutes,
  },
  {
    path: "/portfolio",
    element: <PortfolioLayout />,
    children: portfolioRoutes,
  },
];

export { portfolioRoutes, blogRoutes };

export default routes;
