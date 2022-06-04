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
                <SubMenu a="a. " b="Sedang" />

                <SubMenuIsi a='- ' b='Sprin  melakukan pemeriksaan' />
                <SubMenuIsi a='- ' b='Berita Acara Pemeriksaan' />
                <SubMenuIsi a='- ' b='Laporan hasil pemeriksaan' />
                <SubMenuIsi a='- ' b='Berita Acara Pendapat Dan/Ka satminkal' />
                <SubMenuIsi a='- ' b='Fotokopi Putusan Pengadilan Negeri bagi PNS AD yang melakukan tindak pidana dan telah dijatuhi hukuman pidana penjara' />
                <SubMenuIsi a='- ' b='Surat usul penjatuhan  hukuman disiplin dari Dan/Ka Satminkal' />
                <SubMenuIsi a='- ' b='FC  skep/kep CPNS dan PNS' />
                <SubMenuIsi a='- ' b='FC skep/kep KP terakhir' />
                <SubMenuIsi a='- ' b='Berita acara pendapat Dan/Sat minkal' />
                <SubMenuIsi a='- ' b='FC  karpeg dan petikan Kep  NIP baru' />
                <SubMenuIsi a='- ' b='Data lain yang mendukung terjadinya pelanggaran disiplin.' />
                <SubMenuIsi a='- ' b='Surat persetujuan dari Menhan' />





                <SubMenu a="b. " b="Berat" />
                <SubMenuIsi a='- ' b='Sprin  melakukan pemeriksaan' />
                <SubMenuIsi a='- ' b='Berita acara pemeriksaan terhadap PNS yang bersangkutan' />
                <SubMenuIsi a='- ' b='Berita acara pemeriksaan terhadap saksi' />
                <SubMenuIsi a='- ' b='Laporan hasil pemeriksaan' />
                <SubMenuIsi a='- ' b='Berita acara pendapat Dan/Ka satminkal' />
                <SubMenuIsi a='- ' b='Surat panggilan I,II,III serta tanda terimanya (bagi PNS AD yang tidak masuk kantor tanpa alasan yang sah selama 46 hari kerja atau lebih' />
                <SubMenuIsi a='- ' b='Sprin  pemberhentian pembayaran gaji (bagi PNS AD yang tidak masuk kantor tanpa alasan yang sah selama 46 hari kerja atau lebih)' />
                <SubMenuIsi a='- ' b='Sprin  pencarian dan laporan hasil pencarian( bagi PNS AD yang tidak masuk kantor tanpa alas an yang sah selama 46 hari kerja atau lebih)' />
                <SubMenuIsi a='- ' b='Absensi sejak tidak masuk kantor bagi PNS AD yang tidak masuk kantor tanpa alasan yang sah selama 46 hari kerja atau lebih' />
                <SubMenuIsi a='- ' b='FC  Putusan Pengadilan Negeri bagi PNS AD yang melakukan tindak pidana dan telah dijatuhi hukuman pidana penjara.' />
                <SubMenuIsi a='- ' b='FC Kep pemberhentian sementara dari jabatan negeri bagi PNS yang dikenakan penahanan oleh pihak yang berwajib.' />
                <SubMenuIsi a='- ' b='FC Kep hukuman disiplin yang pernah dijatuhkan.' />
                <SubMenuIsi a='- ' b='FC skep/kep pengangkatan CPNS dan PNS' />
                <SubMenuIsi a='- ' b='FC skep/kep kenaikan pangkat dan jabatan terakhir' />
                <SubMenuIsi a='- ' b='FC karpeg dan petikan Kep NIP baru' />
                <SubMenuIsi a='- ' b='Data lain yang mendukung terjadinya pelanggaran disiplin' />





            </ScrollView>




        </SafeAreaView>
    )
}

