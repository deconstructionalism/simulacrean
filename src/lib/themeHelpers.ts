import theme from "../config/theme";
import { Spacing } from "../config/theme.d"

/**
 * Converts a spacing value from rem to number of px.
 * @param spacing - a spacing value to convert.
 * @returns - the spacing value in number of px.
 */
const spacingToPx = (spacing: Spacing): number => {
  const spacingRem = parseFloat(spacing.replace("rem", ""));
  return spacingRem * parseFloat(theme.spacingBasis.replace("px", ""));
}

export {
  spacingToPx
}