import NavBar from "../NavBar";
import { Outlet, useLocation } from "react-router";
import styled, { createGlobalStyle, css } from "styled-components";
import Footer from "../Footer";

// STYLES

const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    *,
    * > * {
      margin: 0;
      padding: 0;
    }

    body {
      background-color: ${theme.color.light};
      font-family: ${theme.font.heading};
      font-size: ${theme.spacingBasis};
      padding: ${theme._spacing.Body.vPadding} ${theme._spacing.Body.hPadding};
    }

    a {
      color: ${theme.color.dark};
    }
  `
);

const StyledMain = styled.main(
  ({ theme }) => css`
    height: 100%;
    margin-top: ${theme._spacing.Body.mainTopMargin};
    margin-bottom: ${theme._spacing.Body.mainBottomMargin};
  `
);

const App = () => {

  // JSX

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  );
};

export default App;
