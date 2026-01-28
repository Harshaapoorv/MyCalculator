import { colors } from './colors';
import { ColorTheme, SpacingTheme, FontTheme, Theme } from './theme.interface';

const lightColorTheme: ColorTheme = {
  background: colors.lightBackground,
  displayBackground: colors.lightDisplayBackground,
  keypadBackground: colors.lightBackground,
  primary_display_text: colors.secondary,
  secondary_display_text: '#555555',
  operand_button_background: '#000000',
  operand_button_text: colors.darkText,
  operator_button_background: colors.primary,
  operator_button_text: colors.darkText,
  special_button_background: colors.secondary,
  special_button_text: colors.darkText,
};

const lightSpacingTheme: SpacingTheme = {
  space_small: 8,
  space_medium: 16,
  space_large: 24,
};

const lightFontTheme: FontTheme = {
  primary: 'System',
  primary_bold: 'System-Bold',
  secondary: 'System',
  secondary_SemiBold: 'System-SemiBold',
};

export const lightTheme: Theme = {
  id: 'light',
  colors: lightColorTheme,
  spacing: lightSpacingTheme,
  fonts: lightFontTheme,
};
