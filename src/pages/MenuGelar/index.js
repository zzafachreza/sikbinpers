import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Dimensions,
    ImageBackground,
    SafeAreaView,
    Image,
    TouchableWithoutFeedback,
    ScrollView,
    TouchableOpacity,
    TouchableNativeFeedback,
    Linking,
    FlatList,
    PermissionsAndroid,
    StatusBar,
    Alert,
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts, windowHeight, windowWidth } from '../../utils/fonts';
import { storeData, getData } from '../../utils/localStorage';
import { Icon } from 'react-native-elements';


export default function () {

    const SubMenu = ({ a, b }) => {
        return (
            <View style={{
                backgroundColor: colors.secondary,
                flexDirection: 'row',
                padding: 10,
                marginVertical: 10,
            }}>
                <Text style={{
                    color: colors.white,
                    fontFamily: fonts.secondary[600],
                    fontSize: windowWidth / 30,
                    maxWidth: windowWidth / 1.2,
                }}>{a}</Text>
                <Text style={{
                    color: colors.white,
                    fontFamily: fonts.secondary[600],
                    fontSize: windowWidth / 30,
                    maxWidth: windowWidth / 1.2,
                }}>{b}</Text>
            </View>
        )
    }

    const SubMenuIsi = ({ a, b }) => {
        return (
            <View style={{
                flexDirection: 'row',
                left: 20,
                marginTop: 10,
            }}>
                <Text style={{
                    color: colors.black,
                    fontFamily: fonts.secondary[400],
                    fontSize: windowWidth / 30,
                }}>{a}</Text>
                <Text style={{
                    left: 5,
                    color: colors.black,
                    fontFamily: fonts.secondary[400],
                    fontSize: windowWidth / 30,
                    textAlign: 'justify',
                    maxWidth: windowWidth / 1.2,
                }}>{b}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            padding: 10,
        }}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <SubMenuIsi a='- ' b='Asli surat permohonan dari yang bersangkutan diketahui Dansatminkal.' />
                <SubMenuIsi a='- ' b='Surat usul dari Pangkotama/Kabalakpus' />
                <SubMenuIsi a='- ' b='Foto kopi ijazah dan akreditasi program studi yang disahkan oleh pejabat yang berwenang.' />
                <SubMenuIsi a='- ' b='Foto kopi Skep Pengangkatan PNS' />
                <SubMenuIsi a='- ' b='Foto kopi Skep Kenaikan Pangkat Terakhir' />



            </ScrollView>




        </SafeAreaView>
    )
}

