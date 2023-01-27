import tw from 'tailwind-styled-components'
import { IWrapperProp } from './type'

const themes = [
    "bg-Very_dark_desaturated_blue_toggle_keypad_bg",
    "bg-Grayish_red",
    "bg-Very_dark_violet_toggle_keypad_screen_bg"
]

export const Wrapper = tw.div<IWrapperProp>`
    grid
    grid-cols-4
    grid-rows-5
    gap-4
    p-8
    rounded-2xl
    duration-500
    ${p => themes[p.$theme]}
`