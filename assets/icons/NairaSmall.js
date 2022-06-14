import * as React from "react";
import Svg, { Path } from "react-native-svg";

const NairaSmall = (props) => (
  <Svg
    width={16}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.136 13.825h-1.25c-.329 0-.562-.126-.701-.379l-2.156-3.59H4.557v3.382c0 .391-.196.587-.588.587H1.867v-.985l1.174-.133V9.855H0v-.97h3.041V4.522H0v-.97h3.041V1.136L1.867.985V0h2.424c.303 0 .537.126.701.379l1.902 3.173h4.726V.587c0-.391.19-.587.569-.587h2.12v.985l-1.173.151v2.416H16v.97h-2.864v4.363H16v.97h-2.864v3.97Zm-8.58-4.94h3.89L5.828 4.522h-1.27v4.363Zm6.115.97.95 1.584V9.855h-.95Zm.95-.97h-1.53L7.474 4.522h4.145v4.363Zm-7.064-6.48.688 1.147h-.688V2.405Z"
    />
  </Svg>
);

export default NairaSmall;
