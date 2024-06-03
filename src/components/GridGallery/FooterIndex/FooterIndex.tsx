import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

// STYLES

const StyledPagination = styled.div(
  ({ theme }) => css`
    display: flex;
    gap: 0.5rem;
  `
);

const StyledPageLink = styled.span<{ $isActive: boolean }>(
  ({ theme, $isActive }) => css`
    text-decoration: overline;
    cursor: pointer;
    padding: 0.25rem 0.5;

    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }

    ${$isActive &&
    css`
      text-decoration: underline;
      text-underline-offset: ${theme.spacing.xxxs};
    `}
  `
);

const StyledJogLink = styled(FontAwesomeIcon)<{ $active: boolean }>(
  ({ theme, $active }) => css`
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }

    ${!$active &&
    css`
      pointer-events: none;
      color: gray;
    `}
  `
);

interface IFooterIndexProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
}

const FooterIndex = ({
  totalPages,
  currentPage,
  handlePageChange,
}: IFooterIndexProps) => {
  // EVENT HANDLERS

  const handleNextClick = () => handlePageChange(currentPage + 1);

  const handlePreviousClick = () => handlePageChange(currentPage - 1);

  // LOGIC

  const Indexes = [...Array(totalPages).keys()].map((_pageNumber, index) => {
    const pageNumber = _pageNumber + 1;
    return (
      <StyledPageLink
        key={index}
        $isActive={pageNumber === currentPage}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </StyledPageLink>
    );
  });

  const previousActive = currentPage > 1;

  const nextActive = currentPage < totalPages;

  // JSX

  return (
    <StyledPagination>
      <StyledJogLink
        icon={faChevronLeft}
        $active={previousActive}
        onClick={handlePreviousClick}
      />
      {Indexes}
      <StyledJogLink
        icon={faChevronRight}
        $active={nextActive}
        onClick={handleNextClick}
      />
    </StyledPagination>
  );
};

export default FooterIndex;
