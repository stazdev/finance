import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowThick = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m21 12-7-9v4.99L3 8v8h11v5l7-9Z"
      stroke="#EFF2F5"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowThick;
