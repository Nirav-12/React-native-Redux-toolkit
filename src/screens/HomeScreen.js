import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, reStoke } from "../reducers/slice/cakeSlice";
import Counter from "../components/Counter";
import {
  orderIceCream,
  reStokeIceCream,
} from "../reducers/slice/iceCreamSlice";

const HomeScreen = () => {
  const dispacth = useDispatch();

  const { noOfIceCream } = useSelector((state) => state.iceCream);
  const { noOfCake } = useSelector((state) => state.cake);
  return (
    <View style={styles.container}>
      <Counter />

      <Text style={styles.title_text}>Cake and iceCreame Shoap</Text>
      <Text style={styles.no_Text}>Available Cake :{noOfCake}</Text>
      <View style={styles.btn_container}>
        <Button
          title="Order Cake"
          color="black"
          onPress={() => dispacth(ordered())}
        />
        <Button
          title="Restoke Cake"
          color="gray"
          onPress={() => dispacth(reStoke(4))}
        />
      </View>

      <Text style={styles.no_Text}>Available IceCream :{noOfIceCream}</Text>
      <View style={styles.btn_container}>
        <Button
          title="Order IceCreame"
          color="black"
          onPress={() => dispacth(orderIceCream())}
        />
        <Button
          title="Restoke IceCreame"
          color="gray"
          onPress={() => dispacth(reStokeIceCream(2))}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
  },
  no_Text: {
    fontSize: 20,
    margin: 20,
  },
  btn_container: {
    flexDirection: "row",
    gap: 15,
    paddingBottom: 20,
    borderBottomWidth: 1,
    width: "100%",
    justifyContent: "center",
  },
  title_text: { fontSize: 30, marginTop: 20 },
});
export default HomeScreen;
