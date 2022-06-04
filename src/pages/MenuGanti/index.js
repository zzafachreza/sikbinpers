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
                <SubMenu a="a. " b="Ganti Nama" />

                <SubMenuIsi a='- ' b='Asli surat permohonan dari yang bersangkutan diketahui Dan/Ka Satminkal.' />
                <SubMenuIsi a='- ' b='Surat usul dari Pang/Ir/Gub/Dan/Dir/Ka Kotama/Lemdikpus/Balakpus dan Dandenma Mabesad' />
                <SubMenuIsi a='- ' b='Surat bukti perubahan nama dari pengadilan negeri/pemangku adat/istana/keratin/Pejabat yang berwenang lainnya disahkan oleh pejabat yang menerbitkan surat perubahan tersebut' />
                <SubMenuIsi a='- ' b='Foto kopi Skep Pengangkatan PNS' />
                <SubMenuIsi a='- ' b='Foto kopi Skep Kenaikan Pangkat terakhir' />





                <SubMenu a="b. " b="Ganti Agama" />
                <SubMenuIsi a='- ' b='Asli surat permohonan dari yang bersangkutan diketahui Dan Ka Satminkal' />
                <SubMenuIsi a='- ' b='Surat usul dari Pang/Ir/Gub/Dan/Dir/Ka Kotama/Lemdikpus/Balakpus dan Dandenma Mabesad' />
                <SubMenuIsi a='- ' b='Foto kopi surat pernyataan ganti agama yang dikeluarkan oleh masing-masing Lembaga berwenang atau pejabat agama (bintal) masing-masing satuan yang di sahkan oleh Dan/Ka Satminkal' />
                <SubMenuIsi a='- ' b='Foto kopi ijin dari suami/istri yang bersangkutan bagi PNS yang telah menikah' />
                <SubMenuIsi a='- ' b='Foto kopi Skep Pengangkatan PNS' />
                <SubMenuIsi a='- ' b='Foto kopi Skep Kenaikan Pangkat terakhir' />



                <SubMenu a="c. " b="Ganti Kelamin" />

                <SubMenuIsi a='- ' b='Asli surat permohonan dari yang bersangkutan diketahui Dan Ka Satminkal' />
                <SubMenuIsi a='- ' b='Surat usul dari Pang/Ir/Gub/Dan/Dir/Ka Kotama/Lemdikpus/Balakpus dan Dandenma Mabesad' />
                <SubMenuIsi a='- ' b='Foto kopi surat pengesahan ganti kelamin dari pengadilan yang disahkan oleh pejabat Pengadilan Negeri yang berwenang' />
                <SubMenuIsi a='- ' b='Surat keterangan yang menjelaskan secara kronologis tentang asal usul ganti kelamin dari Dan/Ka Satminkal' />
                <SubMenuIsi a='- ' b='Surat keterangan pelaksanaan/pemeriksaan ganti kelamin dari dokter Rumah sakit Negeri/Swasta.' />
                <SubMenuIsi a='- ' b='Foto kopi Skep Pengangkatan PNS' />
                <SubMenuIsi a='- ' b='Foto kopi Skep Kenaikan Pangkat terakhir' />

            </ScrollView>




        </SafeAreaView>
    )
}

