import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const MoneyBill = (props) => (
  <Svg
    width={34}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M18.7 15.3h-.85v-4.675a.425.425 0 0 0-.425-.425h-.721c-.252 0-.498.075-.708.215l-.814.542a.422.422 0 0 0-.181.436c.01.055.032.107.063.154l.472.707a.426.426 0 0 0 .589.118l.025-.017V15.3h-.85a.425.425 0 0 0-.425.425v.85c0 .235.19.425.425.425h3.4c.235 0 .425-.19.425-.425v-.85a.425.425 0 0 0-.425-.425ZM32.3 3.4H1.7A1.7 1.7 0 0 0 0 5.1v17a1.7 1.7 0 0 0 1.7 1.7h30.6a1.7 1.7 0 0 0 1.7-1.7v-17a1.7 1.7 0 0 0-1.7-1.7ZM2.55 21.25v-3.4a3.4 3.4 0 0 1 3.4 3.4h-3.4Zm0-11.9v-3.4h3.4a3.4 3.4 0 0 1-3.4 3.4ZM17 19.55c-2.817 0-5.1-2.664-5.1-5.95s2.283-5.95 5.1-5.95c2.817 0 5.1 2.664 5.1 5.95 0 3.287-2.284 5.95-5.1 5.95Zm14.45 1.7h-3.4a3.4 3.4 0 0 1 3.4-3.4v3.4Zm0-11.9a3.4 3.4 0 0 1-3.4-3.4h3.4v3.4Z"
        fill="#EFF2F5"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h34v27.2H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MoneyBill;
