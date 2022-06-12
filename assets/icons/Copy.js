import React, { useContext } from "react";
import { ThemeContext } from "../../context-store/context";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../constants";

const Copy = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Svg
      width={14}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 14v1.25a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1-.75-.75V3.75A.75.75 0 0 1 .75 3H3v9.25c0 .965.785 1.75 1.75 1.75H10Zm0-10.75V0H4.75A.75.75 0 0 0 4 .75v11.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75V4h-3.25a.752.752 0 0 1-.75-.75Zm3.78-.97L11.72.22a.75.75 0 0 0-.53-.22H11v3h3v-.19a.75.75 0 0 0-.22-.53Z"
        fill={theme === "light" ? COLORS.dark : "#EFF2F5"}
      />
    </Svg>
  );
};

export default Copy;
