import { useEffect, useState } from "react";
import styled, { css, useTheme } from "styled-components";
import { spacingToPx } from "../../lib/themeHelpers";
import { useNavigate } from "react-router";

// CONSTANTA

const SUB_DOMAINS = ["blog", "portfolio", "projects", "sds"];

// STYLES

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const StyledFullDomainContainer = styled.section<{ $isHovering: boolean }>(
  ({ theme, $isHovering }) => {
    const { uriHorizGap, itemHeight, hoverHeight } =
      theme._spacing.SubDomainPicker;

    const height = $isHovering ? hoverHeight : itemHeight;

    return css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      column-gap: ${uriHorizGap};
      position: relative;
      width: 100%;
      height: 100%;
      &::after {
        position: absolute;
        content: ".";
        font-size: ${height};
        line-height: ${height};
        height: ${height};
        right: 49.5%;
        opacity: ${$isHovering ? 1 : 0};
        transition: all ${theme.timing.medium} ease;
      }
    `;
  }
);

const StyledSubDomainContainer = styled.div<{
  $marginTop: number;
}>(
  ({ theme, $marginTop }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    cursor: pointer;
    gap: ${theme._spacing.SubDomainPicker.itemVertGap};
    width: 100%;
    margin-top: ${$marginTop}px;
    margin-bottom: auto;
    transition: margin ${theme.timing.medium} ease;
  `
);

const StyledDomain = styled.div<{ $isHovering: boolean }>(
  ({ theme, $isHovering }) => css`
    flex: 1;
    transition: all ${theme.timing.medium} ease;
    font-size: ${$isHovering
      ? theme._spacing.SubDomainPicker.hoverHeight
      : theme._spacing.SubDomainPicker.itemHeight};
  `
);

const StyledSubdomain = styled.div<{
  $hoverIndex: number | null;
  $myIndex: number;
}>(({ theme, $hoverIndex, $myIndex }) => {
  const { itemHeight, hoverHeight, adjacentHoverHeight } =
    theme._spacing.SubDomainPicker;
  const myScale =
    $hoverIndex === null
      ? itemHeight
      : $hoverIndex === $myIndex
      ? hoverHeight
      : $hoverIndex - 1 === $myIndex || $hoverIndex + 1 === $myIndex
      ? adjacentHoverHeight
      : itemHeight;

  return css`
    height: ${myScale};
    font-size: ${myScale};
    line-height: ${myScale};
    transition: all ${theme.timing.medium} ease;
  `;
});

const HomeLayout = () => {
  // STATE

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const theme = useTheme();
  const [marginTop, setMarginTop] = useState<number>(0);
  const navigate = useNavigate();

  // EVENT HANDLERS

  const handleHover = (index: number) => {
    setHoverIndex(index);
  };

  const handleClick = () => {
    if (hoverIndex === null) return;

    navigate(SUB_DOMAINS[hoverIndex])
  }

  // EFFECT HOOKS

  useEffect(() => {
    const totalHeight = document.documentElement.offsetHeight;
    const { itemHeight, hoverHeight, adjacentHoverHeight, itemVertGap } =
      theme._spacing.SubDomainPicker;

    const itemHeightPx = spacingToPx(itemHeight);
    const itemHoverHeightPx = spacingToPx(hoverHeight);
    const itemAdjacentHoverHeightPx = spacingToPx(adjacentHoverHeight);
    const itemVertGapPx = spacingToPx(itemVertGap);
    const numSubDomains = SUB_DOMAINS.length;

    if (hoverIndex === null) {
      const itemsHeight =
        numSubDomains === 0
          ? 0
          : numSubDomains === 1
          ? itemHeightPx
          : numSubDomains * itemHeightPx + (numSubDomains - 1) * itemVertGapPx;

      setMarginTop((totalHeight - itemsHeight) / 2);
      return;
    }

    interface IHeightSegment {
      height: number;
      index: number;
    }

    const heights = SUB_DOMAINS.reduce<IHeightSegment[]>((acc, _, index) => {
      const itemHeight =
        index === hoverIndex
          ? itemHoverHeightPx
          : [hoverIndex - 1, hoverIndex + 1].includes(index)
          ? itemAdjacentHoverHeightPx
          : itemHeightPx;

      const itemHeightSegment: IHeightSegment = {
        height: itemHeight,
        index
      }

      return index < SUB_DOMAINS.length - 1
        ? [...acc, itemHeightSegment, { height: itemVertGapPx, index: index + 0.5}]
        : [...acc, itemHeightSegment];
    }, []);

    const offSet = heights.reduce((acc, { height, index }) => {
      if (index === hoverIndex) {
        return acc + height / 2
      } if (index > hoverIndex) {
        return acc
      } else {
        return acc + height
      }
    }, 0)

    setMarginTop(
      (totalHeight) / 2 - offSet
    );
  }, [hoverIndex]);

  // LOGIC

  const SubDomains = SUB_DOMAINS.map((subDomain, index) => {
    return (
      <StyledSubdomain
        key={index}
        $myIndex={index}
        $hoverIndex={hoverIndex}
        onMouseEnter={() => handleHover(index)}
      >
        {subDomain}
      </StyledSubdomain>
    );
  });

  // JSX

  return (
    <StyledMain>
      <StyledFullDomainContainer $isHovering={hoverIndex !== null}
       onClick={handleClick}
      >
        <StyledSubDomainContainer
          // onMouseLeave={() => setHoverIndex(null)}
          $marginTop={marginTop}
        >
          {SubDomains}
        </StyledSubDomainContainer>
        <StyledDomain $isHovering={hoverIndex !== null}>
          simulacrean.info
        </StyledDomain>
      </StyledFullDomainContainer>
    </StyledMain>
  );
};

export default HomeLayout;
