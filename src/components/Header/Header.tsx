import { useTheme } from "../../context/ThemeContext";
import ThemeButton from "../ThemeButton/ThemeButton";
import { FlexRowWrapper, FlexColWrapper, Wrapper } from "./styled";

const Header = () => {
    const {theme} = useTheme()
	return (
		<Wrapper $theme={theme}>
			<FlexRowWrapper>
				<p className="text-[48px]">calc</p>
				<p className="self-end text-lg h-8 ml-auto mr-6">THEME</p>
				<FlexColWrapper>
					<FlexRowWrapper className="px-3">
						<span className="text-lg">1</span>
						<span className="text-lg">2</span>
						<span className="text-lg">3</span>
					</FlexRowWrapper>
					<ThemeButton />
				</FlexColWrapper>
			</FlexRowWrapper>
		</Wrapper>
	);
};

export default Header;
