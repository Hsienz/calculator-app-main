import { Wrapper } from "./styled";
import Key from "../Key/Key";
import { useDisplay } from "../../context/DisplayContext";
import { useTheme } from "../../context/ThemeContext";
const Keyboard = () => {
	const { append, reset, equal, pop } = useDisplay();
    const {theme} = useTheme()
	return (
		<Wrapper $theme={theme}>
				<Key
					content="7"
					type="normal"
					pressKey="7"
					onClick={() => append("7")}
                    colSpan={1}
				/>
				<Key
					content="8"
					type="normal"
					pressKey="8"
					onClick={() => append("8")}
                    colSpan={1}
				/>
				<Key
					content="9"
					type="normal"
					pressKey="9"
					onClick={() => append("9")}
                    colSpan={1}
				/>
				<Key
					content="DEL"
					type="function"
					pressKey="Backspace"
					onClick={() => pop() }
                    colSpan={1}
				/>
				<Key
					content="4"
					type="normal"
					pressKey="4"
					onClick={() => append("4")}
                    colSpan={1}
				/>
				<Key
					content="5"
					type="normal"
					pressKey="5"
					onClick={() => append("5")}
                    colSpan={1}
				/>
				<Key
					content="6"
					type="normal"
					pressKey="6"
					onClick={() => append("6")}
                    colSpan={1}
				/>
				<Key
					content="+"
					type="normal"
					pressKey="+"
					onClick={() => append("+")}
                    colSpan={1}
				/>
				<Key
					content="1"
					type="normal"
					pressKey="1"
					onClick={() => append("1")}
                    colSpan={1}
				/>
				<Key
					content="2"
					type="normal"
					pressKey="2"
					onClick={() => append("2")}
                    colSpan={1}
				/>
				<Key
					content="3"
					type="normal"
					pressKey="3"
					onClick={() => append("3")}
                    colSpan={1}
				/>
				<Key
					content="-"
					type="normal"
					pressKey="-"
					onClick={() => append("-")}
                    colSpan={1}
				/>
				<Key
					content="."
					type="normal"
					pressKey="."
					onClick={() => append(".")}
                    colSpan={1}
				/>
				<Key
					content="0"
					type="normal"
					pressKey="0"
					onClick={() => append("0")}
                    colSpan={1}
				/>
				<Key
					content="/"
					type="normal"
					pressKey="/"
					onClick={() => append("/")}
                    colSpan={1}
				/>
				<Key
					content="x"
					type="normal"
					pressKey="*"
					onClick={() => append("*")}
                    colSpan={1}
				/>
				<Key
					content="RESET"
					type="function"
					pressKey="Escape"
					onClick={() => reset()}
                    colSpan={2}
				/>
				<Key
					content="="
					type="special"
					pressKey="Enter"
					onClick={() => equal()}
                    colSpan={2}
				/>
		</Wrapper>
	);
};

export default Keyboard;
