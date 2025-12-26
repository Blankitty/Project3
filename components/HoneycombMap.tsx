import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Defs, LinearGradient, Polygon, Stop } from 'react-native-svg';

interface CellProps {
  level: number;
  progress: number; // 0 ~ 1
  onPress: () => void;
}

function HexCell({ level, progress, onPress }: CellProps) {
  const fillHeight = 100 * progress;

  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
      <View style={styles.hexWrapper}>
        <Svg width={90} height={80} viewBox="0 0 100 86">
          <Defs>
            <LinearGradient id="honey" x1="0" y1="0" x2="0" y2="1">
              <Stop offset={`${100 - fillHeight}%`} stopColor="#FFE082" />
              <Stop offset="100%" stopColor="#FFB300" />
            </LinearGradient>
          </Defs>

          <Polygon
            points="25,0 75,0 100,43 75,86 25,86 0,43"
            fill="url(#honey)"
          />
        </Svg>

        <Text style={styles.levelText}>{level}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function HoneycombMap({
  onSelect,
}: {
  onSelect: (level: number) => void;
}) {
  const cells = [
    { level: 1, progress: 1 },
    { level: 2, progress: 0.6 },
    { level: 3, progress: 0.2 },
    { level: 4, progress: 0 },
    { level: 5, progress: 0 },
    { level: 6, progress: 0 },
  ];

  return (
    <View style={styles.container}>
      {cells.map(c => (
        <HexCell
          key={c.level}
          level={c.level}
          progress={c.progress}
          onPress={() => onSelect(c.level)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
  hexWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelText: {
    position: 'absolute',
    fontWeight: 'bold',
    color: '#5c3b00',
    fontSize: 16,
  },
});
