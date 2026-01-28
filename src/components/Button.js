import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../store/theme.context';
import { LocalSvg } from 'react-native-svg/css';

const Button = ({ label, type, span = 1, onPress, style, icon }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme, span);
  const asset = require('../icons/delete.svg');

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        styles[type],
        style,
        theme.id === 'dark' && {
          shadowColor: '#fff',
        },
      ]}
    >
      {icon ? (
        <LocalSvg
          width={32}
          height={32}
          asset={asset}
          fill={theme.id === 'light' && '#FFFFFF'}
        />
      ) : (
        <Text style={[styles.buttonText, styles[type + 'Text']]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

const getStyles = (theme, span) =>
  StyleSheet.create({
    button: {
      width: span * 80,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ccc',
      borderRadius: 40,
      padding: 16,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5,
      shadowColor: '#000',
      // margin: 4,
    },
    buttonText: {
      color: theme.colors.button_text,
      fontSize: 18,
    },
    operand: {
      backgroundColor: theme.colors.operand_button_background,
    },
    operandText: {
      color: theme.colors.operand_button_text,
    },
    operator: {
      backgroundColor: theme.colors.operator_button_background,
    },
    operatorText: {
      color: theme.colors.operator_button_text,
      fontSize: 32,
    },
    specialOperator: {
      backgroundColor: theme.colors.special_button_background,
    },
    specialOperatorText: {
      color: theme.colors.special_button_text,
      fontSize: 32,
    },
  });

export default Button;
