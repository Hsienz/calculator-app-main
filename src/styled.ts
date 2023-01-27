import tw from "tailwind-styled-components";
import { IWrapperProp } from "./type";

const themes = [
	"bg-Very_dark_desaturated_blue_main_bg",
	"bg-Light_gray",
	"bg-Very_dark_violet_main_bg",
];

export const Wrapper = tw.div<IWrapperProp>`
    flex
    flex-col
    justify-center
    items-center
    min-h-screen
    duration-500
    font-bold
    font-sans
    text-[32px]
    ${p => themes[p.$theme]}
`;
