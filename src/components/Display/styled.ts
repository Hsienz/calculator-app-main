import tw from 'tailwind-styled-components'
import { IWrapperProp } from '../../type'

const themes = [
    "bg-Very_dark_desaturated_blue_screen_bg text-White",
    "bg-Very_light_gray text-Very_dark_grayish_yellow",
    "bg-Very_dark_violet_toggle_keypad_screen_bg text-Light_yellow"
]

export const Wrapper = tw.div<IWrapperProp>`
    h-24
    rounded-2xl
    text-right
    text-[64px]
    px-4
    overflow-hidden
    duration-500
    ${p => themes[p.$theme]}
`