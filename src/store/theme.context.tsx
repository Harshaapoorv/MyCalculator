import React from 'react';
import { useColorScheme } from 'react-native';
import { lightTheme } from './light.theme';
import { darkTheme } from './dark.theme';
import { Theme } from './theme.interface';

interface ProvidedValue {
  theme: Theme;
  toggleTheme: () => void;
}

const Context = React.createContext<ProvidedValue>({
  theme: lightTheme,
  toggleTheme: () => {},
});

interface Props {
  initialTheme?: Theme;
  children?: React.ReactNode;
}

export const ThemeProvider = React.memo<Props>(props => {
  const isSystemDark = useColorScheme() === 'dark';

  const [theme, setTheme] = React.useState<Theme>(
    isSystemDark ? darkTheme : lightTheme,
  );

  React.useEffect(() => {
    setTheme(isSystemDark ? darkTheme : lightTheme);
  }, [isSystemDark]);

  const toggleTheme = React.useCallback(() => {
    setTheme(prevTheme => (prevTheme.id === 'light' ? darkTheme : lightTheme));
  }, []);

  const MemoizedValue = React.useMemo(() => {
    const value: ProvidedValue = {
      theme,
      toggleTheme: toggleTheme,
    };
    return value;
  }, [theme, toggleTheme]);

  return (
    <Context.Provider value={MemoizedValue}>{props.children}</Context.Provider>
  );
});

export const useTheme = () => React.useContext(Context);
