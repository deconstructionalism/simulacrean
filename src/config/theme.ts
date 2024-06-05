import {
  BasicColors,
  BasicSpacings,
  BasicTimings,
  ColorPalette,
  ComponentPalettes,
  FontFamily,
  SpacingPalette,
  TimingPalette,
  ZIndexPalette,
} from "./theme.d";

const SPACING_BASIS = "16px" satisfies `${string}px`;

const COLOR_PALETTE = {
  primary: "#007bff",
  secondary: "#6c757d",
  success: "#28a745",
  danger: "#dc3545",
  warning: "#ffc107",
  info: "#17a2b8",
  light: "#ffffff",
  dark: "#000000",
} satisfies ColorPalette<BasicColors>;

const SPACING_PALETTE = {
  xxxs: "0.25rem",
  xxs: "0.5rem",
  xs: "0.75rem",
  s: "1rem",
  m: "1.5rem",
  l: "2rem",
  xl: "3rem",
  xxl: "4rem",
  xxxl: "6rem",
} satisfies SpacingPalette<BasicSpacings>;

const TIMING_PALETTE = {
  extraSlow: "2s",
  slow: "1s",
  medium: "0.5s",
  fast: "0.25s",
  extraFast: "0.1s",
} satisfies TimingPalette<BasicTimings>;

const FONT_PALETTE = {
  heading: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
  body: "nimbus-sans, sans-serif",
} as const satisfies Record<string, FontFamily>;

const Z_INDEX_PALETTE = {} satisfies ZIndexPalette;

const COMPONENT_COLOR_PALETTE = {} satisfies ComponentPalettes<ColorPalette>;

const COMPONENT_SPACING_PALETTE = {
  Body: {
    hPadding: SPACING_PALETTE.l,
    vPadding: "0rem",
    mainTopMargin: "6rem",
    mainBottomMargin: "4rem",
  },
  Footer: {
    vPadding: "1rem",
  },
  NavBar: {
    itemGap: SPACING_PALETTE.l,
    paddingTop: SPACING_PALETTE.s,
  },
  GridGallery: {
    gap: SPACING_PALETTE.s,
    minPanelWidth: "22rem",
    minPanelHeight: "15rem",
  },
  SubDomainPicker: {
    itemVertGap: SPACING_PALETTE.s,
    uriHorizGap: SPACING_PALETTE.s,
    itemHeight: "1rem",
    hoverHeight: "3rem",
    adjacentHoverHeight: "1.4rem",
  }
} satisfies ComponentPalettes<SpacingPalette>;

const COMPONENT_TIMING_PALETTE = {} satisfies ComponentPalettes<TimingPalette>;

const theme = {
  spacingBasis: SPACING_BASIS,
  color: COLOR_PALETTE,
  spacing: SPACING_PALETTE,
  timing: TIMING_PALETTE,
  zIndex: Z_INDEX_PALETTE,
  font: FONT_PALETTE,
  _color: COMPONENT_COLOR_PALETTE,
  _spacing: COMPONENT_SPACING_PALETTE,
  _timing: COMPONENT_TIMING_PALETTE,
};

// type for entire theme
export type TTheme = typeof theme;

export default theme;
