import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Todo from "./Components/Todo";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.sideBySide}>
        <Button
          title="previous component"
          onPress={() =>
            setVisibleComponent(
              (v) => (v - 1 + compArray.length) % compArray.length
            )
          }
        />
        <Button
          title="Next component"
          onPress={() => setVisibleComponent((v) => (v + 1) % compArray.length)}
        />
      </View>
      <View style={styles.component}>
        <Comp />
      </View> */}
      <Todo/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  component:{
    flex: 0.9,
    padding:2
  },
  text: {
    fontSize: 14,
    color: "white",
    fontStyle: "normal",
    fontWeight: "500",
  },
  wrapperCustom: {
    borderRadius: 2,
    padding: 8,
  },
  sideBySide: {
    flex: 0.1,
    flexDirection: "row",
    // justifyContent: "center",
    // alignContent:"center",
    alignItems: "center",
    // flexWrap: "wrap"
  },
});
