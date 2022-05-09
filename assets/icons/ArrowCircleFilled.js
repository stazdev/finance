import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowCircleFilled = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM4.5 7.5a.5.5 0 1 0 0 1h5.793l-2.147 2.146a.501.501 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L10.293 7.5H4.5Z"
      fill="#EFF2F5"
    />
  </Svg>
);

export default ArrowCircleFilled;
