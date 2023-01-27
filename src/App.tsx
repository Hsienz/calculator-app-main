import Calculator from "./components/Calculator/Calculator";
import { useTheme } from "./context/ThemeContext";
import { Wrapper } from "./styled";
function App() {
	const { theme } = useTheme();
	return (
		<Wrapper $theme={theme}>
			<Calculator />
		</Wrapper>
	);
}

export default App;
