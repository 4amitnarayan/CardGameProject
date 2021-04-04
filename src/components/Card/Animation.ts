import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

export const useFlipAnimation = (flipped: boolean = false) => {
  const animationVal = useRef(new Animated.Value(0)).current;

  const frontInterpolate = animationVal.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = animationVal.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const animationConfig: Animated.SpringAnimationConfig = {
    toValue: 180,
    friction: 8,
    tension: 10,
    useNativeDriver: true,
  };

  const frontAnimationStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimationStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  useEffect(() => {
    Animated.spring(animationVal, {
      ...animationConfig,
      toValue: flipped ? 0 : 180,
    }).start();
  }, [flipped, animationConfig, animationVal]);

  return [frontAnimationStyle, backAnimationStyle];
};
