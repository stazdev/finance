import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Animated,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Check, ChevronLeft } from "../../../assets/icons";
import { COLORS, FONTS, images, SIZES } from "../../../constants";
import { Button } from "../../../components";

const numbers = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

const GoalCreator = ({ navigation }) => {
  const scrollX = new Animated.Value(0);
  const listRef = React.useRef();
  const [progressWidth, setProgressWidth] = useState("0%");
  const [current, setCurrent] = useState(1);

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.pop()}>
          <ChevronLeft />
        </TouchableOpacity>
        {current === 3 && (
          <Text
            style={{
              color: COLORS.primary,
              ...FONTS.h4Bold,
              marginLeft: SIZES.width * 0.25,
            }}
          >
            Frequency
          </Text>
        )}
      </View>
    );
  }

  function renderProgress() {
    return (
      <View
        style={{
          height: SIZES.base,
          width: "100%",
          backgroundColor: "rgba(58, 194, 103, 0.2)",
          marginVertical: 50,
          borderRadius: SIZES.radius,
        }}
      >
        <View
          style={{
            width: SIZES.base * 3,
            height: SIZES.base * 3,
            backgroundColor: COLORS.investment,
            position: "absolute",
            top: -10,
            left: "19%",
            borderRadius: SIZES.radius,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.fh4,
              fontSize: 14,
              lineHeight: 16,
            }}
          >
            1
          </Text>
        </View>
        <View
          style={{
            width: SIZES.base * 3,
            height: SIZES.base * 3,
            backgroundColor: COLORS.investment,
            position: "absolute",
            top: -10,
            left: "45%",
            borderRadius: SIZES.radius,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.fh4,
              fontSize: 14,
              lineHeight: 16,
            }}
          >
            2
          </Text>
        </View>
        <View
          style={{
            width: SIZES.base * 3,
            height: SIZES.base * 3,
            backgroundColor: COLORS.investment,
            position: "absolute",
            top: -10,
            left: "68%",
            borderRadius: SIZES.radius,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.fh4,
              fontSize: 14,
              lineHeight: 16,
            }}
          >
            3
          </Text>
        </View>
        <View
          style={{
            width: SIZES.base * 3,
            height: SIZES.base * 3,
            backgroundColor: COLORS.investment,
            position: "absolute",
            top: -10,
            left: "92%",
            borderRadius: SIZES.radius,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          {current == 4 ? (
            <Check />
          ) : (
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.fh4,
                fontSize: 14,
                lineHeight: 16,
              }}
            >
              4
            </Text>
          )}
        </View>

        <View
          style={{
            height: "100%",
            backgroundColor: COLORS.investment,
            borderRadius: SIZES.radius,

            width:
              current == 1
                ? "25%"
                : current == 2
                ? "50%"
                : current == 3
                ? "75%"
                : "100%",
          }}
        />
      </View>
    );
  }

  function renderButton() {
    return (
      <View>
        <Button
          label={"NEXT"}
          containerStyle={{
            paddingHorizontal: SIZES.padding * 11,
            paddingVertical: SIZES.padding,
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.padding / 2,
            marginTop: 13,
          }}
          onPress={() => {
            if (current !== numbers.length) {
              setCurrent(current + 1);
            } else {
              console.log(current);
              setCurrent(current / 4);
            }
            console.log(current);
          }}
        />
      </View>
    );
  }

  function renderContent() {
    return (
      <View>
        {current == 1 ? (
          <View
            style={{
              width: SIZES.width,
              height: 35,
              backgroundColor: COLORS.expense,
            }}
          />
        ) : current == 2 ? (
          <View
            style={{
              width: SIZES.width,
              height: 35,
              backgroundColor: COLORS.emergency,
            }}
          />
        ) : current == 3 ? (
          <View
            style={{
              width: SIZES.width,
              height: 35,
              backgroundColor: COLORS.investment2,
            }}
          />
        ) : (
          <View
            style={{
              width: SIZES.width,
              height: 35,
              backgroundColor: COLORS.primary,
            }}
          />
        )}
      </View>
    );
  }
  return (
    <SafeAreaView style={{ paddingHorizontal: SIZES.padding }}>
      {renderHeader()}
      {renderProgress()}
      {renderContent()}
      {renderButton()}
    </SafeAreaView>
  );
};

export default GoalCreator;

const styles = StyleSheet.create({});
