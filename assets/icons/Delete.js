import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Delete = (props) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0Zm3.707 8.707a1 1 0 0 0-1.414-1.414L11 9.586 8.707 7.293a1 1 0 1 0-1.414 1.414L9.586 11l-2.293 2.293a1 1 0 1 0 1.414 1.414L11 12.414l2.293 2.293a1 1 0 0 0 1.414-1.414L12.414 11l2.293-2.293Z"
      fill="#D31A1A"
    />
  </Svg>
);

export default Delete;
