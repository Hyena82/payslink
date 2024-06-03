import { HTMLAttributes } from "react";
import {
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  GridProps as _GridProps,
  BoxShadowProps,
} from "styled-system";

export interface BoxProps
  extends BackgroundProps,
  BorderProps,
  BoxShadowProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  HTMLAttributes<HTMLDivElement> { }

export interface FlexProps extends BoxProps, FlexboxProps { }

export interface GridProps extends FlexProps, _GridProps { }
