import React from 'react';
import {View, Button} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
  withRepeat,
} from 'react-native-reanimated';

export default function App() {
  const offset = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: offset.value * 10}],
    };
  });
  return (
    <View>
      <Animated.View
        style={[
          {width: 100, height: 100, backgroundColor: 'blue'},
          animatedStyle,
        ]}
      />
      <Button
        title="Move"
        onPress={() =>
          (offset.value = withSequence(
            withRepeat(withSpring(30, {duration: 500}), 3),
          ))
        }
      />
      <Button title="Move" onPress={() => (offset.value = withSpring(0))} />
    </View>
  );
}
