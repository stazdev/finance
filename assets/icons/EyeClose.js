import * as React from "react";
import Svg, { Path } from "react-native-svg";

const EyeClose = (props) => (
  <Svg
    width={20}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m13.488 14.14-2.018-2.019A4.375 4.375 0 0 1 5.877 6.53L3.304 3.954C1.173 5.847 0 8 0 8s3.75 6.875 10 6.875a8.787 8.787 0 0 0 3.488-.735ZM6.513 1.86c1.1-.48 2.286-.73 3.487-.735C16.25 1.125 20 8 20 8s-1.174 2.151-3.301 4.047L14.12 9.47A4.375 4.375 0 0 0 8.53 3.877L6.513 1.861V1.86Z"
      fill="#EFF2F5"
    />
    <Path
      d="M6.906 7.558a3.125 3.125 0 0 0 3.537 3.536L6.905 7.558h.001Zm6.188.885L9.557 4.905a3.125 3.125 0 0 1 3.537 3.536v.002Zm3.964 7.5-15-15 .885-.885 15 15-.886.885Z"
      fill="#EFF2F5"
    />
  </Svg>
);

export default EyeClose;
