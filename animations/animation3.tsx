import React, { useRef } from "react";
import { Animated, View, Button, StyleSheet } from "react-native";

export default function Animation3() {
  const position = useRef(new Animated.ValueXY({ x: 0, y: -200 })).current;

  const slideDown = () => {
    Animated.timing(position, {
      toValue: { x: 0, y: 0 },
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [{ translateX: position.x }, { translateY: position.y }],
          },
        ]}
      />
      <Button title="Slide Down" onPress={slideDown} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "skyblue",
  },
});
