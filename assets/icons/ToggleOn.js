import * as React from "react";
import Svg, { Rect, Circle } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={29}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect y={1.16} width={23.78} height={9.28} rx={4.64} fill="#CD3C67" />
    <Circle cx={23.2} cy={5.8} r={5.8} fill="#EF4C7C" />
  </Svg>
);

export default SvgComponent;
