import tw from 'tailwind-styled-components'
import { IWrapperProp } from '../../type'

export const themes = [
    "text-White",
    "text-Very_dark_grayish_yellow",
    "text-Light_yellow"
]

export const Wrapper = tw.div<IWrapperProp>`
    duration-500
    ${p => themes[p.$theme]}
`

export const FlexRowWrapper = tw.div`
    flex
    justify-between
    items-center
`

export const FlexColWrapper = tw.div`
    flex
    flex-col
    justify-between
`