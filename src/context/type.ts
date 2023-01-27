import { ReactNode } from "react";

export interface IThemeContext {
    theme: number,
    toNextTheme: () => void,
    themeNum: number,
}

export interface IProviderProp {
    children: ReactNode,
}

export interface IDisplayContext {
    display: string,
    append: ( s: string ) => void,
    equal: () => void,
    reset: () => void,
    pop: () => void
}