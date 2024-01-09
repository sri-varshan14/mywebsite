"use client"
import React from "react";
import { createContext, ReactElement, useState } from "react";

const ThemeContext = createContext({
    theme: "white",
    toggleThemeHandler: () => { },
});


export function ThemeProvider({ children }: { children: React.ReactNode }): ReactElement {
    const [theme, setTheme] = useState("dark");

    function toggleThemeHandler(): void {
        if (theme == "white") setTheme('dark')
        else setTheme("white")
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
