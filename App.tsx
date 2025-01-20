import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Animation1 from "./animations/animation1";
import Animation2 from "./animations/animation2";
import Animation3 from "./animations/animation3";
import Animation4 from "./animations/animation4";
import { Animation5 } from "./animations/animation5";

export default function App() {
  return (
    <View style={styles.container}>
      <Animation5 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
