import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export function HeartActiveIcon(props: SvgProps) {
  return (
    <Svg
      width='100%'
      height='100%'
      viewBox="0 0 16 14"
      fill="none"
      {...props}
    >
      <Path
        d="M14.766 1.238A4.21 4.21 0 0011.79 0 4.198 4.198 0 008.81 1.238L8 2.052l-.812-.814a4.204 4.204 0 00-5.955 0 4.231 4.231 0 000 5.974l.812.814L8 14l5.955-5.974.811-.814A4.225 4.225 0 0016 4.225a4.237 4.237 0 00-1.234-2.987z"
        fill="#333"
      />
    </Svg>
  )
}
