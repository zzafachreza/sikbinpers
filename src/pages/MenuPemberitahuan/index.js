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
                <SubMenu a="a. " b="Pemberhentian dengan Hormat karena mencapai BUP (Gol IV)" />

                <SubMenuIsi a='- ' b='DPCP (Daftar Perorangan Calon Penerima Pensiun)' />
                <SubMenuIsi a='- ' b='Surat Permohonan dari yang Bersangkutan (ditandatangani di atas materai)' />
                <SubMenuIsi a='- ' b='Fotokopi Keputusan Pengangkatan CPNS dan PNS' />
                <SubMenuIsi a='- ' b='Fotokopi Kenaikan Pangkat Terakhir' />
                <SubMenuIsi a='- ' b='Fotokopi KGB' />
                <SubMenuIsi a='- ' b='Fotokopi Surat Nikah' />
                <SubMenuIsi a='- ' b='Fotokopi Karis/Karsu' />
                <SubMenuIsi a='- ' b='Fotokopi Akte Kelahiran Anak (yang masih mendapatkan tunjangan)' />
                <SubMenuIsi a='- ' b='KU 1' />
                <SubMenuIsi a='- ' b='Fotokopi Kartu Keluarga' />
                <SubMenuIsi a='- ' b='Fotokopi KTP Suami/Istri' />
                <SubMenuIsi a='- ' b='Surat Keterangan Alamat Menetap' />
                <SubMenuIsi a='- ' b='Fotokopi Kartu Pegawai' />
                <SubMenuIsi a='- ' b='Surat Pernyataan Sedang Tidak Menjalani Proses Pidana Atau Pernah Dipenjara Berdasarkan Putusan Pengadilan Yang Telah Berkekuatan Hukum Tetap' />
                <SubMenuIsi a='- ' b='Foto yang bersangkutan ukuran 3x4 (10 lembar)' />
                <SubMenuIsi a='- ' b='PPK terakhir' />
                <SubMenuIsi a='- ' b='Surat Pernyataan tidak pernah dijatuhi hukuman disiplin sedang/berat' />
                <SubMenuIsi a='- ' b='Surat Pernyataan Tidak Sedang Menjalani Proses Pidana Atau Pernah Dipenjara Berdasarkan Putusan Pengadilan Yang Telah Berkekuatan Tetap' />





                <SubMenu a="b. " b="Pemberhentian dengan Hormat atas Permintaan Sendiri (Pensiun Minim)" />
                <SubMenuIsi a='- ' b='DPCP (Daftar Perorangan Calon Penerima Pensiun)' />
                <SubMenuIsi a='- ' b='Surat Permohonan dari yang Bersangkutan (ditandatangani di atas materai)' />
                <SubMenuIsi a='- ' b='Fotokopi Keputusan Pengangkatan CPNS dan PNS' />
                <SubMenuIsi a='- ' b='Fotokopi Kenaikan Pangkat Terakhir' />
                <SubMenuIsi a='- ' b='Fotokopi KGB' />
                <SubMenuIsi a='- ' b='Fotokopi Surat Nikah' />
                <SubMenuIsi a='- ' b='Fotokopi Karis/Karsu' />
                <SubMenuIsi a='- ' b='Fotokopi Akte Kelahiran Anak (yang masih mendapatkan tunjangan)' />
                <SubMenuIsi a='- ' b='KU 1' />
                <SubMenuIsi a='- ' b='Fotokopi Kartu Keluarga' />
                <SubMenuIsi a='- ' b='Fotokopi KTP Suami/Istri' />
                <SubMenuIsi a='- ' b='Surat Keterangan Alamat Menetap' />
                <SubMenuIsi a='- ' b='Fotokopi Kartu Pegawai' />
                <SubMenuIsi a='- ' b='Surat Pernyataan Sedang Tidak Menjalani Proses Pidana Atau Pernah Dipenjara Berdasarkan Putusan Pengadilan Yang Telah Berkekuatan Hukum Tetap' />
                <SubMenuIsi a='- ' b='Foto yang bersangkutan ukuran 3x4 (10 lembar)' />
                <SubMenuIsi a='- ' b='PPK terakhir' />
                <SubMenuIsi a='- ' b='Surat Pernyataan tidak pernah dijatuhi hukuman disiplin sedang/berat' />
                <SubMenuIsi a='- ' b='Surat Pernyataan Tidak Sedang Menjalani Proses Pidana Atau Pernah Dipenjara Berdasarkan Putusan Pengadilan Yang Telah Berkekuatan Tetap' />




            </ScrollView>




        </SafeAreaView>
    )
}

