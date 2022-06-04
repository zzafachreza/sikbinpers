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

                <SubMenuIsi a='- ' b='Surat Lamaran' />
                <SubMenuIsi a='- ' b='Akte Kelahiran' />
                <SubMenuIsi a='- ' b='Akte Kelahiran Anak' />
                <SubMenuIsi a='- ' b='Daftar Riwayat Hidup' />
                <SubMenuIsi a='- ' b='Ijazah Dikum' />
                <SubMenuIsi a='- ' b='Surat Keterangan Catatan Kepolisian (SKCK)' />
                <SubMenuIsi a='- ' b='Kep Pengangkatan Capeg' />
                <SubMenuIsi a='- ' b='Kenaikan Gaji Berkala (KGB)' />
                <SubMenuIsi a='- ' b='Karis/Karsu' />
                <SubMenuIsi a='- ' b='Kep Penempatan dalam Jabatan' />
                <SubMenuIsi a='- ' b='Kartu ASABRI' />
                <SubMenuIsi a='- ' b='Sumpah Pengangkatan PNS' />
                <SubMenuIsi a='- ' b='Kartu Pegawai' />
                <SubMenuIsi a='- ' b='Surat Izin Nikah, fotokopi Akta Nikah/Cerai/Rujuk' />
                <SubMenuIsi a='- ' b='Kep Tanda Kehormatan' />
                <SubMenuIsi a='- ' b='Ijazah Prajab/PKP/Latsarmil/Sus/Dikalih' />
                <SubMenuIsi a='- ' b='Surat Tanda Lulus Ujian Dinas/KPPI' />
                <SubMenuIsi a='- ' b='Penilaian Prestasi Kerja (PPK)' />
                <SubMenuIsi a='- ' b='Kep Pengangkatan PNS' />
                <SubMenuIsi a='- ' b='Kep/Sprin Perpindahan antar Kementerian/Antar Angkatan/Antar Kesatuan' />
                <SubMenuIsi a='- ' b='Kep Pemberian Hukuman' />
                <SubMenuIsi a='- ' b='Laporan Pengembangan Kepribadian' />
                <SubMenuIsi a='- ' b='Surat Kematian Suami/Istri/Anak' />
                <SubMenuIsi a='- ' b='Kep Pemberhentian Sementara dari Jabatan/Skorsing' />
                <SubMenuIsi a='- ' b='Kep Pengaktifan Kembali dalam Jabatan' />
                <SubMenuIsi a='- ' b='Kep Perubahan Nama ybs, Pernyataan Perubahan Nama Istri/Suami/Anak' />
                <SubMenuIsi a='- ' b='Kep Tambah Gelar' />
                <SubMenuIsi a='- ' b='Kep Pindah Agama' />
                <SubMenuIsi a='- ' b='Kep Kenaikan Pangkat/Penurunan Pangkat' />
                <SubMenuIsi a='- ' b='Kep Ralat' />
                <SubMenuIsi a='- ' b='Kep Pensiun' />
                <SubMenuIsi a='- ' b='Dokumen Tekstual Lainnya: Kep Uang Tunggu, KU-1, dan lain-lain' />



            </ScrollView>




        </SafeAreaView>
    )
}

