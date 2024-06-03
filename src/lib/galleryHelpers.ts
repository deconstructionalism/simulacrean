import React from "react";
import theme from "../config/theme";
import { spacingToPx } from "./themeHelpers";

const calculateAxisItemCount = (() => {
  // SETUP

  const { hPadding, mainBottomMargin, mainTopMargin } = theme._spacing.Body;
  const { minPanelWidth, minPanelHeight, gap } = theme._spacing.GridGallery;

  const spacings = {
    hPadding: spacingToPx(hPadding),
    mainBottomMargin: spacingToPx(mainBottomMargin),
    mainTopMargin: spacingToPx(mainTopMargin),
    minPanelWidth: spacingToPx(minPanelWidth),
    minPanelHeight: spacingToPx(minPanelHeight),
    gap: spacingToPx(gap),
  };

  /**
   * Calculates the number of items that can fit in the available space along the given axis.
   * @param axis - the axis to calculate the number of items for.
   * @returns - the number of items that can fit along the given axis.
   */
  const func = (axis: "x" | "y"): number => {
    const availableSpace =
      axis === "x"
        ? window.innerWidth - 2 * spacings.hPadding
        : window.innerHeight -
          spacings.mainBottomMargin -
          spacings.mainTopMargin;

    const minPanelSpace =
      axis === "x" ? spacings.minPanelWidth : spacings.minPanelHeight;

    let gridSpace = 0;
    let itemsAcross = 0;

    while (true) {
      let nextHeight = gridSpace;
      nextHeight += minPanelSpace;
      if (itemsAcross > 0) nextHeight += spacings.gap;
      if (nextHeight > availableSpace) break;

      itemsAcross += 1;
      gridSpace = nextHeight;
    }

    return itemsAcross;
  };

  return func;
})();

/**
 * Splits the given items into pages of the given size.
 * @param items - items to split into pages.
 * @param itemsPerPage - number of items per page.
 * @returns - An array of pages, each containing the items for that page.
 */
const splitItemsIntoPages = (items: React.ReactNode, itemsPerPage: number) => {
  const pages = React.Children.toArray(items).reduce(
    (acc: any, child: any, index: number) => {
      if (index % itemsPerPage === 0) {
        return [...acc, [child]];
      } else {
        return [...acc.slice(0, -1), [...acc.slice(-1)?.[0], child]];
      }
    },
    []
  );

  return pages;
};

export { calculateAxisItemCount, splitItemsIntoPages };
