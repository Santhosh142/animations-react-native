import { useRef } from "react";
import { Animated, Button, StyleSheet, View } from "react-native";
const SIZE = 100;
export default function Animation4() {
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const slideRight = () => {
    Animated.timing(position, {
      toValue: { x: 150, y: 0 },
      duration: 500,
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
      <Button title="Slide right" onPress={slideRight} />
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
    width: SIZE,
    height: SIZE,
    backgroundColor: "coral",
  },
});
