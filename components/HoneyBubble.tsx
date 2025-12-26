import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';

type Props = {
  size: number;
  left: number;
  delay: number;
};

export default function HoneyBubble({ size, left, delay }: Props) {
  const float = useSharedValue(0);

  useEffect(() => {
    float.value = withRepeat(
      withTiming(1, { duration: 2400 + delay }),
      -1,
      true
    );
  }, []);

  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: float.value * -10 }],
    opacity: 0.75,
  }));

  return (
    <Animated.View
      style={[
        styles.bubble,
        style,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          left,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  bubble: {
    position: 'absolute',
    bottom: 14,
    backgroundColor: '#FFB300',
  },
});
