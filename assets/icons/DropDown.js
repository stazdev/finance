import * as React from "react";
import Svg, { Path } from "react-native-svg";

const DropDown = (props) => (
  <Svg
    width={8}
    height={5}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M.667.75 4 4.083 7.333.75" fill="#EFF2F5" />
    <Path
      d="M.667.75 4 4.083 7.333.75"
      stroke="#fff"
      strokeWidth={0.833}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default DropDown;
