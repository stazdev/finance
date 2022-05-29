import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Camera = (props) => (
  <Svg
    width={32}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M21 13a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" fill="#fff" />
    <Path
      d="M4 4a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4h-2.344a4 4 0 0 1-2.828-1.172l-1.656-1.656A4 4 0 0 0 18.344 0h-4.688a4 4 0 0 0-2.828 1.172L9.172 2.828A4 4 0 0 1 6.344 4H4Zm1 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm18 5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      fill="#fff"
    />
  </Svg>
);

export default Camera;
