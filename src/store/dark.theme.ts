import { colors } from './colors';
import { ColorTheme, SpacingTheme, FontTheme, Theme } from './theme.interface';

const darkColorTheme: ColorTheme = {
  background: colors.darkBackground,
  primary_display_text: colors.darkText,
  secondary_display_text: '#555555',
  operand_button_background: '#E0E0E0',
  operand_button_text: colors.darkText,
  operator_button_background: colors.primary,
  operator_button_text: colors.lightText,
  special_button_background: colors.secondary,
  special_button_text: colors.darkText,
};

const darkSpacingTheme: SpacingTheme = {
  space_small: 8,
  space_medium: 16,
  space_large: 24,
};

const darkFontTheme: FontTheme = {
  primary: 'System',
  primary_bold: 'System-Bold',
  secondary: 'System',
  secondary_SemiBold: 'System-SemiBold',
};

export const darkTheme: Theme = {
  id: 'dark',
  colors: darkColorTheme,
  spacing: darkSpacingTheme,
  fonts: darkFontTheme,
};
