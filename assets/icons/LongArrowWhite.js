import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LongArrowWhite = (props) => (
  <Svg
    width={14}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.354 4.354a.5.5 0 0 0 0-.708L10.172.464a.5.5 0 0 0-.708.708L12.293 4 9.464 6.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h13v-1H0v1Z"
      fill="#EFF2F5"
    />
  </Svg>
);

export default LongArrowWhite;
