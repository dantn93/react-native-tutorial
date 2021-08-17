/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{ }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ with: '100%', height: '100%'}}>
        {/* Row thứ nhất */}
        <View style={{ flexDirection: 'row', with: '100%', height: '16.6%', borderWidth: 1}}>
          {/* Ô vuông chứa hình màu đỏ */}
          <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '33%'}}>
            {/* Ô vuông màu đỏ có bo góc */}
            <View style={{ borderRadius: 15, width: '80%', height: '80%', backgroundColor: 'red'}}>

            </View>
          </View>
          {/* Hình chữ nhập chứa chữ Tôi tên là Nam */}
          <View style={{ height: '100%', width: '67%', borderLeftWidth: 1}}>
            <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 15}}>Tôi tên là Nam</Text>
          </View>
        </View>

        {/* Row thứ 2 */}
        <View style={{ flexDirection: 'row', with: '100%', height: '16.6%', borderWidth: 1, borderTopWidth: 0}}>
          {/* Hình chữ nhật đầu */}
          <View style={{ justifyContent: 'center', alignItems: 'center', width: '66%', height: '100%', borderRightWidth: 1}}>
            <Text style={{ fontSize: 20, fontWeight: '700'}}>Text nằm ở giữa</Text>
          </View>
          {/* Ô vuông thứ 2 */}
          <View style={{width: '34%', height: '100%'}}>
            <View style={{height: '50%', with: '100%', backgroundColor: 'green'}}></View>
            <View style={{height: '50%', with: '100%', backgroundColor: 'blue'}}></View>
          </View>
        </View>

        {/* Row thứ 3 */}
        <View style={{ flexDirection: 'row', with: '100%', height: '16.6%', borderWidth: 1, borderTopWidth: 0}}>
          <View style={{height: '100%', width: '33.3%', backgroundColor: '#EFCC0F', borderRightWidth: 1}}></View>
          <View style={{height: '100%', width: '33.3%', backgroundColor: '#0FBBEF', borderRightWidth: 1}}></View>
          <View style={{height: '100%', flex: 1, backgroundColor: '#81E0E0'}}></View>
        </View>

        {/* Row thứ 4 */}
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '34%', width: '100%'}}>
          <View style={{width: '60%', height: '60%', backgroundColor: '#692BB1'}}>
            <View style={{backgroundColor: 'red', height: '50%', aspectRatio: 1, position: 'absolute', right: -20, top: -20}}></View>
          </View>
        </View>

        {/* Row thứ 5 */}
        <View style={{with: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', height: '50%'}}>
            <TouchableOpacity style={{ backgroundColor: '#A29E9E', justifyContent: 'center', alignItems: 'center', width: '45%', height: '100%', borderWidth: 3, borderColor: 'red', borderRadius: 50}}>
              <Text style={{fontSize: 25, fontWeight: '500'}}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#081AF2', width: '45%', height: '100%', borderWidth: 3, borderRadius: 50}}>
              <Text style={{ color: 'white', fontSize: 25, fontWeight: '500'}}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
