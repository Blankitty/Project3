import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export default function HoneyWave() {
  const move = useSharedValue(0);

  useEffect(() => {
    move.value = withRepeat(
      withTiming(1, { duration: 6000 }),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: move.value * 60 - 30 },
      { scaleX: 1.2 + move.value * 0.2 },
    ],
    opacity: 0.35,
  }));

  return (
    <Animated.View style={[styles.wave, animatedStyle]}>
      <LinearGradient
        colors={['#FFD54F', '#FFB300', '#FFD54F']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={StyleSheet.absoluteFill}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wave: {
    position: 'absolute',
    bottom: -20,
    left: -40,
    right: -40,
    height: 60,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
  },
});
