import React, { Component, useState, useEffect, useRef } from 'react'
import {
	SafeAreaView,
	View,
	Text,
	Image,
	ScrollView,
	Dimensions
} from 'react-native';
const { width: screenWidth } = Dimensions.get('window');

export default PictureList = () => {
	const [imageList, setImageList] = useState([]);
	const [currentImage, setCurrentImage] = useState(0);
	const stepCarousel = useRef(null);

	useEffect(() => {
		//1. Load data từ server
		const data = [
			{
				image: <Image key={'0'} source={require('../images/slider/image-0.png')} resizeMode='stretch' style={{ width: screenWidth, height: '100%' }} />,
				type: "png",
				camera: "Sony"
			},
			{
				image: <Image source={require('../images/slider/image-1.png')} resizeMode='stretch' style={{ width: screenWidth, height: '100%' }} />,
				type: "jpg",
				camera: "Fujifilm"
			},
			{
				image: <Image source={require('../images/slider/image-2.png')} resizeMode='stretch' style={{ width: screenWidth, height: '100%' }} />,
				type: "JPEG",
				camera: "Canon"
			},
			{
				image: <Image source={require('../images/slider/image-3.png')} resizeMode='stretch' style={{ width: screenWidth, height: '100%' }} />,
				type: "gif",
				camera: "Sony"
			},
			{
				image: <Image source={require('../images/slider/image-4.png')} resizeMode='stretch' style={{ width: screenWidth, height: '100%' }} />,
				type: "png",
				camera: "Canon"
			},
			{
				image: <Image source={require('../images/slider/image-5.png')} resizeMode='stretch' style={{ width: screenWidth, height: '100%' }} />,
				type: "png",
				camera: "Sony alpha"
			},
			{
				image: <Image source={require('../images/slider/image-6.png')} resizeMode='stretch' style={{ width: screenWidth, height: '100%' }} />,
				type: "jpg",
				camera: "Fujifilm"
			},
			{
				image: <Image source={require('../images/slider/image-7.png')} resizeMode='stretch' style={{ width: screenWidth, height: '100%' }} />,
				type: "png",
				camera: "Canon"
			},
			{
				image: <Image source={require('../images/slider/image-8.png')} resizeMode='stretch' style={{ width: screenWidth, height: '100%' }} />,
				type: "png",
				camera: "Iphone 11 Pro"
			},
			{
				image: <Image source={require('../images/slider/image-9.png')} resizeMode='stretch' style={{ width: screenWidth, height: '100%' }} />,
				type: "png",
				camera: "Fufifilm"
			},
		];

		//2. Cap nhat len state cua screen
		setImageList(data);
	}, [])

	useEffect(() => {
		if(imageList.length > 0) {
			let index = 0;
			setInterval(() => {
				stepCarousel.current.scrollTo({ x: index * screenWidth, y: 0, animated: true });
				index += 1;
				if(index === imageList.length) {
					index = 0;
				}
			}, 3000);
		}
	}, [imageList])

	const handleScroll = (e) => {
		if(!e) {
			return;
		}
		const { nativeEvent } = e;
		if (nativeEvent && nativeEvent.contentOffset) {
			const currentOffset = nativeEvent.contentOffset.x;
			let imageIndex = 0;
			if(nativeEvent.contentOffset.x > 0) {
				imageIndex = Math.floor((nativeEvent.contentOffset.x + screenWidth / 2) / screenWidth);
			}
			setCurrentImage(imageIndex);
		}
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ flex: 1, alignItems: 'center' }}>
				<Text style={{ fontSize: 20 }}>Picture List</Text>
				{/* ScrollView */}
				<View style={{width: screenWidth, height: 200}}>
					<ScrollView
						horizontal
						// pagingEnabled
						contentContainerStyle={{ width: screenWidth * imageList.length, height: 200 }}
						onScroll={handleScroll}
						scrollEventThrottle={16}
						ref={stepCarousel}
					>
						{imageList.map((e, index) =>
							<View key={index.toString()}>
								{e.image}
							</View>
						)}
					</ScrollView>
				</View>
				{/* Hiển thị thông tin */}
				<Text style={{fontSize: 20, marginTop: 30}}>Index: {currentImage}</Text>
				<Text style={{fontSize: 20, marginTop: 10}}>Type: {imageList[currentImage]? imageList[currentImage].type: ""}</Text>
				<Text style={{fontSize: 20, marginTop: 10}}>Camera: {imageList[currentImage]? imageList[currentImage].camera: ""}</Text>
			</View>
		</SafeAreaView>
	);
}