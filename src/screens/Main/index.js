import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from "react-native";
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
                ListHeaderComponent={<View>
                    <Text style={{ fontSize: 80, fontFamily: 'Sacramento-Regular',color : 'white' }}>Chef</Text>

                </View>}
                ListHeaderComponentStyle={styles.header}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.cardContainer}>
                            <View style={styles.imgContainer}>
                                <Image
                                    source={{ uri: item.strMealThumb }}
                                    style={styles.img}
                                />
                            </View>
                            <View style={{ flex: 0.7 }}>
                                <Text>{item.idMeal}</Text>
                                <Text>{item.strMeal}</Text>
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
        width: "100%",
        flex: 1,
        padding: 16
    },
    cardContainer: {
        width: "95%",
        height: 100,
        borderRadius: 16,
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        margin: 8,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        display: 'flex',
        flexDirection: 'row',
        borderColor: COLOR_EQUA_RED,
        borderWidth: 0.6,
    },
    imgContainer: {
        flex: 0.3,
        borderTopStartRadius: 16,
        borderBottomStartRadius: 16,
        padding: 2

    },
    img: {
        width: "100%",
        height: "100%",
        borderBottomLeftRadius: 16,
        borderTopLeftRadius: 16
    },
    header: {
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR_EQUA_RED,
        borderBottomEndRadius : 16,
        borderBottomStartRadius : 16
    }
});

export default Main