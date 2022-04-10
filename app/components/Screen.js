import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

import Constants from "expo-constants";

const Screen = ({ style, children }) => {
  return (
    <SafeAreaView style={[{ flex: 1 }, style]}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
