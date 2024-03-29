import React, { useContext } from "react";
import { ThemeContext } from "../../context-store/context";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../constants";

const Eye = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Svg
      width={20}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.125 7a3.125 3.125 0 1 1-6.25 0 3.125 3.125 0 0 1 6.25 0Z"
        fill={theme === "light" ? COLORS.dark : "#EFF2F5"}
      />
      <Path
        d="M0 7S3.75.125 10 .125 20 7 20 7s-3.75 6.875-10 6.875S0 7 0 7Zm10 4.375a4.375 4.375 0 1 0 0-8.75 4.375 4.375 0 0 0 0 8.75Z"
        fill={theme === "light" ? COLORS.dark : "#EFF2F5"}
      />
    </Svg>
  );
};

export default Eye;
