import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increace } from "../reducers/slice/counterSlice";

const Counter = () => {
  const dispacth = useDispatch();

  const { count } = useSelector((state) => state.count);
  return (
    <>
      <Text style={styles.title_text}>Counter</Text>

      <Text style={styles.no_Text}>{count}</Text>
      <View style={styles.btn_container}>
        <Button
          title="Increase"
          color="black"
          onPress={() => dispacth(increace())}
        />
        <Button
          title="Decrease"
          color="gray"
          onPress={() => dispacth(decrease())}
        />
      </View>
    </>
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
export default Counter;
