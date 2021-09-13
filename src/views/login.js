import React, { Component, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Dimensions,
  TextInput,
  Image
} from 'react-native';
const windownWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Login = ({ navigation }) => {
  const [getPasswordVisible, setPasswordVisible] = useState(false);
  const [getEmail, setEmail] = useState('');
  return(
    <ImageBackground style={{height: '100%', width: '100%'}} source={require('../images/background.png')} resizeMode='stretch'>
      <StatusBar barStyle="light-content"/>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{height: '100%', width: '100%'}}>
          {/* Email & password */}
          <View style={{width: '100%', height: '20%', marginTop: 0.3 * windowHeight, alignItems: 'center'}}>
            {/* Email */}
            <View style={{ width: '70%', height: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={{color: 'white'}}>Email</Text>
              <TextInput 
                style={{ color: 'white', height: '100%', width: '70%', borderBottomColor: 'white', borderBottomWidth: 1, textAlign: 'right'}}
                autoCapitalize='none'
                value={getEmail}
                onChangeText={setEmail}
              />
            </View>
            {/* Password */}
            <View style={{ width: '70%', height: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10}}>
              <Text style={{color: 'white'}}>Password</Text>
              <TextInput 
                style={{ color: 'white', height: '100%', width: '70%', borderBottomColor: 'white', borderBottomWidth: 1, textAlign: 'right', paddingRight: 40}}
                autoCapitalize='none'
                secureTextEntry={getPasswordVisible? false : true}
              />
              <TouchableOpacity 
                style={{height: '100%', width: 30, position: 'absolute', right: 0}}
                onPress={() => {
                  setPasswordVisible(!getPasswordVisible)
                }}
              >
                { getPasswordVisible?
                  <Image source={require('../images/invisible.png')} style={{width: '100%', height: '100%'}} resizeMode="contain"/>
                  :
                  <Image source={require('../images/visible.png')} style={{width: '100%', height: '100%'}} resizeMode="contain"/>
                }
              </TouchableOpacity>
            </View>
          </View>

          {/* Buttons login & register */}
          <View style={{ width: '100%', height: '20%', marginTop: 0.15 * windowHeight, justifyContent: 'center', alignItems: 'center'}}>
            {/* Dang nhap */}
            <TouchableOpacity
              style={{ width: '60%', height: '30%', borderColor: 'white', borderWidth: 1, borderRadius: 100, backgroundColor: '#18A2EB', justifyContent: 'center', alignItems: 'center'}}
              onPress={() => {
                navigation.navigate('HomeTabs');
              }}
            >
              <Text style={{color: 'white', fontSize: 20}}>Đăng nhập</Text>
            </TouchableOpacity>
            {/* Dang ky */}
            <TouchableOpacity style={{ borderRadius: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4D33B9', marginTop: 20, width: '60%', height: '30%', borderColor: 'white', borderWidth: 1}}>
              <Text style={{color: 'white', fontSize: 20}}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}