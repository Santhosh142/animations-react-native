import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Animation1 from "./animations/animation1";
import Animation2 from "./animations/animation2";
import Animation3 from "./animations/animation3";

export default function App() {
  return (
    <View style={styles.container}>
      <Animation3 />
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
