import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../store/theme.context';

const Button = ({ label, type, span = 1, onPress, style }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme, span);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, styles[type], style]}
    >
      <Text style={[styles.buttonText, styles[type + 'Text']]}>{label}</Text>
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
      margin: 4,
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
