import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';

type BeeProps = {
  top?: number;
  left?: number;
};

export default function Bee({ top = 20, left = 200 }: BeeProps) {
  const float = useSharedValue(0);
  const wing = useSharedValue(0);

  useEffect(() => {
    float.value = withRepeat(
      withTiming(1, { duration: 3000 }),
      -1,
      true
    );

    wing.value = withRepeat(
      withTiming(1, { duration: 300 }),
      -1,
      true
    );
  }, []);

  const beeStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: float.value * -12 },
      { rotate: `${float.value * 4 - 2}deg` },
    ],
  }));

  const wingStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${wing.value * 30 - 15}deg` }],
    opacity: 0.7,
  }));

  return (
    <Animated.View style={[styles.bee, beeStyle, { top, left }]}>
      {/* 날개 */}
      <Animated.View style={[styles.wing, styles.wingLeft, wingStyle]} />
      <Animated.View style={[styles.wing, styles.wingRight, wingStyle]} />

      {/* 몸통 */}
      <View style={styles.body}>
        <View style={styles.stripe} />
        <View style={styles.stripe} />
      </View>

      {/* 눈 */}
      <View style={styles.eyeLeft} />
      <View style={styles.eyeRight} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  bee: {
    position: 'absolute',
    width: 36,
    height: 28,
    zIndex: 10,
  },

  body: {
    width: 36,
    height: 22,
    backgroundColor: '#FFD54F',
    borderRadius: 14,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  stripe: {
    width: 4,
    height: '100%',
    backgroundColor: '#000',
    marginHorizontal: 3,
    borderRadius: 2,
    opacity: 0.8,
  },

  wing: {
    position: 'absolute',
    width: 14,
    height: 10,
    backgroundColor: '#E3F2FD',
    borderRadius: 10,
    top: 0,
  },

  wingLeft: {
    left: -6,
    transform: [{ rotate: '-20deg' }],
  },

  wingRight: {
    right: -6,
    transform: [{ rotate: '20deg' }],
  },

  eyeLeft: {
    position: 'absolute',
    width: 3,
    height: 3,
    backgroundColor: '#000',
    borderRadius: 2,
    left: 12,
    bottom: 10,
  },

  eyeRight: {
    position: 'absolute',
    width: 3,
    height: 3,
    backgroundColor: '#000',
    borderRadius: 2,
    left: 18,
    bottom: 10,
  },
});
