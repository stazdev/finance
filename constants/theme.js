import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  white: "#ffffff",
  dark: "#040D1D",
  primary: "#cd3c67",
  primary_light: "#EF4C7C",
  primary_dark: "#992D4D",
  primary_darker: "#661E33",

  secondary: "#223351",
  secondary_light: "#385385",
  secondary_dark: "#182338",
  modal: "#22304d",

  greyLight: "#EFF2F5",
  greyMedium: "#9dacc3",
  greyDark: "#091A36",

  main: "#0A2551",
  business: "#6796EA",
  savings: "#b320d0",
  expense: "#934D54",
  investment: "#42C968",
  investment2: "#1d13ba",
  emergency: "#992d4d",

  linear: `linear-gradient(to bottom right, ${"#cd3c67"} ,  ${"#223351"})`,
  linear2: `radial-gradient(circle, rgba(34,22,172,1) 0%, rgba(19,13,82,1) 100%)`,
};

export const SIZES = {
  // global sizes
  base: RFValue(8),
  font: RFValue(15),
  radius: RFValue(15),
  padding: RFValue(10),
  padding2: RFValue(12),

  //FONT sizes

  h0Bold: RFValue(48.8),
  h1Bold: RFValue(39.1),
  h2Bold: RFValue(31.3),
  h3Bold: RFValue(25),
  h4Bold: RFValue(20),

  body1bold: RFValue(16),
  body2bold: RFValue(12.8),

  h0Regular: RFValue(48.8),
  h1Regular: RFValue(39.1),
  h2Regular: RFValue(31.3),
  h3Regular: RFValue(25),
  h4Regular: RFValue(20),

  body1Regular: RFValue(16),
  body2Regular: RFValue(12.8),

  //dimension
  width,
  height,
};

export const FONTS = {
  h0Bold: {
    fontFamily: "CrimsonPro-Regular",
    fontSize: SIZES.h0Bold,
    lineHeight: 54,
  },
  h1Bold: {
    fontFamily: "CrimsonPro-Regular",
    fontSize: SIZES.h1Bold,
    lineHeight: 43,
  },
  h2Bold: {
    fontFamily: "CrimsonPro-Regular",
    fontSize: SIZES.h2Bold,
    lineHeight: 35,
  },
  h3Bold: {
    fontFamily: "CrimsonPro-Regular",
    fontSize: SIZES.h3Bold,
    lineHeight: 28,
  },
  h4Bold: {
    fontFamily: "CrimsonPro-Regular",
    fontSize: SIZES.h4Bold,
    lineHeight: 22,
  },

  body1bold: {
    fontFamily: "CrimsonPro-Regular",
    fontSize: SIZES.body1bold,
    lineHeight: 18,
  },
  body2bold: {
    fontFamily: "CrimsonPro-Regular",
    fontSize: SIZES.body2bold,
    lineHeight: 14,
  },

  //fauna

  fh0: {
    fontFamily: "FaunaOne-Regular",
    fontSize: SIZES.h0Regular,
    lineHeight: 60,
  },
  fh1: {
    fontFamily: "FaunaOne-Regular",
    fontSize: SIZES.h1Regular,
    lineHeight: 48,
  },
  fh2: {
    fontFamily: "FaunaOne-Regular",
    fontSize: SIZES.h2Regular,
    lineHeight: 38,
  },
  fh3: {
    fontFamily: "FaunaOne-Regular",
    fontSize: SIZES.h3Regular,
    lineHeight: 31,
  },
  fh4: {
    fontFamily: "FaunaOne-Regular",
    fontSize: SIZES.h4Regular,
    lineHeight: 25,
  },
  fbody1: {
    fontFamily: "FaunaOne-Regular",
    fontSize: SIZES.body1Regular,
    lineHeight: 20,
  },
  fbody2: {
    fontFamily: "FaunaOne-Regular",
    fontSize: SIZES.body2Regular,
    lineHeight: 16,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
