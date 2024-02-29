import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import lemon from "../assets/lemon.png";
import mango from "../assets/mango.png";
import Item from "./Item";
import MyButton from "./MyButton";

export default Todo = () => {
  const DATA = [
    { text: "lemon", icon: mango },
    { text: "mango", icon: lemon },
  ];
  return (
    <View style={styles.top}>
      <View style={styles.top1}>
        {/* <Text>Enter text</Text> */}
        <View style={styles.sideBySide}>
          <TextInput placeholder="Enter text" />
          <MyButton color="red">
            {({ pressed }) => (
              <Text style={styles.text}>
                {pressed ? "Pressed!" : "Click here"}
              </Text>
            )}
          </MyButton>
        </View>
      </View>
      <FlatList
        style={styles.list}
        data={DATA}
        keyExtractor={(item) => item.text}
        renderItem={({ item }) => <Item text={item.text} iconSrc={item.icon} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    flex: 1,
    margin: 5,
    padding: 15,
    width: "100%",
  },
  top1: {
    flex: 0.1,
    margin: 5,
    padding: 15,
    backgroundColor: "yellow",
    width: "100%",
  },
  list: {
    flex: 0.9,
    margin: 5,
    // padding: 15,
    backgroundColor: "yellow",
    width: "100%",
  },
  sideBySide: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    // justifyContent: "center",
    // alignContent:"center",
    // alignItems: "center",
    justifyContent: "space-between",
    // flexWrap: "wrap"
  },
});
