import React, { useContext } from "react";
import { ThemeContext } from "../../context-store/context";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../constants";

const Notification = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 22a2.02 2.02 0 0 1-2.01-2h4a2.02 2.02 0 0 1-.15.78 2.042 2.042 0 0 1-1.44 1.18h-.047A1.922 1.922 0 0 1 12 22Zm8-3H4v-2l2-1v-5.5a8.065 8.065 0 0 1 .924-4.06A4.654 4.654 0 0 1 10 4.18V2h4v2.18c2.579.614 4 2.858 4 6.32V16l2 1v2Z"
        fill={theme === "light" ? COLORS.dark : "#EFF2F5"}
      />
    </Svg>
  );
};

export default Notification;
