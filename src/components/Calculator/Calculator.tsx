import Display from "../Display/Display";
import Header from "../Header/Header";
import Keyboard from "../Keyboard/Keyboard";
import { Wrapper } from "./styled";
const Calculator = () => {
	return (
		<Wrapper>
			<Header />
            <Display />
            <Keyboard />
		</Wrapper>
	);
};

export default Calculator;
