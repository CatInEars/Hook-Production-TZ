import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"

export function Trash(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 38 38"
      fill="none"
      {...props}
    >
      <Rect width={38} height={38} rx={19} fill="#F4F3F3" />
      <Path
        d="M13.572 14.928H25.786M16.964 14.928v-1.357a1.357 1.357 0 011.358-1.357h2.714a1.357 1.357 0 011.357 1.357v1.357m2.036 0v9.5a1.357 1.357 0 01-1.357 1.357h-6.786a1.357 1.357 0 01-1.357-1.357v-9.5h9.5z"
        stroke="#333"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
