import { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';

export default function BeeFloat() {
  const fly = useSharedValue(0);

  useEffect(() => {
    fly.value = withRepeat(
      withTiming(1, { duration: 4200 }),
      -1,
      true
    );
  }, []);

  const style = useAnimatedStyle(() => ({
    transform: [
      { translateY: Math.sin(fly.value * Math.PI * 2) * 10 },
      { translateX: Math.cos(fly.value * Math.PI * 2) * 14 },
      { rotate: `${Math.sin(fly.value * Math.PI * 2) * 8}deg` },
    ],
  }));

  return (
    <Animated.View style={[styles.container, style]}>
      <Image
        source={require('@/assets/images/bee.png')}
        style={styles.bee}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 18,
    left: 120,
    zIndex: 10,
  },
  bee: {
    width: 42,
    height: 42,
    resizeMode: 'contain',
  },
});
