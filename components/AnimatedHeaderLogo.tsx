import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';

const AnimatedHeaderLogo: React.FC = () => {
  const leftWingAnim = useRef(new Animated.Value(0)).current;
  const rightWingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(leftWingAnim, {
            toValue: 1,
            duration: 250,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(rightWingAnim, {
            toValue: 1,
            duration: 250,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(leftWingAnim, {
            toValue: 0,
            duration: 250,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(rightWingAnim, {
            toValue: 0,
            duration: 250,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  }, []);

  const leftWingRotate = leftWingAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['-20deg', '-45deg'],
  });

  const rightWingRotate = rightWingAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['20deg', '45deg'],
  });

  return (
    <View style={styles.logoWrap}>
      <View style={styles.icon}>
        <Animated.View
          style={[
            styles.wing,
            styles.leftWing,
            { transform: [{ rotate: leftWingRotate }] },
          ]}
        />
        <Animated.View
          style={[
            styles.wing,
            styles.rightWing,
            { transform: [{ rotate: rightWingRotate }] },
          ]}
        />
        <View style={styles.body} />
      </View>

      <Text style={styles.logoText}>
        <Text style={styles.honey}>Honey</Text>
        <Text style={styles.buzz}>Buzz</Text>
      </Text>
    </View>
  );
};

export default AnimatedHeaderLogo;

const styles = StyleSheet.create({
  logoWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 34,
    height: 28,
    marginRight: 8,
    position: 'relative',
  },
  body: {
    position: 'absolute',
    left: '50%',
    top: 10,
    transform: [{ translateX: -10 }],
    width: 20,
    height: 14,
    borderRadius: 10,
    backgroundColor: '#f59e0b',
  },
  wing: {
    position: 'absolute',
    top: 4,
    width: 14,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  leftWing: {
    left: 0,
  },
  rightWing: {
    right: 0,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  honey: {
    color: '#f59e0b',
  },
  buzz: {
    color: '#000000',
  },
});
