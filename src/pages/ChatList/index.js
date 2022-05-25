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

export default function ChatList({ navigation }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData('user').then(res => {
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
            <TouchableOpacity style={{
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
            <View style={{
                flexDirection: 'row',
                padding: 10,
                backgroundColor: colors.primary
            }}>
                <View style={
                    {
                        flex: 1,
                    }
                }>
                    <Text style={{
                        fontFamily: fonts.secondary[800],
                        fontSize: windowHeight / 25,
                        color: colors.white
                    }}>SIKBINPERS</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ChatAdd')} style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Icon type='ionicon' name='create-outline' color={colors.white} />
                </TouchableOpacity>
            </View>

            {/* <FlatList data={data} renderItem={__renderItem} /> */}

        </SafeAreaView >
    )
}

