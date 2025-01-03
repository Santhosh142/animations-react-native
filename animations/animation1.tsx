import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const SIZE = 100.0;
const Animation1 = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [
        { scale: scale.value },
        { rotate: `${progress.value * 2 * Math.PI}rad` },
      ],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withTiming(0.5, { duration: 1000 }), -1, true);
    scale.value = withRepeat(withSpring(3, { duration: 1000 }), -1, true);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            height: SIZE,
            width: SIZE,
            backgroundColor: "blue",
            borderRadius: (scale.value * 10) / 2,
          },
          reanimatedStyle,
        ]}
      ></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Animation1;
