import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Animated,
  FlatList,
  TextInput,
} from "react-native";
import * as Animatable from "react-native-animatable";
import React, { useState } from "react";
import { Check, ChevronDown, ChevronLeft } from "../../../assets/icons";
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
      <View style={styles.progressBg}>
        <View
          style={[
            styles.progressPercent,
            { position: "absolute", top: -10, left: "19%" },
          ]}
        >
          <Text style={styles.progressText}>1</Text>
        </View>
        <View
          style={[
            styles.progressPercent,
            { position: "absolute", top: -10, left: "45%" },
          ]}
        >
          <Text style={styles.progressText}>2</Text>
        </View>
        <View
          style={[
            styles.progressPercent,
            { position: "absolute", top: -10, left: "68%" },
          ]}
        >
          <Text style={styles.progressText}>3</Text>
        </View>
        <View
          style={[
            styles.progressPercent,
            { position: "absolute", top: -10, left: "92%" },
          ]}
        >
          {current == 4 ? (
            <Check />
          ) : (
            <Text style={styles.progressText}>4</Text>
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
    function renderPlanName() {
      return (
        <View style={{ marginBottom: SIZES.base * 8 }}>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.fbody2,
              marginBottom: SIZES.padding / 2,
            }}
          >
            Plan Name
          </Text>
          <View
            style={{
              width: "100%",
              borderWidth: 1,
              borderColor: COLORS.greyLight,
            }}
          >
            <TextInput
              style={{
                color: COLORS.white,
                padding: SIZES.padding,
                ...FONTS.h4Bold,
                fontSize: 19.8,
              }}
            />
          </View>
          <Text
            style={{
              color: COLORS.greyMedium,
              ...FONTS.fbody2,
              marginTop: SIZES.base,
            }}
          >
            Give your plan a creative name
          </Text>
        </View>
      );
    }

    function renderPlanInfo() {
      return (
        <View style={{ marginBottom: SIZES.base * 8 }}>
          <View style={{ paddingVertical: SIZES.radius }}>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.fbody2,
                marginBottom: SIZES.padding / 2,
              }}
            >
              Overall Target Amount
            </Text>
            <View
              style={{
                width: "100%",
                borderWidth: 1,
                borderColor: COLORS.greyLight,
              }}
            >
              <TextInput
                style={{
                  color: COLORS.white,
                  padding: SIZES.padding,
                  ...FONTS.h4Bold,
                  fontSize: 19.8,
                }}
                placeholder={"50000"}
                placeholderTextColor={COLORS.greyMedium}
              />
            </View>
          </View>

          <Animatable.View
            style={{ marginVertical: SIZES.radius }}
            animation={"fadeIn"}
            duration={2000}
          >
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.fbody2,
                marginBottom: SIZES.padding / 2,
              }}
            >
              Set Maturity Date
            </Text>
            <View
              style={{
                width: "100%",
                borderWidth: 1,
                borderColor: COLORS.greyLight,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                style={{
                  width: "80%",
                  color: COLORS.white,
                  padding: SIZES.padding,
                  ...FONTS.h4Bold,
                  fontSize: 19.8,
                }}
                placeholder={"Select a maturity date"}
                placeholderTextColor={COLORS.greyMedium}
              />
              <View style={{ paddingRight: SIZES.padding }}>
                <ChevronDown />
              </View>
            </View>
          </Animatable.View>

          <Animatable.View
            style={{ marginVertical: SIZES.radius }}
            animation={"fadeIn"}
            duration={1500}
          >
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.fbody2,
                marginBottom: SIZES.padding / 2,
              }}
            >
              Funding Source
            </Text>
            <View
              style={{
                width: "100%",
                borderWidth: 1,
                borderColor: COLORS.greyLight,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                style={{
                  width: "80%",
                  color: COLORS.white,
                  padding: SIZES.padding,
                  ...FONTS.h4Bold,
                  fontSize: 19.8,
                }}
                placeholder={"Select a funding source"}
                placeholderTextColor={COLORS.greyMedium}
              />
              <View style={{ paddingRight: SIZES.padding }}>
                <ChevronDown />
              </View>
            </View>
          </Animatable.View>
        </View>
      );
    }
    return (
      <View>
        {current == 1 ? (
          <View>{renderPlanName()}</View>
        ) : current == 2 ? (
          <View>{renderPlanInfo()}</View>
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

const styles = StyleSheet.create({
  progressBg: {
    height: SIZES.base,
    width: "100%",
    backgroundColor: "rgba(58, 194, 103, 0.2)",
    marginVertical: 30,
    borderRadius: SIZES.radius,
  },
  progressPercent: {
    width: SIZES.base * 3,
    height: SIZES.base * 3,
    backgroundColor: COLORS.investment,

    borderRadius: SIZES.radius,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  progressText: {
    color: COLORS.white,
    ...FONTS.fh4,
    fontSize: 14,
    lineHeight: 16,
  },
});
