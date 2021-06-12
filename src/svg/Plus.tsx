import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"

export function Plus(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 39 38"
      fill="none"
      {...props}
    >
      <Rect x={0.354} width={38} height={38} rx={19} fill="#FFB000" />
      <Path
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.947 18.738l13 .081M19.671 12.583v13"
      />
    </Svg>
  )
}
