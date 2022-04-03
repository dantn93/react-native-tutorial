import React, { Component, useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail } from '../redux/actions/updateAction'

const CallAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({data: "Data"})
      // console.log("Đã trả về data")
    }, 3000);
  }) 
}

const getData = async (setData) => {
  let data = await CallAPI()
  setData(data);
}

export default Home = ({ route, navigation }) => {
  const [value, setValue] = useState(1);
  const [data, setData] = useState({data: null})
  const [email, onChangeEmail] = React.useState("");
  const info = useSelector((state) => state.personalInfo)
  const dispatch = useDispatch();
  
  useEffect(() => {
    // console.log("Mới vào màn hình")
    getData(setData)

    console.log("INFO: ", info)
    return () => {
      // console.log("Huỷ màn hình này")
    }
  }, [])

  useEffect(() => {
    // console.log("Data đã lắng nghe là: ", data);
  }, [data])

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
        <Text>EMAIL: {info.email}</Text>
        <Text>SCORE: {info.score}</Text>
        <Text>ID: {info.id}</Text>
        <Text>ADDRESS: {info.address}</Text>
        {/* <Text style={{fontSize: 60, marginTop: 100}}>{value}</Text>
        <TouchableOpacity
          style={{width: '50%', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 100, marginTop: 50, backgroundColor: "#321A9A"}}
          onPress={() => {
            let newValue =  value + 1;
            setValue(newValue);
          }}
        >
          <Text style={{color: 'white', fontSize: 20}}>Đếm số</Text>
        </TouchableOpacity> */}
        <TextInput
          style={{height: 40, width: '90%', margin: 12, borderWidth: 1, padding: 10}}
          onChangeText={onChangeEmail}
          autoCapitalize='none'
          value={email}
        />
        <TouchableOpacity
          style={{width: 200, height: 40, borderWidth: 1, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}
          onPress={() => {
            console.log("EMAIL: ", email)
            dispatch(updateEmail(email))
          }}
        >
          <Text>Cập nhật</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  )
}