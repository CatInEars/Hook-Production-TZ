import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export function Pointer(props: SvgProps) {
  return (
    <Svg
      width={13}
      height={10}
      viewBox="0 0 10 6"
      fill="none"
      {...props}
    >
      <Path
        d="M9 5L5 1 1 5"
        stroke="#FFB000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
