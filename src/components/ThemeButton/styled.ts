import tw from "tailwind-styled-components";
import { IButtonProp } from "./type";

const themes = [
    "bg-Very_dark_desaturated_blue_toggle_keypad_bg before:bg-Red before:left-[20%]",
    "bg-Grayish_red before:bg-Orange before:left-1/2",
    "bg-Very_dark_violet_toggle_keypad_screen_bg before:bg-Pure_cyan before:left-[80%]"
]

export const Button = tw.button<IButtonProp>`
    h-8
    w-24
    rounded-full
    relative
    duration-500
    before:rounded-full
    before:h-6
    before:aspect-square
    before:absolute
    before:-translate-y-1/2
    before:-translate-x-1/2
    before:duration-500
    ${(p) => themes[p.$theme]}
`;
