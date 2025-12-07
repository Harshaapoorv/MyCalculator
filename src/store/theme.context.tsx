import React from 'react';
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
  const [theme, setTheme] = React.useState<Theme>(
    props.initialTheme || lightTheme,
  );

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
