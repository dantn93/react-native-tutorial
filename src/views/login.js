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
const SIGN_IN = 'SIGN_IN';
const GET_STARTED = 'GET_STARTED';

export default Login = ({ navigation }) => {
  const [page, setPage] = useState(SIGN_IN);
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <View style={{ height: '25%', width: '100%' }}>
        <RedComponent page={page} setPage={setPage} />
      </View>
      <View style={{ height: '45%', width: '100%', backgroundColor: '#F5F5F5' }}>
        {page === SIGN_IN ? <GreenComponent /> : null}
      </View>
      <View style={{ flex: 1 }}>
        <BlueComponent />
      </View>
    </View>
  );
}

const BlueComponent = () => {
  
  return (
    <View style={{ width: '100%', height: '100%' }}>
      {console.log("BLUE COMPONENT")}
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 40, width: windownWidth - 60, marginLeft: 30 }}>
        <View style={{ height: 1, width: '30%', backgroundColor: '#707070' }}></View>
        <Text>  Or connect with  </Text>
        <View style={{ height: 1, width: '30%', backgroundColor: '#707070' }}></View>
      </View>
      <View style={{ height: 50, width: windownWidth - 60, marginLeft: 30, marginTop: 20, flexDirection: 'row' }}>
        <TouchableOpacity>
          <Image source={require('../images/google.png')} resizeMode='stretch' style={{ width: 0.5 * (windownWidth - 60) - 3, height: '100%', }} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../images/apple.png')} resizeMode='stretch' style={{ width: 0.5 * (windownWidth - 60) - 3, height: '100%', marginLeft: 6 }} />
        </TouchableOpacity>
      </View>

      <View style={{ height: 50, width: windownWidth - 60, marginLeft: 30, marginTop: 6, flexDirection: 'row' }}>
        <TouchableOpacity>
          <Image source={require('../images/twitter.png')} resizeMode='stretch' style={{ width: 0.5 * (windownWidth - 60) - 3, height: '100%', }} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../images/facebook.png')} resizeMode='stretch' style={{ width: 0.5 * (windownWidth - 60) - 3, height: '100%', marginLeft: 6 }} />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const GreenComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwdHidden, setPWDHidden] = useState(true);


  return (
    <View style={{ height: '100%', width: '100%', justifyContent: 'center' }}>
      {console.log("GREEN COMPONENT")}
      {/* Login in your account. */}
      <Text style={{ fontSize: 24, marginLeft: 30 }}>Login in your account.</Text>
      {/* Email */}
      <View style={{ width: windownWidth - 60, height: 45, marginTop: 20, marginLeft: 30, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('../images/email.png')} resizeMode='stretch' style={{ width: 20, height: 16, marginLeft: 15 }} />
        <TextInput
          style={{ height: '100%', flex: 1, marginLeft: 10, fontSize: 16 }}
          autoCapitalize={false}
          placeholder='E-mail'
        />
      </View>
      {/* Password */}
      <View style={{ width: windownWidth - 60, height: 45, marginTop: 20, marginLeft: 30, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('../images/lock.png')} resizeMode='stretch' style={{ width: 18, height: 20, marginLeft: 15 }} />
        <TextInput
          style={{ height: '100%', flex: 1, marginLeft: 10, fontSize: 16 }}
          autoCapitalize={false}
          placeholder='Password'
          secureTextEntry={pwdHidden ? true : false}
        />
        <TouchableOpacity style={{ height: '100%', aspectRatio: 1, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => setPWDHidden(!pwdHidden)}
        >
          <Image source={require('../images/password-eye.png')} resizeMode='stretch' style={{ width: 20, height: 15 }} />
        </TouchableOpacity>
      </View>

      {/* Forget password ? */}
      <View style={{ width: windownWidth - 60, height: 30, marginTop: 20, marginLeft: 30, flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={{ position: 'absolute', right: 0 }}>
          <Text style={{ color: '#707070' }}
          >Forget password ?</Text>
        </TouchableOpacity>
      </View>
      {/* Button Login */}
      <TouchableOpacity style={{ height: 50, width: windownWidth - 60, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4D8D6E', marginLeft: 30, marginTop: 10, borderRadius: 100 }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Login</Text>
      </TouchableOpacity>

    </View>
  );
}
const RedComponent = ({ page, setPage }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      {console.log("RED COMPONENT")}
      {/* Red component */}
      <View style={{ width: '100%', height: '100%' }}>
        <View style={{ width: '100%', flex: 1, backgroundColor: '#4D8D6E', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 50, fontWeight: '600', color: '#FFFFFF' }}>wasty.</Text>
          <Text style={{ color: '#FFFFFF' }}>think for nature</Text>
        </View>
        <View style={{ height: 50, flexDirection: 'row', backgroundColor: 'white' }}>
          <TouchableOpacity style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
            onPress={() => { setPage(SIGN_IN) }}
            disabled={page === SIGN_IN ? true : false}
          >
            <Text style={{ fontSize: 20, color: '#4D8D6E' }}>Sign In</Text>
            {page === SIGN_IN ? <View style={{ position: 'absolute', bottom: 0, height: 3, width: '100%', backgroundColor: '#4D8D6E' }}></View> : null}
          </TouchableOpacity>

          <TouchableOpacity style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
            onPress={() => { setPage(GET_STARTED) }}
            disabled={page === GET_STARTED ? true : false}
          >
            <Text style={{ fontSize: 20, color: '#4D8D6E' }}>Get started</Text>
            {page === GET_STARTED ? <View style={{ position: 'absolute', bottom: 0, height: 3, width: '100%', backgroundColor: '#4D8D6E' }}></View> : null}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}