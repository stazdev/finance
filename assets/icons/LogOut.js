import React, { useContext } from "react";
import { ThemeContext } from "../../context-store/context";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../constants";

const LogOut = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Svg
      width={15}
      height={15}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.625 0v1.875h7.5v9.375h-7.5v1.875H15V0H5.625ZM3.75 3.75 0 6.563l3.75 2.812V7.5h7.5V5.625h-7.5V3.75Z"
        fill={theme === "light" ? COLORS.dark : "#EFF2F5"}
      />
    </Svg>
  );
};

export default LogOut;
