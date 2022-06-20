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
import { Button, CustomModal } from "../../../components";

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

const maturity = [
  {
    id: 1,
    value: "End in 30 days - (10 - Jul - 2022)",
  },
  {
    id: 2,
    value: "End in 60 days - (10 - Aug - 2022)",
  },
  {
    id: 3,
    value: "End in 90 days - (10 - Sept - 2022)",
  },
  {
    id: 4,
    value: "Choose on calendar",
  },
];
const days = [
  {
    id: 1,
    value: "Monday",
  },
  {
    id: 2,
    value: "Tuesday",
  },
  {
    id: 3,
    value: "Wednesday",
  },
  {
    id: 4,
    value: "Thursday",
  },
  {
    id: 5,
    value: "Friday",
  },
  {
    id: 6,
    value: "Saturday",
  },
  {
    id: 7,
    value: "Sunday",
  },
];
const times = [
  {
    id: 1,
    value: "07:00 am",
  },
  {
    id: 2,
    value: "10:00 am",
  },
  {
    id: 3,
    value: "12:00 pm",
  },
  {
    id: 4,
    value: "03: 00 pm",
  },
  {
    id: 5,
    value: "08: 00 pm",
  },
];
const sources = [
  {
    id: 1,
    value: "Use Savings wallet",
  },
  {
    id: 2,
    value: "Use bank card   **** 1505 ",
  },
];

const GoalCreator = ({ navigation }) => {
  const [current, setCurrent] = useState(1);
  const [tab, setTab] = useState("Daily");
  const [manual, setManual] = useState(true);
  const [selectedDate, setSelectedDate] = useState(1);
  const [toggle, setToggle] = useState(true);
  const [toggle1, setToggle1] = useState(true);
  const [selected, setSelected] = useState(1);
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedTime, setSelectedTime] = useState(1);
  const [selectedMaturity, setSelectedMaturity] = useState(1);
  const { theme, setTheme } = useContext(ThemeContext);
  const [sourceModal, setSourceModal] = useState(false);
  const [maturityModal, setMaturityModal] = useState(false);
  const [timeModal, setTimeModal] = useState(false);
  const [dayModal, setDayModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);

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
            <Text style={styles.primaryText}>
              What Should we call this Plan?
            </Text>
          )}
          {current === 2 && (
            <Text style={styles.primaryText}>
              Complete Your Plan Informaation
            </Text>
          )}
          {current === 3 && <View>{renderDateTab()}</View>}
          {current === 4 && (
            <View>
              <Text style={styles.primaryText}>Before you continue</Text>
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
          containerStyle={styles.progressButton}
          onPress={() => {
            if (current !== numbers.length) {
              setCurrent(current + 1);
            } else {
              setConfirmationModal(true);
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
            <TextInput style={styles.InputStyle} />
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
                style={styles.InputStyle}
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
              style={[
                styles.InputBorder,
                {
                  borderColor:
                    theme === "light" ? COLORS.secondary : COLORS.greyLight,
                },
              ]}
            >
              <TextInput
                style={[styles.InputStyle, { width: "80%" }]}
                placeholder={"Select a maturity date"}
                placeholderTextColor={COLORS.greyMedium}
              />
              <TouchableOpacity
                onPress={() => setMaturityModal(true)}
                activeOpacity={0.7}
                style={{ paddingRight: SIZES.padding }}
              >
                <ChevronDown />
              </TouchableOpacity>
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
              style={[
                styles.InputBorder,
                {
                  borderColor:
                    theme === "light" ? COLORS.secondary : COLORS.greyLight,
                },
              ]}
            >
              <TextInput
                style={[styles.InputStyle, { width: "80%" }]}
                placeholder={"Select a funding source"}
                placeholderTextColor={COLORS.greyMedium}
              />
              <TouchableOpacity
                onPress={() => setSourceModal(true)}
                activeOpacity={0.7}
                style={{ paddingRight: SIZES.padding }}
              >
                <ChevronDown />
              </TouchableOpacity>
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
                  style={[
                    styles.radioOut,
                    {
                      borderColor:
                        manual === true
                          ? COLORS.primary
                          : theme === "light"
                          ? COLORS.dark
                          : COLORS.white,
                    },
                  ]}
                >
                  {manual && <View style={styles.radioIn} />}
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

      {
        /* Inner tabs of the frequency screen  */
      }

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
                  style={[
                    styles.InputBorder,
                    {
                      borderColor:
                        theme === "light" ? COLORS.secondary : COLORS.greyLight,
                    },
                  ]}
                >
                  <TextInput
                    style={[styles.InputStyle, { width: "80%" }]}
                    placeholder={"Choose a time"}
                    placeholderTextColor={COLORS.greyMedium}
                  />
                  <TouchableOpacity
                    onPress={() => setTimeModal(true)}
                    activeOpacity={0.7}
                    style={{ paddingRight: SIZES.padding }}
                  >
                    <ChevronDown />
                  </TouchableOpacity>
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
                  style={[
                    styles.InputBorder,
                    {
                      borderColor:
                        theme === "light" ? COLORS.secondary : COLORS.greyLight,
                    },
                  ]}
                >
                  <TextInput
                    style={[
                      styles.InputStyle,
                      {
                        width: "80%",
                        borderColor:
                          theme === "light" ? COLORS.dark : COLORS.white,
                      },
                    ]}
                    placeholder={"Choose a day of week"}
                    placeholderTextColor={COLORS.greyMedium}
                  />
                  <TouchableOpacity
                    onPress={() => setDayModal(true)}
                    activeOpacity={0.7}
                    style={{ paddingRight: SIZES.padding }}
                  >
                    <ChevronDown />
                  </TouchableOpacity>
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
                  style={[
                    styles.InputBorder,
                    {
                      borderColor:
                        theme === "light" ? COLORS.secondary : COLORS.greyLight,
                    },
                  ]}
                >
                  <TextInput
                    style={[
                      styles.InputStyle,
                      {
                        width: "80%",
                        borderColor:
                          theme === "light" ? COLORS.dark : COLORS.white,
                      },
                    ]}
                    placeholder={"Choose a time"}
                    placeholderTextColor={COLORS.greyMedium}
                  />
                  <TouchableOpacity
                    onPress={() => setTimeModal(true)}
                    activeOpacity={0.7}
                    style={{ paddingRight: SIZES.padding }}
                  >
                    <ChevronDown />
                  </TouchableOpacity>
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
                    style={[
                      styles.InputStyle,
                      {
                        borderColor:
                          theme === "light" ? COLORS.dark : COLORS.white,
                      },
                    ]}
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
                  style={[
                    styles.InputBorder,
                    {
                      borderColor:
                        theme === "light" ? COLORS.secondary : COLORS.greyLight,
                    },
                  ]}
                >
                  <TextInput
                    style={[
                      styles.InputStyle,
                      {
                        width: "80%",
                        borderColor:
                          theme === "light" ? COLORS.dark : COLORS.white,
                      },
                    ]}
                    placeholder={"Choose a time"}
                    placeholderTextColor={COLORS.greyMedium}
                  />
                  <TouchableOpacity
                    onPress={() => setTimeModal(true)}
                    activeOpacity={0.7}
                    style={{ paddingRight: SIZES.padding }}
                  >
                    <ChevronDown />
                  </TouchableOpacity>
                </View>
              </Animatable.View>
              {renderFrequencyAutomation()}
            </View>
          )}
        </View>
      );
    }

    // render a tab content based on the current progress tab index
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
              style={[
                styles.conditionText,
                {
                  color:
                    theme === "light" ? COLORS.secondary_dark : COLORS.white,
                },
              ]}
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
              style={[
                styles.conditionText,
                {
                  color:
                    theme === "light" ? COLORS.secondary_dark : COLORS.white,
                },
              ]}
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

  // methods for handling modals
  function renderFundingSourceModal() {
    return (
      <CustomModal animationIn="slideInUp" isVisible={sourceModal}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <View style={styles.modalCard}>
            {/* modal header */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setSourceModal(false)}
              >
                <ChevronLeft />
              </TouchableOpacity>

              <View>
                <Text style={styles.inputLabel}>Funding source</Text>
              </View>
            </View>

            {/* radio buttons */}
            <View>
              {sources.map((source) => (
                <TouchableOpacity
                  onPress={() => setSelected(source.id)}
                  activeOpacity={0.7}
                  style={styles.modalItem}
                >
                  <View style={styles.radioOut}>
                    {selected === source.id && <View style={styles.radioIn} />}
                  </View>
                  <Text
                    style={{
                      color: COLORS.white,
                      ...FONTS.h4Bold,
                      fontSize: 16,
                      fontWeight: "600",
                    }}
                  >
                    {source.value}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* render button */}
            <Button
              label={"DONE"}
              labelStyle={{
                ...FONTS.h4Bold,
                color: COLORS.white,
              }}
              containerStyle={styles.modalButton}
              onPress={() => setSourceModal(false)}
            />
          </View>
        </View>
      </CustomModal>
    );
  }

  function renderMaturityModal() {
    return (
      <CustomModal animationIn="slideInUp" isVisible={maturityModal}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <View style={styles.modalCard}>
            {/* modal header */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setMaturityModal(false)}
              >
                <ChevronLeft />
              </TouchableOpacity>

              <View>
                <Text style={styles.inputLabel}>Maturity Date</Text>
              </View>
            </View>

            {/* radio buttons */}
            <View>
              {maturity.map((mature) => (
                <TouchableOpacity
                  onPress={() => setSelectedMaturity(mature.id)}
                  activeOpacity={0.7}
                  style={styles.modalItem}
                >
                  <View style={styles.radioOut}>
                    {selectedMaturity === mature.id && (
                      <View style={styles.radioIn} />
                    )}
                  </View>
                  <Text
                    style={{
                      color: COLORS.white,
                      ...FONTS.h4Bold,
                      fontSize: 16,
                      fontWeight: "600",
                    }}
                  >
                    {mature.value}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* render button */}
            <Button
              label={"DONE"}
              labelStyle={{
                ...FONTS.h4Bold,
                color: COLORS.white,
              }}
              containerStyle={styles.modalButton}
              onPress={() => setMaturityModal(false)}
            />
          </View>
        </View>
      </CustomModal>
    );
  }
  function renderDayModal() {
    return (
      <CustomModal animationIn="slideInUp" isVisible={dayModal}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <View style={styles.modalCard}>
            {/* modal header */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setDayModal(false)}
              >
                <ChevronLeft />
              </TouchableOpacity>

              <View>
                <Text style={styles.inputLabel}>Choose Frequency</Text>
              </View>
            </View>

            {/* radio buttons */}
            <View>
              {days.map((day) => (
                <TouchableOpacity
                  onPress={() => setSelectedDay(day.id)}
                  activeOpacity={0.7}
                  style={styles.modalItem}
                >
                  <View
                    style={[
                      styles.radioOut,
                      {
                        borderColor:
                          selectedDay === day.id
                            ? COLORS.primary
                            : COLORS.white,
                      },
                    ]}
                  >
                    {selectedDay === day.id && <View style={styles.radioIn} />}
                  </View>
                  <Text
                    style={{
                      color: COLORS.white,
                      ...FONTS.h4Bold,
                      fontSize: 16,
                      fontWeight: "600",
                    }}
                  >
                    {day.value}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* render button */}
            <Button
              label={"DONE"}
              labelStyle={{
                ...FONTS.h4Bold,
                color: COLORS.white,
              }}
              containerStyle={styles.modalButton}
              onPress={() => setDayModal(false)}
            />
          </View>
        </View>
      </CustomModal>
    );
  }
  function renderTimeModal() {
    return (
      <CustomModal animationIn="slideInUp" isVisible={timeModal}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <View style={styles.modalCard}>
            {/* modal header */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setTimeModal(false)}
              >
                <ChevronLeft />
              </TouchableOpacity>

              <View>
                <Text style={styles.inputLabel}>Select Time</Text>
              </View>
            </View>

            {/* radio buttons */}
            <View>
              {times.map((time) => (
                <TouchableOpacity
                  onPress={() => setSelectedTime(time.id)}
                  activeOpacity={0.7}
                  style={styles.modalItem}
                >
                  <View
                    style={[
                      styles.radioOut,
                      {
                        borderColor:
                          selectedTime === time.id
                            ? COLORS.primary
                            : COLORS.white,
                      },
                    ]}
                  >
                    {selectedTime === time.id && (
                      <View style={styles.radioIn} />
                    )}
                  </View>
                  <Text
                    style={{
                      color: COLORS.white,
                      ...FONTS.h4Bold,
                      fontSize: 16,
                      fontWeight: "600",
                    }}
                  >
                    {time.value}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* render button */}
            <Button
              label={"DONE"}
              labelStyle={{
                ...FONTS.h4Bold,
                color: COLORS.white,
              }}
              containerStyle={styles.modalButton}
              onPress={() => setTimeModal(false)}
            />
          </View>
        </View>
      </CustomModal>
    );
  }
  function renderConfirmationModal() {
    return (
      <CustomModal animationIn="slideInUp" isVisible={confirmationModal}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: SIZES.width * 0.9,
              padding: SIZES.base * 3,
              backgroundColor: COLORS.white,
              borderRadius: SIZES.radius,
            }}
          >
            <Text
              style={{
                ...FONTS.h3Bold,
                color: COLORS.greyMedium,
                fontSize: 25,
                marginBottom: SIZES.padding * 4,
              }}
            >
              Plan created successfully
            </Text>

            <Button
              label={"Great!"}
              labelStyle={{ color: COLORS.primary }}
              containerStyle={{ alignSelf: "flex-end" }}
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </CustomModal>
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
      {renderFundingSourceModal()}
      {renderMaturityModal()}
      {renderTimeModal()}
      {renderDayModal()}
      {renderConfirmationModal()}
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
  modalItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 0.5,
  },
  radioOut: {
    borderWidth: 0.5,
    borderColor: COLORS.white,
    borderRadius: SIZES.padding,
    height: 23,
    width: 23,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SIZES.padding2 * 2,
  },
  radioIn: {
    width: 17,
    height: 17,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.padding,
  },
  InputBorder: {
    width: "100%",
    borderWidth: 1,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  primaryText: {
    color: COLORS.primary,
    ...FONTS.h3Bold,
    marginTop: SIZES.radius,
    fontSize: 22,
  },
  progressButton: {
    paddingHorizontal: SIZES.padding * 11,
    paddingVertical: SIZES.padding,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.padding / 2,
    marginTop: 13,
  },
  InputStyle: {
    color: COLORS.white,
    padding: SIZES.padding,
    ...FONTS.h4Bold,
    fontSize: 19.8,
  },
  conditionText: {
    ...FONTS.body2bold,
    fontSize: 14,
    lineHeight: 15.5,
    paddingHorizontal: SIZES.padding2 * 2,
  },
  modalButton: {
    backgroundColor: COLORS.investment,
    paddingVertical: 18,
    width: SIZES.width * 0.9,
    borderRadius: SIZES.radius,
    marginVertical: SIZES.base * 5,
  },
  inputLabel: {
    color: COLORS.white,
    ...FONTS.h4Bold,
    marginLeft: SIZES.padding2 * 2,
  },
  modalCard: {
    width: SIZES.width,
    padding: SIZES.base * 3,
    backgroundColor: COLORS.modal,
    borderRadius: SIZES.radius,
  },
});
