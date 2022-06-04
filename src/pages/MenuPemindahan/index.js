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
                    maxWidth: windowWidth - 50,
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

                <SubMenuIsi a='- ' b='Surat Permohonan yang bersangkutan' />
                <SubMenuIsi a='- ' b='Surat Permohonan Persetujuan dari PDW lama' />
                <SubMenuIsi a='- ' b='Surat Persetujuan dari PDW/Angkatan Lain/Kementerian/Lembaga Baru' />
                <SubMenuIsi a='- ' b='PPK 2 tahun teriakhir' />
                <SubMenuIsi a='- ' b='DRH' />
                <SubMenuIsi a='- ' b='Fotokopi Karpeg' />
                <SubMenuIsi a='- ' b='Fotokopi Kep CPNS dan PNS' />
                <SubMenuIsi a='- ' b='Fotokopi Kenaikan Pangkat Terakhir' />
                <SubMenuIsi a='- ' b='SKHP/Litsus/Keterangan Tidak Sedang dalam Proses Pidana' />
                <SubMenuIsi a='- ' b='Kep NIP baru' />
                <SubMenuIsi a='- ' b='Ijazah Diklatpim Tk. IV/PKP (Pindah antar Kementerian/Lembaga' />



            </ScrollView>




        </SafeAreaView>
    )
}

