import {ReactElement} from "react";

export type TextType = {
  children: ReactElement | string;
  renderAs?: TextRenderType
  className?: string;
  size: TextSizeType
  font: TextFontType
}

export type TextFontType = 'int' | 'neue'
export type TextSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type TextRenderType = 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'p'
