import { useEffect } from "react"
import { useTheme } from "../../context/ThemeContext"
import { Button } from "./styled"
import { IKeyProp } from "./type"
const Key = ( props: IKeyProp ) => {
    const {theme} = useTheme()
    useEffect(()=>{
        const temp = (e : KeyboardEvent) =>{
            if(e.key == props.pressKey)
                props.onClick()
        }
        document.addEventListener('keydown', temp )
        return ()=>document.removeEventListener('keydown', temp )
    },[])
    return (
        <Button $theme={theme} $type={props.type} onClick={props.onClick} $colSpan={props.colSpan}>
            {props.content}
        </Button>
    )
}

export default Key