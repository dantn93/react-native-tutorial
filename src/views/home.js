import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';

export default Home = ({ route, navigation }) => {
  const { email } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Header */}
      <View style={{ height: '8%', width: '100%', borderWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <TouchableOpacity
          style={{ height: '100%', aspectRatio: 1.7, borderWidth: 1, alignItems: 'center', flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Image source={require('../images/backbutton.png')} resizeMode="stretch" />
          <Text style={{ fontSize: 20, fontWeight: '500', marginLeft: 10 }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ height: '100%', aspectRatio: 1.7, borderWidth: 1, alignItems: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 10 }}
          onPress={() => {
            navigation.navigate('Setting')
          }}
        >
          <Image source={require('../images/settingbutton.png')} resizeMode={'stretch'} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>Home screen</Text>
        <Text style={{fontSize: 20}}>Email: <Text>{email}</Text></Text>
      </View>
    </SafeAreaView>
  )
}