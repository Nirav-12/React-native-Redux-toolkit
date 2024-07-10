import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  orderIceCream,
  reStokeIceCream,
} from "../reducers/slice/iceCreamSlice";

const IceCream = () => {
  const dispacth = useDispatch();

  const { noOfIceCream } = useSelector((state) => state.iceCream);
  return (
    <>
      <Text style={styles.no_Text}>Available IceCream :{noOfIceCream}</Text>
      <Text style={{ color: "red" }}>Buy 1 IceCream get one Cake free</Text>
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
    </>
  );
};

const styles = StyleSheet.create({
  no_Text: {
    fontSize: 20,
    margin: 20,
  },
  btn_container: {
    flexDirection: "row",
    gap: 15,
    padding: 20,
    borderBottomWidth: 1,
    width: "100%",
    justifyContent: "center",
  },
});

export default IceCream;
