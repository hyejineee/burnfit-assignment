import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {ReactNode} from 'react';
import {LayoutChangeEvent, StyleSheet, View} from 'react-native';
import {useSetMonthlyMode} from './CalendarContext';

type Props = {
  children?: ReactNode[];
  onSwipeRight: () => void;
  onSwipeLeft: () => void;
};
export default function CalendarAnimation({
  children,
  onSwipeLeft,
  onSwipeRight,
}: Props) {
  const absolute = useSharedValue({x: 0, y: 0});
  const isFull = useSharedValue(true);
  const isMonthlyMode = useSharedValue(true);
  const setMonthlyMode = useSetMonthlyMode();

  const direction = useSharedValue('');

  const monthlyStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isFull.value && isMonthlyMode ? 1 : 0, {
        duration: 500,
      }),
      height: withTiming(isFull.value && isMonthlyMode ? '100%' : '0%', {
        duration: 500,
      }),
    };
  });

  const weeklyStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(isFull.value && isMonthlyMode ? '0%' : '100%', {
        duration: 500,
      }),
      opacity: withTiming(isFull.value && isMonthlyMode ? 0 : 100, {
        duration: 500,
      }),
      zIndex: isFull.value ? -1 : 99,
    };
  });

  const gesture = Gesture.Pan()
    .onBegin(e => {
      'worklet';

      absolute.value = {
        x: e.absoluteX,
        y: e.absoluteY,
      };
    })
    .onChange(e => {
      'worklet';

      // swipe up
      if (absolute.value.y - 50 > e.absoluteY) {
        if (!isFull.value) {
          return;
        }
        isFull.value = false;
        return;
      }

      // swipe down
      if (absolute.value.y + 50 < e.absoluteY) {
        if (isFull.value) {
          return;
        }
        isFull.value = true;
        return;
      }

      // swipe right
      if (absolute.value.x + 100 < e.absoluteX) {
        direction.value = 'r';
        return;
      }

      // swipe left
      if (absolute.value.x - 100 > e.absoluteX) {
        direction.value = 'l';
        return;
      }
    })
    .runOnJS(true)
    .onFinalize(() => {
      'worklet';

      switch (direction.value) {
        case 'r': {
          onSwipeRight();

          break;
        }
        case 'l': {
          onSwipeLeft();
          break;
        }
        default: {
        }
      }
      direction.value = '';
    });

  const onLayout = (e: LayoutChangeEvent) => {
    const {height} = e.nativeEvent.layout;

    if (height < 50) {
      isMonthlyMode.value = false;
      setMonthlyMode(false);
      return;
    }

    isMonthlyMode.value = true;
    setMonthlyMode(true);
  };

  return (
    <>
      <GestureDetector gesture={gesture}>
        <View style={styles.wrapper}>
          <Animated.View
            style={[{maxHeight: 200}, monthlyStyles]}
            onLayout={onLayout}>
            {children?.[0]}
          </Animated.View>

          <Animated.View style={[styles.weekly, weeklyStyles]}>
            {children?.[1]}
          </Animated.View>
        </View>
      </GestureDetector>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '200%',
  },
  weekly: {
    position: 'absolute',
    width: '100%',
    zIndex: -999,
  },
});
