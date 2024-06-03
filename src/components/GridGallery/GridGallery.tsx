import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import useFooter from "../../lib/useFooter";
import FooterIndex from "./FooterIndex";
import { useSearchParams } from "react-router-dom";
import {
  calculateAxisItemCount,
  splitItemsIntoPages,
} from "../../lib/galleryHelpers";

// STYLES

const StyledGrid = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(${theme._spacing.GridGallery.minPanelWidth}, 1fr)
    );
    grid-template-rows: repeat(
      auto-fill,
      minmax(${theme._spacing.GridGallery.minPanelHeight}, 1fr)
    );
    grid-gap: ${theme._spacing.GridGallery.gap};
    height: calc(
      100vh - ${theme._spacing.Body.mainTopMargin} -
        ${theme._spacing.Body.mainBottomMargin}
    );
  `
);

interface IGridGalleryProps {
  children?: React.ReactNode;
}

const GridGallery = ({ children }: IGridGalleryProps) => {
  // STATE

  const [searchParams, setSearchParams] = useSearchParams();
  const [pages, setPages] = useState<any[][]>([]);
  const [pageSize, setPageSize] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { setFooterContent } = useFooter();

  // EVENT HANDLERS

  /**
   * When the user clicks on a page number, this function is called to update
   * the current page in state and the search params.
   * @param page - The page number to navigate to.
   */
  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
    setCurrentPage(page);
  };

  /**
   * When the window is resized, this function is called to recalculate the
   * number of items per page and update the state.
   */
  const handleResize = () => {
    paginate();
  };

  // EFFECT HOOKS

  /**
   * When the component mounts, add resize event listener
   * to window to recalculate the number of items per page on resize.
   */
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  /**
   * When the component mounts, calculate the number of items per page.
   */
  useEffect(() => {
    paginate();
  }, []);

  /**
   * When the pages or current page change, update the footer content.
   */
  useEffect(() => {
    setFooterContent(
      <FooterIndex
        totalPages={pages.length}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    );
  }, [pages, pageSize, currentPage]);

  /**
   * When the pages are set, check if the page number in the search params is
   * valid and update the current page accordingly.
   */
  useEffect(() => {
    // Skip if there are no pages
    if (pages.length === 0) return;

    const searchParamPage = searchParams.get("page");
    const selectedPage = searchParamPage ? parseInt(searchParamPage) : 1;

    // Ensure the page number is within the valid range, otherwise default to
    // min or max valid page number
    const validRange = { min: 1, max: pages.length };
    const nextPage =
      selectedPage < validRange.min
        ? validRange.min
        : selectedPage > validRange.max
        ? validRange.max
        : selectedPage;

    handlePageChange(nextPage);
  }, [pages, pageSize]);

  // LOGIC

  /**
   * Split the children into pages based on the number of items that fit per
   * page.
   */
  const paginate = () => {
    const itemsPerPage =
      calculateAxisItemCount("x") * calculateAxisItemCount("y");

    // Skip re-rendering if the number of items per page hasn't changed
    if (itemsPerPage === pageSize) return;

    const pages = splitItemsIntoPages(children, itemsPerPage);
    setPages(pages);
    setPageSize(itemsPerPage);
  };

  // JSX

  return <StyledGrid>{pages[currentPage - 1]}</StyledGrid>;
};

export default GridGallery;
