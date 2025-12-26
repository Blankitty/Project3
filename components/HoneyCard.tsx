import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedProps, withTiming } from 'react-native-reanimated';
import Svg, { ClipPath, Defs, Polygon, Rect } from 'react-native-svg';

// Animated SVG Rect
const AnimatedRect = Animated.createAnimatedComponent(Rect);

interface HoneyCardProps {
  title: string;
  desc: string;
  progress: number; // 0 ~ 1
  onPress: (x: number, y: number) => void;
}

export default function HoneyCard({ title, desc, progress, onPress }: HoneyCardProps) {
  const WIDTH = 140;
  const HEIGHT = 120;

  // AnimatedProps로 SVG 속성 애니메이션
  const animatedProps = useAnimatedProps(() => ({
    height: withTiming(progress * HEIGHT, { duration: 600 }),
    y: withTiming(HEIGHT - progress * HEIGHT, { duration: 600 }),
  }));

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={e => {
        const { pageX, pageY } = e.nativeEvent;
        onPress(pageX, pageY);
      }}
    >
      <View style={{ marginBottom: 18, alignItems: 'center' }}>
        <Svg width={WIDTH} height={HEIGHT}>
          <Defs>
            <ClipPath id="hexClip">
              <Polygon
                points={`${WIDTH / 2},0 ${WIDTH},${HEIGHT / 4} ${WIDTH},${HEIGHT * 3 / 4} ${WIDTH / 2},${HEIGHT} 0,${HEIGHT * 3 / 4} 0,${HEIGHT / 4}`}
              />
            </ClipPath>
          </Defs>

          {/* 꿀 진행률 */}
          <AnimatedRect
            x={0}
            width={WIDTH}
            fill="#FFC107"
            clipPath="url(#hexClip)"
            animatedProps={animatedProps} // 여기서 애니메이션 적용
          />

          {/* 육각형 테두리 */}
          <Polygon
            points={`${WIDTH / 2},0 ${WIDTH},${HEIGHT / 4} ${WIDTH},${HEIGHT * 3 / 4} ${WIDTH / 2},${HEIGHT} 0,${HEIGHT * 3 / 4} 0,${HEIGHT / 4}`}
            fill="none"
            stroke="#FFB300"
            strokeWidth={3}
          />
        </Svg>

        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDesc}>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 8 },
  cardDesc: { fontSize: 12, color: '#666', textAlign: 'center' },
});
