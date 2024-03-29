import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LongArrowRight = (props) => (
  <Svg
    width={17}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.354 4.354a.5.5 0 0 0 0-.708L13.172.464a.5.5 0 1 0-.708.708L15.293 4l-2.829 2.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h16v-1H0v1Z"
      fill="#CD3C67"
    />
  </Svg>
);

export default LongArrowRight;
