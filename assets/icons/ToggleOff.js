import * as React from "react";
import Svg, { Rect, Circle } from "react-native-svg";

const ToggleOff = (props) => (
  <Svg
    width={29}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={5.22}
      y={1.16}
      width={23.78}
      height={9.28}
      rx={4.64}
      fill="#C4C4C4"
    />
    <Circle cx={5.8} cy={5.8} r={5.8} fill="#9DACC3" />
  </Svg>
);

export default ToggleOff;
