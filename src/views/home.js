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
import { updateEmail } from '../redux/actions/updateAction';
import axios from 'axios';
const URL = `http://localhost:3000`;

const CallAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: "Data" })
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
  const [data, setData] = useState({ data: null })
  const [email, onChangeEmail] = React.useState("");
  const info = useSelector((state) => state.personalInfo)
  const dispatch = useDispatch();

  const [response, setResponse] = useState(null);


  useEffect(() => {
    // console.log("Mới vào màn hình")
    getData(setData)
    return () => {
      // console.log("Huỷ màn hình này")
    }
  }, [])

  useEffect(() => {
    // console.log("Data đã lắng nghe là: ", data);
  }, [data])


  const callGETUrl = async () => {
    try {
      console.log("Calling... GET");
      const res = await axios.get(URL);
      // console.log("RES: ", res.data);
      setResponse(JSON.stringify(res.data))
    } catch (error) {
      setResponse(JSON.stringify(error.message));
    }
  }

  const callGETUrlWithId = async (id) => {
    console.log("Calling... GET with :id")
    try {
      const res = await axios.get(`${URL}/${id}`);
      setResponse(JSON.stringify(res.data))
    } catch (error) {
      setResponse(JSON.stringify(error.message));
    }
  }

  const callPost = async () => {
    console.log("Calling... POST");
    try {
      const res = await axios.post(`${URL}/`, {
        username: 'dan@gmail.com',
        age: 29,
        class: 'English'
      })
      setResponse(JSON.stringify(res.data))
    } catch (error) {
      setResponse(JSON.stringify(error.message));
    }
  }

  const callPostWithQuery = async (username, age) => {
    console.log("Calling... POST with query")
    try {
      const res = await axios.post(`${URL}/query?username=${username}&age=${age}`)
      setResponse(JSON.stringify(res.data))
    } catch (error) {
      setResponse(JSON.stringify(error.message));
    }
  }
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <TouchableOpacity style={{ width: 60, height: 30, borderWidth: 1, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginRight: 5 }}
          onPress={() => callGETUrl()}
        ><Text>GET</Text></TouchableOpacity>

        <TouchableOpacity style={{ width: 100, height: 30, borderWidth: 1, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginRight: 5 }}
          onPress={() => callGETUrlWithId(100)}
        ><Text>GET WITH ID</Text></TouchableOpacity>

        <TouchableOpacity style={{ width: 60, height: 30, borderWidth: 1, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginRight: 5 }}
          onPress={() => callPost()}
        ><Text>POST</Text></TouchableOpacity>

        <TouchableOpacity style={{ width: 60, height: 30, borderWidth: 1, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginRight: 5 }}
          onPress={() => callPostWithQuery('anh@gmail.com', 12)}
        ><Text>QUERY</Text></TouchableOpacity>
      </View>
      <Text style={{ fontSize: 20, borderWidth: 1, borderRadius: 2, height: 500, margin: 20 }}
        numberOfLines={0}
      >
        {response}
      </Text>
    </SafeAreaView>
  )
}