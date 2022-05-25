import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { windowHeight, windowWidth } from '../../utils/fonts';
import { colors } from '../../utils/colors';

export default function ({ route }) {

    const id = route.params.id;

    const data = [
        {
            image: require('../../assets/Slide1.png'),
        },
        {
            image: require('../../assets/Slide2.png'),
        },
        {
            image: require('../../assets/Slide3.png'),
        },
        {
            image: require('../../assets/Slide4.png'),
        },
        {
            image: require('../../assets/Slide5.png'),
        },
        {
            image: require('../../assets/Slide6.png'),
        },
        {
            image: require('../../assets/Slide7.png'),
        },
        {
            image: require('../../assets/Slide8.png'),
        },
        {
            image: require('../../assets/Slide9.png'),
        },
        {
            image: require('../../assets/Slide10.png'),
        },
        {
            image: require('../../assets/Slide11.png'),
        },
        {
            image: require('../../assets/Slide12.png'),
        },
        {
            image: require('../../assets/Slide13.png'),
        },
    ]

    return (
        <SafeAreaView style={{
            backgroundColor: colors.white,
        }}>
            <Image source={data[id].image} style={{

                width: windowWidth,
                height: windowHeight,
                resizeMode: 'contain'
            }} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})