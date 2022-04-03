import React, { Component, useRef, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Animated
} from 'react-native';
import { Easing } from 'react-native-reanimated';

export default Anim = () => {
  const topMotion = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    setTimeout(() => {
      Animated.timing(
        topMotion,
        {
          toValue: 500,
          duration: 1000,
          useNativeDriver: false,
          // 1. Di chuyển tịnh tiến đều
          // easing: Easing.linear

          // 2. Di chuyển ban đầu chậm, tăng dần về phía sau
          // easing: Easing.ease
          // easing: Easing.quad
          // easing: Easing.cubic
          // easing: Easing.poly(4)
          // easing: Easing.sin
          // easing: Easing.circle

          // 3. Lùi lại một chút rồi di chuyển tới
          // easing: Easing.back(0.8)

          // 4. Di chuyển với vận tốc thay đổi
          // easing: Easing.bezier(.08,.87,.91,.1)

          // 5. Nảy lên
          // easing: Easing.bounce
        }
      ).start();
    }, 1000);

  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, borderWidth: 5, borderColor: 'red' }}>
        <Animated.View style={{ marginTop: topMotion, backgroundColor: 'blue', width: 150, height: 150 }}></Animated.View>
      </View>
    </SafeAreaView>
  );
}