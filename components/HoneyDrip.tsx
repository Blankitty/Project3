import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

export default function HoneyDrip({ onFinish }: { onFinish: () => void }) {
  const scaleY = useSharedValue(0);
  const opacity = useSharedValue(1);

  useEffect(() => {
    scaleY.value = withTiming(
      1,
      {
        duration: 700,
        easing: Easing.out(Easing.cubic),
      },
      () => {
        opacity.value = withTiming(0, { duration: 300 }, () => {
          onFinish();
        });
      }
    );
  }, []);

  const style = useAnimatedStyle(() => ({
    transform: [{ scaleY: scaleY.value }],
    opacity: opacity.value,
  }));

  return <Animated.View style={[styles.drip, style]} />;
}

const styles = StyleSheet.create({
  drip: {
    position: 'absolute',
    top: 0,
    left: '30%',
    width: '40%',
    height: 36,
    backgroundColor: '#FFB300',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    transformOrigin: 'top',
  },
});
