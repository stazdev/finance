import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Naira = (props) => (
  <Svg
    width={31}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.45 27.071h-2.422c-.636 0-1.088-.244-1.357-.734l-3.69-6.145H8.828v5.742c0 .758-.379 1.137-1.137 1.137H3.618v-1.908l2.275-.256v-4.715H0v-1.879h5.893V9.86H0V7.98h5.893V2.487l-2.275-.293V.286h4.697c.587 0 1.04.244 1.357.734l4.172 6.96h8.67V1.423c0-.758.368-1.137 1.102-1.137h4.109v1.908l-2.275.293V7.98H31V9.86h-5.55v8.454H31v1.879h-5.55v6.88ZM8.828 18.313h8.025L11.778 9.86h-2.95v8.454Zm12.335 1.879 1.352 2.256v-2.256h-1.352Zm1.352-1.879h-2.478L14.97 9.86h7.545v8.454ZM8.828 4.946 10.65 7.98H8.828V4.946Z"
    />
  </Svg>
);

export default Naira;
