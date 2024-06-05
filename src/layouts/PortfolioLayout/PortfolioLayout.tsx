import NavBar from "../../components/NavBar";
import { Outlet } from "react-router";
import styled, { css } from "styled-components";
import Footer from "../../components/Footer";

// STYLES

const StyledMain = styled.main(
  ({ theme }) => css`
    height: 100%;
    margin-top: ${theme._spacing.Body.mainTopMargin};
    margin-bottom: ${theme._spacing.Body.mainBottomMargin};
    padding: ${theme._spacing.Body.vPadding} ${theme._spacing.Body.hPadding};

  `
);

const PortfolioLayout = () => {

  // JSX

  return (
    <>
      <NavBar />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  );
};

export default PortfolioLayout;
