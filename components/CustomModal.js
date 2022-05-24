import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Modal from "react-native-modal";

const CustomModal = ({ animationIn, isVisible, children }) => {
  return (
    <Modal
      animationIn={animationIn}
      hasBackdrop={true}
      backdropTransitionOutTiming={0}
      isVisible={isVisible}
      animationInTiming={1000}
      animationOutTiming={1000}
      style={{
        marginBottom: 0,
      }}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({});
