import { Button } from "./styled";
import { useTheme } from "../../context/ThemeContext";
const ThemeButton = () => {
	const { theme, toNextTheme, themeNum } = useTheme();
	return (
		<>
			<Button $theme={theme} onClick={toNextTheme}></Button>
		</>
	);
};

export default ThemeButton;
