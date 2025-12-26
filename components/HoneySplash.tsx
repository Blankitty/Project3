import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

interface Props {
  x: number;
  y: number;
  onFinish: () => void;
}

export default function HoneySplash({ x, y, onFinish }: Props) {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(1);
  const translateY = useSharedValue(0);

  useEffect(() => {
    scale.value = withTiming(1.6, { duration: 300 });
    translateY.value = withTiming(-30, { duration: 400 });
    opacity.value = withTiming(0, { duration: 500 }, () => {
      onFinish();
    });
  }, []);

  const style = useAnimatedStyle(() => ({
    transform: [
      { translateX: x },
      { translateY: y + translateY.value },
      { scale: scale.value },
    ],
    opacity: opacity.value,
  }));

  return <Animated.View style={[styles.drop, style]} />;
}

const styles = StyleSheet.create({
  drop: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFB300',
  },
});
