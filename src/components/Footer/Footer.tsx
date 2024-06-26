import styled, { css } from "styled-components";
import useFooter from "../../lib/useFooter";
import { SubDomainPicker } from "./FooterWidget/widgets/SubDomainPicker";

// STYLES

const StyledFooter = styled.footer(
  ({ theme }) => css`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: ${theme._spacing.Footer.vPadding} ${theme._spacing.Body.hPadding};
    background-color: ${theme.color.light};
    border-top: 1px solid ${theme.color.dark};
    display: flex;
    gap: 1rem;
  `
);

const Footer = () => {
  // STATE

  const { footerContent } = useFooter();

  // JSX

  return (
    <StyledFooter>
      <SubDomainPicker />
      simulacrean.info
      {footerContent}
    </StyledFooter>
  );
};

export default Footer;
