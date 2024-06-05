import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./config/routes";
import { ThemeProvider, createGlobalStyle, css } from "styled-components";
import theme from "./config/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter(routes);

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
    }

    a {
      color: ${theme.color.dark};
    }
  `
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
