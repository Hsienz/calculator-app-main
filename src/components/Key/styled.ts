import tw from 'tailwind-styled-components'
import { IButtonProp, ITheme } from './type'
import { KeyType } from './type'

const themes:ITheme[] = [
    {
        normal : "bg-Light_grayish_orange shadow-Graish_orange text-Very_dark_grayish_blue",
        function : "bg-Desaturated_dark_blue_key_bg shadow-Desaturated_dark_blue_key_shadow text-White",
        special: " bg-Red shadow-Dark_red text-White",
    },
    {
        normal : "bg-Dark_moderate_cyan shadow-Very_dark_cyan text-Very_dark_grayish_yellow",
        function: "bg-Dark_moderate_cyan shadow-Very_dark_cyan text-White",
        special: "bg-Orange shadow-Dark_orange text-White",
    },
    {
        normal : "bg-Very_dark_violet shadow-Dark_magenta text-Light_yellow",
        function: "bg-Dark_violet shadow-Vivid_magenta text-White",
        special: "bg-Pure_cyan shadow-Soft_cyan text-Very_dark_blue",
    },
]

export const Button = tw.button<IButtonProp>`
    h-16
    aspect-square
    lg:aspect-[2/1]
    w-full
    rounded-lg
    shadow-[0_8px_0_0]
    duration-500
    relative
    top-0
    hover:brightness-200
    active:shadow-none
    active:top-2
    active:duration-150
    ${ p => themes[p.$theme][p.$type] }
    ${ p => p.$colSpan == 2 ? "col-span-2" : "col-span-1" }
`