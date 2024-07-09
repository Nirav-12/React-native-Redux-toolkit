import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, reStoke } from "../reducers/slice/cakeSlice";

const Cake = () => {
  const dispacth = useDispatch();

  const { noOfCake } = useSelector((state) => state.cake);

  return (
    <>
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
    paddingBottom: 20,
    borderBottomWidth: 1,
    width: "100%",
    justifyContent: "center",
  },
});

export default Cake;
