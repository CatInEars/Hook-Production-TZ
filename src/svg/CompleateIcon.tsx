import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

export function CompleateIcon(props: SvgProps) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      {...props}
    >
      <Circle cx={14} cy={14} r={14} fill="#0EB44D" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 9.739l-7.95 8.636L7 12.584l.993-1.054 4.992 4.779 6.958-7.559L21 9.739z"
        fill="#fff"
      />
    </Svg>
  )
}
