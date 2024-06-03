// TYPES

// primitive palette value types
export type Color = `#${string}`;
export type Spacing = `${number}rem`;
export type SpacingBasis = `${number}px`;
export type Timing = `${number}s`;
export type FontFamily =
  | `${string}, sans-serif`
  | `${string}, serif`
  | `${string}, monospace`;

// palette types
export type ColorPalette<T extends string = string> = Record<T, Color>;
export type SpacingPalette<T extends string = string> = Record<T, Spacing>;
export type TimingPalette<T extends string = string> = Record<T, Timing>;
export type ZIndexPalette<T extends string = string> = Record<T, number>;

// custom palette types organized by component name
type PaletteTypes =
  | ColorPalette
  | SpacingPalette
  | TimingPalette
  | ZIndexPalette;
export type ComponentPalettes<T extends PaletteTypes> = Record<string, T>;

// keys required for each basic palette
export type BasicTimings =
  | "extraSlow"
  | "slow"
  | "medium"
  | "fast"
  | "extraFast";
export type BasicSpacings =
  | "xxxs"
  | "xxs"
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl"
  | "xxl"
  | "xxxl";
export type BasicColors =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";
