import { FC, useMemo, useState } from 'react';
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from './ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const themeValue = useMemo(() => {
        return {
            theme: theme,
            setTheme: setTheme,
        };
    }, [theme]);

    return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
