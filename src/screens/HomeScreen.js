import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Counter from "../components/Counter";
import Cake from "../components/Cake";
import IceCream from "../components/IceCream";
import { getMovies } from "../reducers/slice/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = () => {
  const dispacth = useDispatch();
  const { movies, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispacth(getMovies());
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title_text}>Counter</Text>
      <Counter />
      <Text style={styles.title_text}>Cake and iceCreame Shoap</Text>
      <Cake />
      <IceCream />
      <Text style={styles.title_text}>Movies List</Text>

      <FlatList
        data={movies}
        renderItem={({ item }) => <Text key={item.id}>{item.title}</Text>}
      />
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
