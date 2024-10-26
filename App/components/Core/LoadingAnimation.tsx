import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  useDerivedValue,
} from 'react-native-reanimated';

export default function App() {
  const scale = useSharedValue<number>(1);

  // highlight-start
  const rotate = useDerivedValue(() => {
    return `${scale.value * 2}rad`;
  });
  // highlight-end

  const scaleStyles = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  React.useEffect(() => {
    scale.value = withRepeat(
      withTiming(scale.value * 2, {duration: 1000}),
      -1,
      true,
    );
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, scaleStyles]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  ball: {
    height: 50,
    width: 50,
    backgroundColor: '#b58df1',
    borderRadius: 50,
  },
});
