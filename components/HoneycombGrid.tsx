import { StyleSheet, View } from 'react-native';
import HoneyCell from './HoneyCell';

const CELL_WIDTH = 120;
const CELL_HEIGHT = 104;
const HORIZONTAL_GAP = 8;
const VERTICAL_GAP = 20;

interface CellData {
  id: number;
  title: string;
  progress: number;
}

export default function HoneycombGrid({
  data,
  onPressCell,
}: {
  data: CellData[];
  onPressCell: (item: CellData) => void;
}) {
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;

        const offsetX =
          row % 2 === 1 ? (CELL_WIDTH + HORIZONTAL_GAP) / 2 : 0;

        return (
          <View
            key={item.id}
            style={{
              position: 'absolute',
              left:
                col * (CELL_WIDTH + HORIZONTAL_GAP) + offsetX,
              top:
                row * (CELL_HEIGHT * 0.75 + VERTICAL_GAP),
            }}
          >
            <HoneyCell
              title={item.title}
              progress={item.progress}
              onPress={() => onPressCell(item)}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 600,
  },
});
