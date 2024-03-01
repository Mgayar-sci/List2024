import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import lemon from "../assets/lemon.png";
import mango from "../assets/mango.png";
import Item from "./Item";
import MyButton from "./MyButton";

export default Todo = () => {
  const DATA = [
    { text: "lemon", icon: mango },
    { text: "mango", icon: lemon },
  ];
  const icons = [mango, lemon];
  const [text, setText] = useState("");
  const [items, setItems] = useState(DATA);
  const [iconIndex, setIconIndex] = useState(0);
  const addItem = () => {
    // items.push({text:text});
    setItems([...items, { text: text, icon: icons[iconIndex] }]);
    setIconIndex((iconIndex + 1) % 2);
  };
  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };
  return (
    <View style={styles.top}>
      <View style={styles.top1}>
        {/* <Text>{text}</Text> */}
        <View style={styles.sideBySide}>
          <TextInput
            style={styles.input}
            placeholder="Enter text"
            onChangeText={(t) => setText(t)}
          />
          <MyButton color="red" onPress={addItem}>
            {({ pressed }) => (
              <Text style={styles.text}>
                {pressed ? "Adding" : "Add item"}
              </Text>
            )}
          </MyButton>
        </View>
      </View>
      <FlatList
        style={styles.list}
        data={items}
        keyExtractor={(item, index) => item.text+index}
        renderItem={({ item, index }) => <Item text={item.text} iconSrc={item.icon} onPress={()=>deleteItem(index)}/>}
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
  input: {
    flex: 1,
    backgroundColor: "white",
    fontSize: 32,
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
    // backgroundColor: "white",
    // justifyContent: "center",
    // alignContent:"center",
    // alignItems: "center",
    justifyContent: "space-between",
    // flexWrap: "wrap"
  },
});
