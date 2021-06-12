import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

export function Water(props: SvgProps) {
  return (
    <Svg
      width={35}
      height={35}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Circle cx={12} cy={12} r={12} fill="#EBEBEB" />
      <Path
        d="M7.15 8.296l.35.357L11.54 4.7l4.037 3.953a5.485 5.485 0 010 7.877c-2.228 2.182-5.846 2.182-8.075 0a5.485 5.485 0 010-7.877l-.35-.357z"
        stroke="#333"
      />
    </Svg>
  )
}
