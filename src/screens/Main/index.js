import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageBackground } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { COLOR_DARK_BROWN, COLOR_EQUA_LIGHT_RED, COLOR_EQUA_RED, COLOR_LIGHT_RED, COLOR_REDISH, FONT_ACUMIN, FONT_ACUMIN_BOLD, FONT_SACRAMENTO, SPLASHSCR_ICON } from '../../../res/drawables'
import { useFonts } from 'expo-font'
import { useCallback } from 'react';

const Main = (props) => {
    const [data, setData] = useState()
    const [fontsLoaded] = useFonts({
        'Sacramento-Regular': FONT_SACRAMENTO,
        'Acumin-Normal': FONT_ACUMIN,
        'Acumin-bold': FONT_ACUMIN_BOLD
    })

    useEffect(() => {
        getUserData()

    }, [])


    const getUserData = async () => {
        try {
            const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            const mydata = await res.json()
            setData(mydata.meals)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.mainContainer}>
            <FlatList
                ListHeaderComponent={
                    <View style={{ width: '100%', height: "100%", alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 30, fontFamily: 'Sacramento-Regular', color: '#fcc71a', lineHeight: 40 }}>Personal</Text>
                        <Text style={{ fontSize: 80, fontFamily: 'Acumin-bold', color: '#fcc71a', lineHeight: 80 }}>Chef</Text>
                        <Image
                            source={require('../../../assets/food1.png')}
                            style={styles.designElmement}
                        />
                        <Image
                            source={require('../../../assets/food.png')}
                            style={styles.designElmement2}
                        />
                    </View>
                }
                ListHeaderComponentStyle={styles.header}
                showsVerticalScrollIndicator={false}
                //horizontal = {true}
                numColumns={2}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => { props.navigation.navigate('Detail') }}
                            style={styles.cardContainer}>
                            <View style={styles.imgContainer}>
                                <Image
                                    source={{ uri: item.strMealThumb }}
                                    style={styles.img}
                                />
                            </View>
                            <View style={{
                                flex: 0.3, justifyContent: 'center',
                                alignItems: 'center', width: "100%",
                            }}>
                                <Text
                                    numberOfLines={2}
                                    style={{ color: 'white', width: '95%', textAlign: 'center' }}>{item.strMeal}</Text>
                            </View>
                            <View style={{ flex: 0.15 }}>
                                <Image
                                    source={require('../../../assets/rating.png')}
                                    style={styles.rating}
                                />
                            </View>


                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1f1f1f'
    },
    cardContainer: {
        width: "45%",
        height: 190,
        borderRadius: 16,
        backgroundColor: '#252527',
        //backgroundColor: '#28272a',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 8,
        display: 'flex',
        flexDirection: "column",
    },
    imgContainer: {
        flex: 0.55,
        padding: 2,
        backgroundColor: '#fcc71a',
        borderTopStartRadius: 16,
        borderTopEndRadius: 16

    },
    img: {
        width: 98,
        height: 98,
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: 4
    },
    header: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#252527',
        borderBottomEndRadius: 100,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
    },
    rating: {
        width: 80,
        height: 20,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    designElmement: {
        position: 'absolute',
        width: 100,
        height: 70,
        resizeMode: 'contain',
        right: 0,
        bottom: 0,
        marginRight: -10,
    },
    designElmement2:{
        position: 'absolute',
        width: 150,
        height: 200,
        resizeMode: 'contain',
        left: 0,
        bottom: 0,
    }
});

export default Main