import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';

export default function CuteHoneyWave() {
  const wave = useSharedValue(0);

  useEffect(() => {
    wave.value = withRepeat(
      withTiming(1, { duration: 5200 }),
      -1,
      true
    );
  }, []);

  const style = useAnimatedStyle(() => ({
    transform: [
      { translateX: wave.value * 50 - 25 },
      { scaleX: 1.15 + wave.value * 0.15 },
    ],
    opacity: 0.35,
  }));

  return (
    <Animated.View style={[styles.wave, style]}>
      <LinearGradient
        colors={['#FFE082', '#FFCA28', '#FFE082']}
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
    bottom: -24,
    left: -50,
    right: -50,
    height: 68,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
});
