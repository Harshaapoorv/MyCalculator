import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Main from './src/screens/Main';
import { ThemeProvider, useTheme } from './src/store/theme.context';

function App() {
  const theme = useTheme();
  const styles = getStyles(theme.theme);

  return (
    <ThemeProvider initialTheme={theme.theme}>
      <SafeAreaProvider>
        <SafeAreaView
          style={[
            styles.container,
            { backgroundColor: theme.theme.colors.background },
          ]}
          edges={['top', 'bottom']}
        >
          <Main />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });

export default App;
