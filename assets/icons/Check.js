import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Check = (props) => (
  <Svg
    width={16}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="m1.7 6 4.2 4.2 8.7-8.7" stroke="#fff" strokeWidth={3} />
  </Svg>
);

export default Check;
