import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../store/theme.context';

const Main = () => {
  const { theme, toggleTheme } = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Calculator</Text>
      <Text style={{ color: theme.colors.primary_display_text }}>
        Current Theme: {theme.id}
      </Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={{ color: theme.colors.primary_display_text }}>
          Toggle Theme
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
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
