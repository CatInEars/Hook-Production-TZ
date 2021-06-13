import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export function PointerLight(props: SvgProps) {
  return (
    <Svg
      width={8}
      height={14}
      viewBox="0 0 8 14"
      fill="none"
      {...props}
    >
      <Path
        d="M1 13l6-6-6-6"
        stroke="#333"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
