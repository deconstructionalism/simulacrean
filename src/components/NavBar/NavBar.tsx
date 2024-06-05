import { useLocation, RouteObject } from "react-router";
import { portfolioRoutes } from "../../config/routes";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { findNavBarChildRoutes } from "../../lib/routerHelpers";

// STYLES

const StyledNav = styled.nav(
  ({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    padding: ${theme._spacing.NavBar.paddingTop} ${theme._spacing.Body.hPadding};
  `
);

const StyledUL = styled.ul(
  ({ theme }) => css`
    display: flex;
    gap: 0 ${theme._spacing.NavBar.itemGap};
    padding: 0;
    list-style: none;
  `
);

const StyledLI = styled.li<{ $isActive: boolean }>(
  ({ theme, $isActive }) => css`
    transition: transform ${theme.timing.extraFast} ease;

    &:hover {
      transform: scale(1.1);
    }

    > a {
      text-decoration-line: overline;
      font-size: ${theme.spacing.xl};

      ${$isActive &&
      css`
        text-decoration-line: underline;
        text-underline-offset: ${theme.spacing.s};
      `}
    }
  `
);

const NavBar = () => {
  // STATE

  const location = useLocation();

  // LOGIC

  const childRoutes = findNavBarChildRoutes(location.pathname);

  const Links = childRoutes.flatMap((route, index) => {
    if (!route.handle) return [];
    const isActive =
      route.path?.replace(/\//g, "") === location.pathname.replace(/\//g, "");

    return (
      <StyledLI key={index} $isActive={isActive}>
        <Link to={`${route.path}`}>{route.handle?.name}</Link>
      </StyledLI>
    );
  });

  // JSX

  return (
    <StyledNav>
      <StyledUL>{Links}</StyledUL>
    </StyledNav>
  );
};

export default NavBar;
