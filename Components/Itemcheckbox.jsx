import { useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";

export default function Item({ isDone, text, onPress }) {
  const [isChecked, setIsChecked] = useState(isDone);
  return (
    // <View style={styles.item}>

    <Pressable
      onPress={onPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.2 : 1 }, styles.item]}
    >
      <Pressable onPress={() => setIsChecked(!isChecked)}>
      {({pressed})=>
        <View style={[styles.checkbox, isChecked && styles.checked,pressed && styles.pressed]}>
          {/* {isChecked && (
            <Text style={{ fontSize: 24, margin: -12, paddingLeft: 14 }}>
              {pressed?"o":"x"}
            </Text>
          )} */}
        </View>}
      </Pressable>
      <Text style={styles.title}>{text}</Text>
    </Pressable>
    // </View>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    height: 24,
    width: 24,
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 4,
  },
  checked: {
    backgroundColor: "coral",
  },
  pressed: {
    margin:2,
    height: 20,
    width: 20,
    // backgroundColor: "pink",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    flex: 1,
    fontSize: 32,
    textAlign: "right",
  },
  image: {
    width: 50,
    height: 50,
  },
});
