import * as React from "react"
import Svg, { SvgProps, G, Circle, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export function LighterCart(props: SvgProps) {
  return (
    <Svg
      width={70}
      height={70}
      viewBox="0 0 44 44"
      fill="none"
      {...props}
    >
      <G>
        <Circle cx={22} cy={20} r={12} fill="#FFB000" />
      </G>
      <Path
        d="M22.382 13.636l-6.11 7.636h5.5l-.612 5.091 6.11-7.636H21.77l.611-5.091z"
        fill="#fff"
      />
      <Defs></Defs>
    </Svg>
  )
}
