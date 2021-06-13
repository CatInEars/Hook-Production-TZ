import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export function TrashNBC(props: SvgProps) {
  return (
    <Svg
      width={17}
      height={22}
      viewBox="0 0 14 19"
      fill="none"
      {...props}
    >
      <Path
        d="M4 4.333V2.667c0-.442.168-.866.468-1.179C4.768 1.176 5.175 1 5.6 1h3.2c.424 0 .83.176 1.131.488.3.313.469.737.469 1.179v1.666m2.4 0V16c0 .442-.169.866-.469 1.178-.3.313-.707.489-1.131.489h-8c-.425 0-.832-.176-1.132-.489A1.702 1.702 0 011.6 16V4.333h11.2z"
        stroke="#333"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}