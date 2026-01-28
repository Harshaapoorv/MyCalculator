import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../store/theme.context';
import Display from '../components/Display';
import Keypad from '../components/Keypad';
import useCalculator from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const calculator = useCalculator();

  return (
    <View style={styles.container}>
      <Display displayValue={calculator.displayValue} />
      <Keypad
        onDigit={calculator.handleDigit}
        onOperator={calculator.handleOperator}
        onClear={calculator.handleClear}
        onBackspace={calculator.handleBackspace}
      />
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });

export default CalculatorScreen;
