export interface ColorTheme {
  background: string;
  primary_display_text: string;
  secondary_display_text: string;
  operand_button_background: string;
  operand_button_text: string;
  operator_button_background: string;
  operator_button_text: string;
  special_button_background: string;
  special_button_text: string;
}

export interface SpacingTheme {
  space_small: number;
  space_medium: number;
  space_large: number;
}

export interface FontTheme {
  primary: string;
  primary_bold: string;
  secondary: string;
  secondary_SemiBold: string;
}

export interface Theme {
  id: string;
  colors: ColorTheme;
  spacing: SpacingTheme;
  fonts: FontTheme;
}
