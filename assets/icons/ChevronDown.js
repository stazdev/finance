import React, { useContext } from "react";
import { ThemeContext } from "../../context-store/context";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../constants";

const ChevronDown = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Svg
      width={21}
      height={13}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="m1.5 2 9 9 9-9"
        stroke={theme === "light" ? COLORS.dark : "#EFF2F5"}
        strokeWidth={2.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ChevronDown;
