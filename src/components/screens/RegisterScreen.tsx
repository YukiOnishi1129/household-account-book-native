import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

export const RegisterScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>会員登録ページ</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
