import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Cable = (props) => (
  <Svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M48 16h-9.573l6.133-6.107a2.677 2.677 0 1 0-3.787-3.786L32 14.907l-8.773-8.8a2.678 2.678 0 0 0-3.787 3.786L25.573 16H16a8 8 0 0 0-8 8v26.666a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V24a8 8 0 0 0-8-8Zm2.667 34.666A2.667 2.667 0 0 1 48 53.334H16a2.667 2.667 0 0 1-2.667-2.666V32A2.667 2.667 0 0 1 16 29.333h32A2.667 2.667 0 0 1 50.667 32v18.666Z"
      fill="#EFF2F5"
    />
  </Svg>
);

export default Cable;
