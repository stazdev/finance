import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ChevronLeft = (props) => (
  <Svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m22 5.5-11 11 11 11"
      stroke="#EFF2F5"
      strokeWidth={2.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ChevronLeft;
