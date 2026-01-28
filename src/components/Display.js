import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../store/theme.context';

const Display = ({ displayValue }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </ScrollView>
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      height: '30%',
      justifyContent: 'center',
      alignItems: 'flex-end',
      verticalAlign: 'middle',
      textAlignVertical: 'center',
      padding: 16,
      backgroundColor: theme.colors.displayBackground,
      // borderBottomWidth: 1,
      // borderBottomColor: theme.colors.primary_display_text,
    },
    displayText: {
      fontSize: 48,
      color: theme.colors.primary_display_text,
      textAlign: 'right',
    },
  });

export default Display;
