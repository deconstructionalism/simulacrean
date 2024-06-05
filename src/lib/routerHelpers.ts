import { RouteObject } from "react-router";
import { blogRoutes, portfolioRoutes } from "../config/routes";

/**
 * Find the child routes to display in NavBar of the current root route.
 * @param pathname - The current pathname.
 * @returns - The child routes to display in NavBar.
 */
const findNavBarChildRoutes = (pathname: string): RouteObject[] => {
  const rootRoute = pathname.split("/")[1];

  switch (rootRoute) {
    case "portfolio":
      return portfolioRoutes;
    case "blog":
      return blogRoutes
    default:
      return [];
  }
};

export { findNavBarChildRoutes };
