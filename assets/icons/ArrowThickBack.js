import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowThickBack = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m3 12 7-9v4.99L21 8v8H10v5l-7-9Z"
      stroke="#EFF2F5"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowThickBack;
