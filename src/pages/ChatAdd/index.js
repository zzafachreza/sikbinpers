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
import axios from 'axios';

export default function ChatAdd({ navigation }) {

    const [data, setData] = useState([]);

    const [user, setUser] = useState({});

    useEffect(() => {
        getData('user').then(res => {
            setUser(res);
            axios
                .post('https://sikbinpers.zavalabs.com/api/1data_user.php', {
                    id_user: res.id
                })
                .then(dt => {
                    console.log(dt.data);
                    setData(dt.data)
                })
        })
    }, []);

    const __renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => {
                // axios.post('https://sikbinpers.zavalabs.com/api/1add_chat.php', {
                //     id_lawan: item.id_lawan,
                //     id_user: user.id
                // }).then(res => {
                //     console.log(res)
                // })

                navigation.navigate('Chat', {
                    id_lawan: item.id_lawan,
                    id_user: user.id,
                    nama_lawan: item.nama_lengkap
                })

            }} style={{
                padding: 15,
                borderBottomWidth: 1,
                borderBottomColor: '#CDCDCD',
                flexDirection: 'row'
            }}>
                <View style={{
                    width: 40,
                    height: 40,
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.secondary,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 25,
                        color: colors.white
                    }}>{item.icon_lawan}</Text>
                </View>
                <View style={{
                    paddingLeft: 10,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 25
                    }}>{item.nama_lengkap}</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 30
                    }}>{item.pangkat} - {item.kesatuan}</Text>
                </View>
            </TouchableOpacity>

        )
    }

    return (
        <SafeAreaView>


            <FlatList data={data} renderItem={__renderItem} />

        </SafeAreaView >
    )
}

