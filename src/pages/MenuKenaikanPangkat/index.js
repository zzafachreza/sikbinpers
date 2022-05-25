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
                <SubMenu a="a. " b="Reguler" />
                <SubMenuIsi a='- ' b='Fotokopi Kartu Pegawai' />
                <SubMenuIsi a='- ' b='Fotokopi Keputusan Pengangkatan CPNS dan PNS' />
                <SubMenuIsi a='- ' b='Fotokopi Keputusan/Surat Perintah Jabatan' />
                <SubMenuIsi a='- ' b='Fotokopi Ijazah Pendidikan Umum Terakhir' />
                <SubMenuIsi a='- ' b='Fotokopi Ijazah Diklatsarmil dan Sumpah/Janji Pegawai (KP Pertama)' />
                <SubMenuIsi a='- ' b='PPK dan SKP 2 Tahun Terakhir' />
                <SubMenuIsi a='- ' b='Fotokopi Surat Perintah Tugas Belajar' />
                <SubMenuIsi a='- ' b='Fotokopi STLUD Tk. I' />
                <SubMenuIsi a='- ' b='Fotokopi STL Diklat Algol III' />



                <SubMenu a="b. " b="Struktural" />
                <SubMenuIsi a='- ' b='Fotokopi Kartu Pegawai' />
                <SubMenuIsi a='- ' b='Fotokopi Keputusan Tambah Gelar' />
                <SubMenuIsi a='- ' b='Fotokopi Keputusan Pengangkatan CPNS dan PNS' />
                <SubMenuIsi a='- ' b='Fotokopi Keputusan Jabatan Definitif' />
                <SubMenuIsi a='- ' b='Fotokopi Ijazah Pendidikan Umum Terakhir' />
                <SubMenuIsi a='- ' b='PPK dan SKP 2 Tahun Terakhir' />
                <SubMenuIsi a='- ' b='Fotokopi DSPP' />
                <SubMenuIsi a='- ' b='Fotokopi DPP Gaji' />


                <SubMenu a="c. " b="Penyesuaian Ijasah" />
                <SubMenuIsi a='- ' b='Fotokopi Kartu Pegawai' />
                <SubMenuIsi a='- ' b='Fotokopi Keputusan Tambah Gelar' />
                <SubMenuIsi a='- ' b='Fotokopi Keputusan Pengangkatan CPNS dan PNS' />
                <SubMenuIsi a='- ' b='Fotokopi Keputusan/Surat Perintah Jabatan' />
                <SubMenuIsi a='- ' b='Fotokopi Ijazah Pendidikan Umum Terakhir' />
                <SubMenuIsi a='- ' b='PPK dan SKP 2 Tahun Terakhir' />
                <SubMenuIsi a='- ' b='Fotokopi Surat Perintah Tugas Belajar' />
                <SubMenuIsi a='- ' b='Fotokopi STL UPKP' />
                <SubMenuIsi a='- ' b='Fotokopi STL Diklat Algol III' />

                <SubMenu a="d. " b="Fungsional" />
                <SubMenuIsi a='- ' b='Fotokopi Kartu Pegawai' />
                <SubMenuIsi a='- ' b='Fotokopi Keputusan Tambah Gelar' />
                <SubMenuIsi a='- ' b='Fotokopi Keputusan Pengangkatan CPNS dan PNS' />
                <SubMenuIsi a='- ' b='Fotokopi Keputusan/Surat Perintah Jabatan' />
                <SubMenuIsi a='- ' b='Fotokopi Ijazah Pendidikan Umum Terakhir' />
                <SubMenuIsi a='- ' b='PPK dan SKP 2 Tahun Terakhir' />
                <SubMenuIsi a='- ' b='Fotokopi Keputusan PAK' />
                <SubMenuIsi a='- ' b='Fotokopi DSPP' />
                <SubMenuIsi a='- ' b='Fotokopi DPP Gaji' />
                <SubMenuIsi a='- ' b='Fotokopi STL Diklat Algol III' />
            </ScrollView>




        </SafeAreaView>
    )
}

