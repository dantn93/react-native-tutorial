import React, { Component, useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput
} from 'react-native';

export default ValidationDemo = () => {
  const [email, onChangeEmail] = useState('');
  const [isValidEmail, setValidEmail] = useState(true);
  const [number, onChangeNumber] = useState("");
  const [isValidPhone, setValidPhone] = useState(true);

  const verifyEmail = (email) => {
    let regex = new RegExp(/([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])/);
    if(!email) return true;
    if (regex.test(email)) {
      return true;
    }
    return false;
  }

  const verifyPhoneNumber = (phone) => {
    let regex = new RegExp(/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/);
    if(!phone) return true;
    if(regex.test(phone)) {
      return true;
    }
    return false;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ padding: 10, fontSize: 20 }}>Email</Text>
      <TextInput
        style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
        onChangeText={(text) => {
          onChangeEmail(text);
          const isValid = verifyEmail(text);
          isValid? setValidEmail(true) : setValidEmail(false);
        }}
        value={email}
      />
      <Text style={{ padding: 10, fontSize: 20, color: 'red' }}>{isValidEmail? '' : 'Email is invalid!'}</Text>

      <Text style={{ padding: 10, fontSize: 20, marginTop: 40 }}>Phone number</Text>
      <TextInput
        style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
        onChangeText={(text) => {
          onChangeNumber(text);
          const isValid = verifyPhoneNumber(text);
          isValid? setValidPhone(true) : setValidPhone(false);
        }}
        value={number}
        keyboardType='numeric'
      />
      <Text style={{ padding: 10, fontSize: 20, color: 'red' }}>{isValidPhone? '' : 'Phone number is invalid!'}</Text>
    </SafeAreaView>
  )
}