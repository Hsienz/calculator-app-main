import { createContext, useContext, useState } from "react";
import { IDisplayContext, IProviderProp } from "./type";

const DisplayContext = createContext<IDisplayContext>({
    display: "",
    append: ( s: string ) => {},
    reset: () => {},
    equal: () => {},
    pop: () => {}
})

const DisplayProvider = ( props: IProviderProp ) => {
    const [display, setDisplay] = useState("")
    const [error, setError] = useState(false)
    const append = ( s: string ) => {
        if( error ) reset()
        setDisplay( display=> display+s )
    }
    const equal = () => {
        setDisplay(display => {
            try {
                return eval(display).toString() 
            }
            catch {
                setError( error => true )
                return "error"
            }
        })
    }
    const reset = () => {
        setError( error => false )
        setDisplay(display=>"")
    }
    const pop = () => {
        if( error ) reset()
        setDisplay( display => display.slice(0,-1) )
    }
    return (
        <DisplayContext.Provider value={{
            display,
            append,
            equal,
            reset,
            pop
        }}>
            {props.children}
        </DisplayContext.Provider>
    )
}

export const useDisplay = () => useContext(DisplayContext)
export default DisplayProvider