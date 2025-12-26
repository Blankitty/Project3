import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';
import Svg, { Polygon } from 'react-native-svg';

const SIZE = 120;
const HEIGHT = 104;

export default function HoneyCell({
  title,
  progress,
  onPress,
}: {
  title: string;
  progress: number; // 0 ~ 1
  onPress: () => void;
}) {
  const honeyStyle = useAnimatedStyle(() => ({
    height: withTiming(progress * HEIGHT, { duration: 800 }),
  }));

  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
      <View style={styles.container}>
        {/* 벌집 + 꿀 영역 */}
        <View style={styles.cell}>
          {/* 꿀 */}
          <Animated.View style={[styles.honey, honeyStyle]} />

          {/* 벌집 테두리 */}
          <Svg
            width={SIZE}
            height={HEIGHT}
            style={StyleSheet.absoluteFill}
          >
            <Polygon
              points="60,0 120,30 120,74 60,104 0,74 0,30"
              fill="none"
              stroke="#FFB300"
              strokeWidth={3}
            />
          </Svg>
        </View>

        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 12,
  },
  cell: {
    width: SIZE,
    height: HEIGHT,
    overflow: 'hidden',
    borderRadius: 12, // 꿀 잘리는 것 방지
  },
  honey: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFC83D',
  },
  title: {
    marginTop: 6,
    fontWeight: '600',
  },
});
