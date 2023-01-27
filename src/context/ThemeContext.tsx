import { createContext, useContext, useState } from "react"
import { IThemeContext, IProviderProp } from "./type"

const ThemeContext = createContext<IThemeContext>({
    theme: 0,
    toNextTheme: () => {},
    themeNum: 0,
})

const ThemeProvider = (props:IProviderProp) => {
    const themeNum = 3
    const [theme, setTheme] = useState(0)
    const rotateTheme = (offset:number) => {
        setTheme( theme => ( theme + offset + themeNum ) % themeNum )
    }
    const toNextTheme = () => {
        rotateTheme(1)
    }
    return (
        <ThemeContext.Provider value={{
            theme,
            toNextTheme,
            themeNum,
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => useContext(ThemeContext)
export default ThemeProvider