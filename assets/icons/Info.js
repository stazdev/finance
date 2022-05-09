import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Info = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Zm-.5 5a1 1 0 1 0 0 2h.5a1 1 0 1 0 0-2h-.5ZM10 10a1 1 0 0 0 0 2h1v3h-1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
      fill="#CD3C67"
    />
  </Svg>
);

export default Info;
