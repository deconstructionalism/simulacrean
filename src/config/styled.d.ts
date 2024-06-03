import "styled-components";

import { TTheme } from "./theme";

// extend the styled-components DefaultTheme with our custom theme
declare module "styled-components" {
  export interface DefaultTheme extends TTheme {}
}
