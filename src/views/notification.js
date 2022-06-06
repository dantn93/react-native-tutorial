import React, { Component, useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Alert, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';

async function requestUserPermission() {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    } else {
      console.log('Not authoziation');
    }
  } catch (error) {
    console.log("ERROR: ", error);
  }
}

async function getToken() {
  const deviceToken = await messaging().getToken();
  console.log('DEVICE TOKEN: ', deviceToken);
}

async function messageHandler() {

}

export default NotificationScreen = () => {
  useEffect(() => {
    const messageHandler = async () => {
      await requestUserPermission();
      await getToken();

      messaging().onNotificationOpenedApp((remoteMessage) => {
        Alert.alert('Open notification!');
        console.log('REMOTE MESSAGE: ', remoteMessage);
      });

      const unsubscribe = messaging().onMessage(async (remoteMessage) => {
        console.log('FOREGROUND: ', remoteMessage);
        Alert.alert(remoteMessage.notification.title, remoteMessage.notification.body);
      });
      return unsubscribe;
    }
    messageHandler();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ width: '100%', height: '100%' }}>
        <Text>Notification</Text>
      </View>
    </SafeAreaView>
  );
};
