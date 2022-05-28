import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    Dimensions,
    Keyboard,
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
    TextInput,
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts, windowHeight, windowWidth } from '../../utils/fonts';
import { storeData, getData } from '../../utils/localStorage';
import { Icon } from 'react-native-elements';
import axios from 'axios';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


export default function Chat({ navigation, route }) {
    const scrollViewRef = useRef();

    const [data, setData] = useState([]);
    const [user, setUser] = useState({});
    const [isFoto, setIsFoto] = useState(false);

    const options = {
        includeBase64: true,
        quality: 0.2,
        maxWidth: 500,
        maxHeight: 500,
    };

    const getGallery = xyz => {
        launchImageLibrary(options, response => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image Picker Error: ', response.error);
            } else {
                let source = { uri: response.uri };
                switch (xyz) {
                    case 1:
                        setKirim({
                            ...kirim,
                            pesan: `data:${response.type};base64, ${response.base64}`,
                        });
                        setIsFoto(true);

                        break;
                }
            }
        });
    };



    useEffect(() => {


        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus("Keyboard Shown");
            scrollViewRef.current.scrollToEnd({ animated: true })
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus("Keyboard Hidden");
        });


        const unsubscribe2 = messaging().onMessage(async remoteMessage => {

            // const json = JSON.stringify(remoteMessage);
            // const obj = JSON.parse(json);

            // navigation.navigate('ListDetail', {
            //   kode: obj.notification.title.toString().substring(0, 15)
            // })
            getDataUserAll();
            // PushNotification.localNotification({
            //     /* Android Only Properties */
            //     channelId: 'sikbinpers', // (required) channelId, if the channel doesn't exist, notification will not trigger.
            //     title: obj.notification.title, // (optional)
            //     message: obj.notification.body, // (required)
            // });
        });



        getDataUserAll();

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
            unsubscribe2;
        };
    }, [])


    const getDataUserAll = () => {
        getData('user').then(res => {
            setKirim({
                ...kirim,
                id_user: res.id
            })

            setUser(res);

            axios.post('https://sikbinpers.zavalabs.com/api/1data_chat.php', {
                id_user: res.id,
                id_lawan: route.params.id_lawan
            }).then(x => {
                console.log(x.data);
                setData(x.data);
                scrollViewRef.current.scrollToEnd({ animated: true })

            })
        })
    }



    const [kirim, setKirim] = useState({
        id_lawan: route.params.id_lawan,
        pesan: '',
        pesanV: '',
    })

    const __kirim = () => {

        setKirim({
            ...kirim,
            pesanV: '',

        });
        setIsFoto(false);

        console.log(kirim);
        axios.post('https://sikbinpers.zavalabs.com/api/1add_chat.php', kirim).then(res => {
            console.log(res.data);

            // setKirim({
            //     ...kirim,
            //     pesan: '',

            // });


            Keyboard.dismiss();
            axios.post('https://sikbinpers.zavalabs.com/api/1data_chat.php', {
                id_user: kirim.id_user,
                id_lawan: kirim.id_lawan
            }).then(x => {
                console.log(x.data);
                setData(x.data);

            })
        })

    }
    const [keyboardStatus, setKeyboardStatus] = useState(undefined);
    const rr = route.params;
    return (
        <ImageBackground source={require('../../assets/back.png')} style={{
            flex: 1,
        }}>
            <View style={{
                flexDirection: 'row',
                padding: 10,
                backgroundColor: colors.primary
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('ChatList')} style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                }}>
                    <Icon type='ionicon' name='arrow-back-outline' color={colors.white} />
                </TouchableOpacity>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                    margin: 5,
                    backgroundColor: colors.white,
                    width: 30,
                    borderRadius: 10
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[800],
                        color: colors.primary,
                        fontSize: 15
                    }}>{rr.icon_lawan}</Text>
                </View>
                <View style={
                    {
                        flex: 1,
                        padding: 10,
                    }
                }>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowHeight / 50,
                        color: colors.white
                    }}>{rr.nama_lawan}</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowHeight / 55,
                        color: colors.white
                    }}>{rr.pangkat_lawan} -  {rr.kesatuan_lawan}</Text>
                </View>

            </View>

            <View style={{
                flex: 1,
                overflow: 'hidden',
                padding: 5
            }}>

                {/* Chattinga isi */}

                <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef}
                    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
                    {data.map(item => {
                        return (
                            <View style={{
                                backgroundColor: item.id_user == user.id ? colors.chat : colors.white,
                                maxWidth: '100%',
                                borderRadius: 5,
                                elevation: 2,
                                marginVertical: 5,
                                padding: 10,
                                width: '70%',
                                alignSelf: item.id_user == user.id ? 'flex-end' : 'flex-start'

                            }}>
                                {item.jenis == 'foto' && (

                                    <Image source={{
                                        uri: item.pesan
                                    }} style={{
                                        resizeMode: 'contain',
                                        height: 200,
                                    }} />
                                )}

                                {item.jenis == 'text' && (

                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        color: colors.black,
                                        fontSize: windowWidth / 25
                                    }}>{item.pesan}</Text>
                                )}
                            </View>
                        )
                    })}
                </ScrollView>




            </View>

            <View style={{
                backgroundColor: '#F2F0F0',
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={() => {
                    getGallery(1)
                }} style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 40,
                    height: 40,
                    padding: 5,
                }}>
                    <Icon type='ionicon' name='attach' color={colors.primary} size={windowWidth / 15} />
                </TouchableOpacity>
                <View style={{
                    flex: 1,
                    backgroundColor: colors.white,
                    borderRadius: 10,
                }}>
                    {isFoto && (
                        <Image source={{
                            uri: kirim.pesan
                        }} style={{
                            resizeMode: 'contain',
                            height: 200,
                        }} />
                    )}
                    {!isFoto && (
                        <TextInput autoFocus value={kirim.pesanV} onChangeText={v => setKirim({
                            ...kirim,
                            pesan: v,
                            pesanV: v,
                        })} multiline style={{

                            fontFamily: fonts.secondary[400],
                            marginLeft: 10,
                            fontSize: windowWidth / 20
                        }} />

                    )}
                </View>

                <TouchableOpacity onPress={__kirim} style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 40,
                    height: 40,
                    padding: 5,
                }}>
                    <Icon type='ionicon' name='send-outline' color={colors.primary} size={windowWidth / 15} />
                </TouchableOpacity>
            </View>
        </ImageBackground >
    )
}

