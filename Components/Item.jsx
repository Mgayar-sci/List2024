import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Item({ iconSrc, text, onPress }) {
  return (
    // <View style={styles.item}>
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <Image source={iconSrc} style={styles.image} />
        <Text style={styles.title}>{text}</Text>
      </TouchableOpacity>
    // </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    flex:1,
    fontSize: 32,
    textAlign: "right"
  },
  image: {
    width: 50,
    height: 50,
  },
});
