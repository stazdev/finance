import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LongArrowDark = (props) => (
  <Svg
    width={27}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M26.773 4.898a.562.562 0 0 0 0-.796l-3.58-3.58a.563.563 0 0 0-.796.796L25.58 4.5l-3.182 3.182a.563.563 0 0 0 .795.795l3.58-3.58ZM.5 5.063h25.875V3.938H.5v1.124Z"
      fill="#182338"
    />
  </Svg>
);

export default LongArrowDark;
