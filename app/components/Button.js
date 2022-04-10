import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

export const CircleButton = ({ imgUrl, onPress, ...otherProps }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...otherProps,
      }}
      onPress={onPress}
    >
      <Image
        resizeMode="contain"
        source={imgUrl}
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};
export const RectButton = ({ onPress, minWidth, fontSize, ...otherProps }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: COLORS.primary,
        minWidth: minWidth,
        marginBottom: 20,
        marginHorizontal: 20,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a Bid
      </Text>
    </TouchableOpacity>
  );
};
