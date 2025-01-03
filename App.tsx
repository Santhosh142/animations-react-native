import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Animation1 from "./animations/animation1";

export default function App() {
  return (
    <View style={styles.container}>
      <Animation1 />
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
