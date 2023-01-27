import { useDisplay } from "../../context/DisplayContext"
import { useTheme } from "../../context/ThemeContext"
import { Wrapper } from "./styled"
const Display = () => {
    const {display} = useDisplay()
    const {theme} = useTheme()
    return (
        <Wrapper $theme={theme}>
            {display}
        </Wrapper>
    )
}
export default Display