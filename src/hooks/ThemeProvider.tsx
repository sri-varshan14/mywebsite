"use client"
import React from "react";
import { createContext, ReactElement, useState } from "react";

const ThemeContext = createContext({
    theme: "rosepine-dawn",
    toggleThemeHandler: () => { },
});


export function ThemeProvider({ children }: { children: React.ReactNode }): ReactElement {
    const [theme, setTheme] = useState("rosepine-dawn");

    function toggleThemeHandler(): void {
        if (theme == "rosepine") setTheme('rosepine-dawn')
        else setTheme("rosepine")
    }

    return (
        <div data-theme={theme}>
            <ThemeContext.Provider value={{ theme: theme, toggleThemeHandler }}>
                {children}
            </ThemeContext.Provider>
        </div>
    );
}

export default ThemeContext;
