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
                    fontSize: windowWidth / 20,
                }}>{a}</Text>
                <Text style={{
                    color: colors.white,
                    fontFamily: fonts.secondary[600],
                    fontSize: windowWidth / 20,
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
                    fontSize: windowWidth / 25,
                }}>{a}</Text>
                <Text style={{
                    left: 5,
                    color: colors.black,
                    fontFamily: fonts.secondary[400],
                    fontSize: windowWidth / 25,
                    textAlign: 'justify',
                    maxWidth: windowWidth - 25,
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

                <SubMenuIsi a='- ' b='RH singkat terbaru' />
                <SubMenuIsi a='- ' b='Fotokopi Kep Pengangkatan PNS' />
                <SubMenuIsi a='- ' b='Fotokopi Kep KP terakhir' />
                <SubMenuIsi a='- ' b='Fotokopi Kep/Sprin Jabatan terakhir' />
                <SubMenuIsi a='- ' b='Fotokopi STLUD bagi lulusan Ujian Dinas Tk.I' />
                <SubMenuIsi a='- ' b='Fotokopi STLUPKP bagi lulusan UPKP Tk. Sarjana' />
                <SubMenuIsi a='- ' b='Fotokopi ijazah Sarjana,Transkrip nilai dan Akreditasi dari BAN-PT' />
                <SubMenuIsi a='- ' b='Fotokopi lulus Uji Kompetensi bagi yang menduduki jabatan fungsional' />



            </ScrollView>




        </SafeAreaView>
    )
}

