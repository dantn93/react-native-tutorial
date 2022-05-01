import React, { Component, useState, useEffect } from 'react';
import {
	SafeAreaView,
	View,
	Text,
	Alert,
	Platform
} from 'react-native';
import messaging from '@react-native-firebase/messaging';

async function requestUserPermission() {
	const authStatus = await messaging().requestPermission();
	const enabled =
		authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
		authStatus === messaging.AuthorizationStatus.PROVISIONAL;

	if (enabled) {
		console.log('Authorization status:', authStatus);
	} else {
		console.log('Not authoziation');
	}
}

async function getToken() {
	const deviceToken = await messaging().getToken();
	console.log("DEVICE TOKEN: ", deviceToken);
}

export default NotificationScreen = () => {
	useEffect(async () => {
		await requestUserPermission();
		await getToken();

		messaging().onNotificationOpenedApp(remoteMessage => {
			Alert.alert('Open notification!');
			console.log("REMOTE MESSAGE: ", remoteMessage);
		})

		const unsubscribe = messaging().onMessage(async (remoteMessage) => {
			console.log("FOREGROUND: ", remoteMessage)
			Alert.alert("NOTIFICATION IN FORCEGROUND");
		});
		return unsubscribe;
	}, []);
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ width: '100%', height: '100%' }}>
				<Text>Notification</Text>
			</View>
		</SafeAreaView>
	)
}
