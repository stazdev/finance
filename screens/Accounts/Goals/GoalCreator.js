import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Animated,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import * as Animatable from "react-native-animatable";
import React, { useState, useContext } from "react";
import { ThemeContext } from "../../../context-store/context";
import {
  Check,
  ChevronDown,
  ChevronLeft,
  ToggleOff,
  ToggleOn,
} from "../../../assets/icons";
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

const listTab = [
  {
    id: 1,
    tab: "Daily",
  },
  {
    id: 2,
    tab: "Weekly",
  },
  {
    id: 3,
    tab: "Monthly",
  },
];

const dates = [
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
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
  {
    id: 11,
  },
  {
    id: 12,
  },
  {
    id: 13,
  },
  {
    id: 14,
  },
  {
    id: 15,
  },
  {
    id: 16,
  },
  {
    id: 17,
  },
  {
    id: 18,
  },
  {
    id: 19,
  },
  {
    id: 20,
  },
  {
    id: 21,
  },
  {
    id: 22,
  },
  {
    id: 23,
  },
  {
    id: 24,
  },
  {
    id: 25,
  },
  {
    id: 26,
  },
  {
    id: 27,
  },
  {
    id: 28,
  },
];

const GoalCreator = ({ navigation }) => {
  const [current, setCurrent] = useState(1);
  const [tab, setTab] = useState("Daily");
  const [manual, setManual] = useState(true);
  const [selectedDate, setSelectedDate] = useState(1);
  const [toggle, setToggle] = useState(true);
  const [toggle1, setToggle1] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext);

  function renderHeader() {
    function renderDateTab() {
      return (
        <View style={styles.listTab}>
          {listTab.map((list) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={list.id}
              style={[tab === list.tab]}
              onPress={() => setTab(list.tab)}
            >
              <Text
                style={[
                  styles.text,
                  {
                    color: theme === "light" ? "#000000" : COLORS.white,
                    ...FONTS.fbody2,
                  },
                ]}
              >
                {" "}
                {list.tab}{" "}
              </Text>
              {tab === list.tab && <View style={styles.tabActive} />}
            </TouchableOpacity>
          ))}
        </View>
      );
    }

    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: SIZES.padding,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              current !== 1 ? setCurrent(current - 1) : navigation.pop()
            }
          >
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

        <View>
          {current === 1 && (
            <Text
              style={{
                color: COLORS.primary,
                ...FONTS.h3Bold,
                marginTop: SIZES.radius,
                fontSize: 22,
              }}
            >
              What Should we call this Plan?
            </Text>
          )}
          {current === 2 && (
            <Text
              style={{
                color: COLORS.primary,
                ...FONTS.h3Bold,
                marginTop: SIZES.radius,
                fontSize: 22,
              }}
            >
              Complete Your Plan Informaation
            </Text>
          )}
          {current === 3 && <View>{renderDateTab()}</View>}
          {current === 4 && (
            <View>
              <Text
                style={{
                  color: COLORS.primary,
                  ...FONTS.h3Bold,
                  marginTop: SIZES.radius,
                  fontSize: 22,
                }}
              >
                Before you continue
              </Text>
              <Text
                style={{
                  color: COLORS.greyMedium,
                  ...FONTS.fbody1,
                  fontSize: 16,
                }}
              >
                Here are a few things to note.
              </Text>
            </View>
          )}
        </View>
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
          {current == 4 && toggle == true && toggle1 == true ? (
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
          label={current == 4 ? "CONTINUE" : "NEXT"}
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
              setCurrent(current / 4);
            }
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
              color: theme === "light" ? COLORS.secondary_dark : COLORS.white,
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
              borderColor:
                theme === "light" ? COLORS.secondary : COLORS.greyLight,
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
                color: theme === "light" ? COLORS.secondary_dark : COLORS.white,
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
                borderColor:
                  theme === "light" ? COLORS.secondary : COLORS.greyLight,
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
                color: theme === "light" ? COLORS.secondary_dark : COLORS.white,
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
                borderColor:
                  theme === "light" ? COLORS.secondary : COLORS.greyLight,
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
                color: theme === "light" ? COLORS.secondary_dark : COLORS.white,
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
                borderColor:
                  theme === "light" ? COLORS.secondary : COLORS.greyLight,
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

    function renderFrequency() {
      function renderFrequencyAutomation() {
        return (
          <View>
            <Animatable.View
              style={{
                marginVertical: SIZES.radius,
                alignItems: "center",
                borderBottomColor: COLORS.greyMedium,
                borderBottomWidth: 1,
                paddingBottom: SIZES.padding,
              }}
              animation={"fadeIn"}
              duration={2000}
            >
              <Text
                style={{
                  color: theme === "light" ? "#000000" : COLORS.greyMedium,
                  ...FONTS.body2bold,
                }}
              >
                OR
              </Text>
            </Animatable.View>

            <Animatable.View
              style={{
                marginVertical: SIZES.radius,
                flexDirection: "row",
                alignItems: "center",
              }}
              animation={"fadeIn"}
              duration={2000}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  manual === true ? setManual(false) : setManual(true);
                }}
              >
                <View
                  style={{
                    width: 23,
                    height: 23,
                    borderRadius: SIZES.radius,
                    borderWidth: 0.25,
                    borderColor: COLORS.primary,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {manual && (
                    <View
                      style={{
                        width: 17,
                        height: 17,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary,
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <Text
                style={{
                  ...FONTS.body1bold,
                  color: theme === "light" ? COLORS.greyDark : COLORS.white,
                  marginLeft: SIZES.base * 3,
                }}
              >
                Manual/Anytime
              </Text>
            </Animatable.View>
          </View>
        );
      }

      const Item = ({ item }) => {
        return (
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
            }}
            onPress={() => setSelectedDate(item.id)}
          >
            <Text
              style={{
                color: theme === "light" ? COLORS.secondary : COLORS.white,
                ...FONTS.fbody2,
              }}
            >
              {item.id}
            </Text>
          </TouchableOpacity>
        );
      };
      return (
        <View>
          {tab === "Daily" && (
            <View>
              <Animatable.View
                style={{ marginVertical: SIZES.radius }}
                animation={"fadeIn"}
                duration={2000}
              >
                <Text
                  style={{
                    color:
                      theme === "light" ? COLORS.secondary_dark : COLORS.white,
                    ...FONTS.fbody2,
                    marginBottom: SIZES.padding / 2,
                  }}
                >
                  Amount to save daily
                </Text>
                <View
                  style={{
                    width: "100%",
                    borderWidth: 1,
                    borderColor:
                      theme === "light" ? COLORS.secondary : COLORS.greyLight,
                  }}
                >
                  <TextInput
                    style={{
                      borderColor:
                        theme === "light"
                          ? COLORS.secondary_dark
                          : COLORS.white,
                      padding: SIZES.padding,
                      ...FONTS.h4Bold,
                      fontSize: 19.8,
                    }}
                  />
                </View>
              </Animatable.View>

              <Animatable.View
                style={{ marginVertical: SIZES.radius }}
                animation={"fadeIn"}
                duration={2000}
              >
                <Text
                  style={{
                    color:
                      theme === "light" ? COLORS.secondary_dark : COLORS.white,
                    ...FONTS.fbody2,
                    marginBottom: SIZES.padding / 2,
                  }}
                >
                  Select a Time of day
                </Text>
                <View
                  style={{
                    width: "100%",
                    borderWidth: 1,
                    borderColor:
                      theme === "light" ? COLORS.secondary : COLORS.greyLight,
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
                    placeholder={"Choose a time"}
                    placeholderTextColor={COLORS.greyMedium}
                  />
                  <View style={{ paddingRight: SIZES.padding }}>
                    <ChevronDown />
                  </View>
                </View>
              </Animatable.View>
              {renderFrequencyAutomation()}
            </View>
          )}

          {tab === "Weekly" && (
            <View>
              <Animatable.View
                style={{ marginVertical: SIZES.radius }}
                animation={"fadeIn"}
                duration={2000}
              >
                <Text
                  style={{
                    color:
                      theme === "light" ? COLORS.secondary_dark : COLORS.white,
                    ...FONTS.fbody2,
                    marginBottom: SIZES.padding / 2,
                  }}
                >
                  Amount to save weekly
                </Text>
                <View
                  style={{
                    width: "100%",
                    borderWidth: 1,
                    borderColor:
                      theme === "light" ? COLORS.secondary : COLORS.greyLight,
                  }}
                >
                  <TextInput
                    style={{
                      color: theme === "light" ? COLORS.dark : COLORS.white,
                      padding: SIZES.padding,
                      ...FONTS.h4Bold,
                      fontSize: 19.8,
                    }}
                  />
                </View>
              </Animatable.View>

              <Animatable.View
                style={{ marginVertical: SIZES.radius }}
                animation={"fadeIn"}
                duration={2000}
              >
                <Text
                  style={{
                    borderColor:
                      theme === "light" ? COLORS.secondary_dark : COLORS.white,
                    ...FONTS.fbody2,
                    marginBottom: SIZES.padding / 2,
                  }}
                >
                  Select a day of the week
                </Text>
                <View
                  style={{
                    width: "100%",
                    borderWidth: 1,
                    borderColor:
                      theme === "light" ? COLORS.secondary : COLORS.greyLight,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <TextInput
                    style={{
                      width: "80%",
                      borderColor:
                        theme === "light" ? COLORS.dark : COLORS.white,
                      padding: SIZES.padding,
                      ...FONTS.h4Bold,
                      fontSize: 19.8,
                    }}
                    placeholder={"Choose a day of week"}
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
                duration={2000}
              >
                <Text
                  style={{
                    borderColor:
                      theme === "light" ? COLORS.secondary_dark : COLORS.white,
                    ...FONTS.fbody2,
                    marginBottom: SIZES.padding / 2,
                  }}
                >
                  Select a time of day
                </Text>
                <View
                  style={{
                    width: "100%",
                    borderWidth: 1,
                    borderColor:
                      theme === "light" ? COLORS.secondary : COLORS.greyLight,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <TextInput
                    style={{
                      width: "80%",
                      borderColor:
                        theme === "light" ? COLORS.dark : COLORS.white,
                      padding: SIZES.padding,
                      ...FONTS.h4Bold,
                      fontSize: 19.8,
                    }}
                    placeholder={"Choose a time"}
                    placeholderTextColor={COLORS.greyMedium}
                  />
                  <View style={{ paddingRight: SIZES.padding }}>
                    <ChevronDown />
                  </View>
                </View>
              </Animatable.View>
              {renderFrequencyAutomation()}
            </View>
          )}

          {tab === "Monthly" && (
            <View>
              <Animatable.View
                style={{ marginVertical: SIZES.radius }}
                animation={"fadeIn"}
                duration={2000}
              >
                <Text
                  style={{
                    borderColor:
                      theme === "light" ? COLORS.secondary_dark : COLORS.white,
                    ...FONTS.fbody2,
                    marginBottom: SIZES.padding / 2,
                  }}
                >
                  Amount to save monthly
                </Text>
                <View
                  style={{
                    width: "100%",
                    borderWidth: 1,
                    borderColor:
                      theme === "light" ? COLORS.secondary : COLORS.greyLight,
                  }}
                >
                  <TextInput
                    style={{
                      borderColor:
                        theme === "light" ? COLORS.dark : COLORS.white,
                      padding: SIZES.padding,
                      ...FONTS.h4Bold,
                      fontSize: 19.8,
                    }}
                  />
                </View>
              </Animatable.View>
              {/* day of the month select */}
              <Animatable.View
                style={{
                  marginVertical: SIZES.radius,
                }}
                animation={"fadeIn"}
                duration={2000}
              >
                <Text
                  style={{
                    color: COLORS.greyMedium,
                    ...FONTS.body1bold,
                    alignSelf: "center",
                    marginBottom: SIZES.base * 2,
                  }}
                >
                  Select day of month
                </Text>
                <FlatList
                  data={dates}
                  numColumns={7}
                  renderItem={Item}
                  keyExtractor={(item) => item.id}
                  style={{ alignSelf: "center" }}
                />
              </Animatable.View>

              <Animatable.View
                style={{ marginVertical: SIZES.radius }}
                animation={"fadeIn"}
                duration={2000}
              >
                <Text
                  style={{
                    borderColor:
                      theme === "light" ? COLORS.secondary_dark : COLORS.white,
                    ...FONTS.fbody2,
                    marginBottom: SIZES.padding / 2,
                  }}
                >
                  Select a time of day
                </Text>
                <View
                  style={{
                    width: "100%",
                    borderWidth: 1,
                    borderColor:
                      theme === "light" ? COLORS.secondary : COLORS.greyLight,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <TextInput
                    style={{
                      width: "80%",
                      borderColor:
                        theme === "light" ? COLORS.dark : COLORS.white,
                      padding: SIZES.padding,
                      ...FONTS.h4Bold,
                      fontSize: 19.8,
                    }}
                    placeholder={"Choose a time"}
                    placeholderTextColor={COLORS.greyMedium}
                  />
                  <View style={{ paddingRight: SIZES.padding }}>
                    <ChevronDown />
                  </View>
                </View>
              </Animatable.View>
              {renderFrequencyAutomation()}
            </View>
          )}
        </View>
      );
    }

    function renderCondition() {
      return (
        <Animatable.View animation={"fadeIn"} duration={2000}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: SIZES.padding2 * 3,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setToggle(!toggle)}
            >
              {!toggle ? <ToggleOff /> : <ToggleOn />}
            </TouchableOpacity>
            <Text
              style={{
                color: theme === "light" ? COLORS.secondary_dark : COLORS.white,
                ...FONTS.body2bold,
                fontSize: 14,
                lineHeight: 15.5,
                paddingHorizontal: SIZES.padding2 * 2,
              }}
            >
              Pls ensure you are saving your money for a convenient duration. If
              you decide to withdraw these funds before the stipulated time, a
              2% charge would apply
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: SIZES.padding2 * 5,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setToggle1(!toggle1)}
            >
              {!toggle1 ? <ToggleOff /> : <ToggleOn />}
            </TouchableOpacity>
            <Text
              style={{
                color: theme === "light" ? COLORS.secondary_dark : COLORS.white,
                ...FONTS.body2bold,
                fontSize: 14,
                lineHeight: 15.5,
                paddingHorizontal: SIZES.padding2 * 2,
              }}
            >
              I agree to the 5QM terms & Conditions governing creation of
              savings plans
            </Text>
          </View>
        </Animatable.View>
      );
    }
    return (
      <View>
        {current == 1 ? (
          <View>{renderPlanName()}</View>
        ) : current == 2 ? (
          <View>{renderPlanInfo()}</View>
        ) : current == 3 ? (
          <View>{renderFrequency()}</View>
        ) : (
          <View>{renderCondition()}</View>
        )}
      </View>
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: theme === "light" ? COLORS.white : COLORS.dark,
      }}
    >
      {renderHeader()}
      {renderProgress()}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {renderContent()}
        {renderButton()}

        {current == 4 && (
          <View style={{ alignItems: "center", marginTop: SIZES.height * 0.2 }}>
            <Image
              source={
                theme === "light" ? images.logoSmallDark : images.logoSmall
              }
            />
          </View>
        )}
      </ScrollView>
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
  listTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.padding * 4,
    marginTop: SIZES.radius * 2,
  },

  text: {
    ...FONTS.fbody1,
    color: COLORS.white,
  },
  tabActive: {
    height: 5,
    width: 42,
    alignSelf: "center",
    backgroundColor: COLORS.primary,
    marginTop: SIZES.padding,
    borderTopLeftRadius: SIZES.padding,
    borderTopRightRadius: SIZES.padding,
  },
});
