import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../store/theme.context';
import CalculatorScreen from './CalculatorScreen';

const Main = () => {
  const { theme, toggleTheme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Text style={styles.heading}>My Calculator</Text>
        <View
          style={{
            width: 48,
            height: 24,
            borderRadius: 12,
            marginTop: 20,
            backgroundColor: theme.colors.primary_display_text,
            alignSelf: 'flex-end',
            position: 'absolute',
            right: 16,
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity onPress={toggleTheme}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: theme.colors.background,
                margin: 2,
                alignSelf: theme.id === 'light' ? 'flex-start' : 'flex-end',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <CalculatorScreen />
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      gap: 48,
      padding: 16,
    },
    heading: {
      color: theme.colors.operator_button_background,
      fontFamily: theme.fonts.primary_bold,
      fontSize: 24,
      textAlign: 'center',
      marginTop: 20,
    },
  });

export default Main;
