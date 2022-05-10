import { View, Text, TextInput } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
import { Button } from "../../../components";

const VerificationCard = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          backgroundColor: COLORS.white,
          paddingBottom: SIZES.padding2,
          borderRadius: SIZES.radius * 1.5,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            backgroundColor: "#9dacc3",
            padding: SIZES.padding,
            ...FONTS.fbody2,
            borderTopRightRadius: SIZES.radius * 1.5,
            borderTopLeftRadius: SIZES.radius * 1.5,
          }}
        >
          Verification Code
        </Text>

        <View
          style={{
            paddingHorizontal: SIZES.padding2 * 2,
          }}
        >
          <TextInput
            style={{
              flex: 1,
              borderBottomColor: COLORS.greyDark,
              borderBottomWidth: 1,
              height: SIZES.padding * 2.5,
              ...FONTS.body3,
              paddingBottom: 3,
              paddingTop: SIZES.base * 7,
            }}
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            paddingTop: SIZES.padding2 * 2,
          }}
        >
          Enter the 4 digit code sent via SMS or your email
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: SIZES.padding2 * 2,
          }}
        >
          <Button
            label="Verify"
            containerStyle={{
              backgroundColor: COLORS.primary,
              borderRadius: SIZES.padding,
            }}
            labelStyle={{
              paddingHorizontal: SIZES.base * 5,
              paddingVertical: SIZES.base,
            }}
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            textDecorationLine: "underline",
            paddingTop: SIZES.padding,
          }}
        >
          Resend Code
        </Text>
      </View>
    </>
  );
};

export default VerificationCard;
