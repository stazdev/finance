import * as React from "react";
import Svg, { Path } from "react-native-svg";

const FeedsIcon = (props) => (
  <Svg
    width={21}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 0H0v5h21V0ZM9 7H0v5h9V7Zm-9 7h9v9H0v-9Zm15 0h-4v9h4v-9Zm2 0h4v9h-4v-9Zm4-7H11v5h10V7Z"
      fill="#A2A2A2"
    />
  </Svg>
);

export default FeedsIcon;
