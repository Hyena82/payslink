import styled from "styled-components";
import { background, border, boxShadow, layout, position, space } from "styled-system";
import { BoxProps } from "./types";

const Box = styled.div<BoxProps>`
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
  ${boxShadow}
`;

export default Box;
