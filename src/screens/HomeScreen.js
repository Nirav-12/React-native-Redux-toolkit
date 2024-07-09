import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Counter from "../components/Counter";
import Cake from "../components/Cake";
import IceCream from "../components/IceCream";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title_text}>Counter</Text>
      <Counter />
      <Text style={styles.title_text}>Cake and iceCreame Shoap</Text>
      <Cake />
      <IceCream />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
  },
  title_text: { fontSize: 30, marginTop: 20 },
});
export default HomeScreen;
