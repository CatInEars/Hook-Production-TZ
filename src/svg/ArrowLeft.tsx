import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export function ArrowLeft(props: SvgProps) {
  return (
    <Svg
      width={22}
      height={20}
      viewBox="0 0 16 12"
      fill="none"
      {...props}
    >
      <Path
        d="M15 6H1M6 11L1 6l5-5"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}