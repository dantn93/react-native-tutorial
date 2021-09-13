import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';

export default Home = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Header */}
      <View style={{ height: '8%', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View></View>
        <TouchableOpacity
          style={{ height: '100%', aspectRatio: 1.7, alignItems: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 10 }}
          onPress={() => {
            navigation.navigate('Setting')
          }}
        >
          <Image source={require('../images/settingbutton.png')} resizeMode={'stretch'} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>Home screen</Text>
      </View>
    </SafeAreaView>
  )
}