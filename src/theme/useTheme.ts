import { useContext } from "react";
import { LOCAL_STOEAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"

interface UseThemeResult {
    toggleTheme: () => void,
    theme: Theme,
}

export const useTheme = (): UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STOEAGE_THEME_KEY, newTheme)
    };

    return {
        theme,
        toggleTheme,
    }
}