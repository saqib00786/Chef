import React, { useEffect, useState } from 'react'
import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { COLOR_DarkGray, COLOR_LIGHT_GRAY, COLOR_ORANGE, COLOR_WHITE, CONTACTUS_ICON } from '../../../res/drawables';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

setStatusBarBackgroundColor(COLOR_DarkGray)
const Detail = (props) => {

    const { Id } = props.route.params
    const [data, setData] = useState([])


    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Id}`)
            const mydata = await res.json()
            setData(mydata.meals[0])
        } catch (error) {
            console.log(error)
        }
    }

    return (
            <View style={styles.container}>
                <Image
                    style={styles.img}
                    source={{ uri: data.strMealThumb }} />

                <Text style={[styles.instructions_text, { fontWeight: 'bold', fontSize: 18, color: COLOR_WHITE }]}>Prepration Method:</Text>
                <ScrollView 
                showsVerticalScrollIndicator={true}
                indicatorStyle='white'
                style={{ height: '15%' }}>
                    <Text style={styles.instructions_text}>{data.strInstructions}</Text>
                </ScrollView>
                <Text style={[styles.instructions_text, { fontWeight: 'bold', fontSize: 18, color: COLOR_WHITE }]}>Ingredients:</Text>


                <FlatList
                    data={[[data.strIngredient1, data.strMeasure1], [data.strIngredient2, data.strMeasure2], [data.strIngredient3, data.strMeasure3],
                    [data.strIngredient4, data.strMeasure4], [data.strIngredient5, data.strMeasure5], [data.strIngredient6, data.strMeasure6],
                    [data.strIngredient1, data.strMeasure1], [data.strIngredient1, data.strMeasure1], [data.strIngredient1, data.strMeasure1],
                    [data.strIngredient7, data.strMeasure7], [data.strIngredient8, data.strMeasure8], [data.strIngredient9, data.strMeasure9],
                    [data.strIngredient10, data.strMeasure10], [data.strIngredient11, data.strMeasure11], [data.strIngredient12, data.strMeasure12]]}
                    numColumns={1}
                    horizontal={true}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.card}>
                                <View style={styles.corner_view}>
                                </View>

                                <View style={styles.imgContainer}>
                                    <Image
                                        style={{ width: 60, height: 60, borderRadius: 100 }}
                                        source={require('../../../assets/ingredients.png')}
                                    />
                                    <Text style={{ color: COLOR_WHITE, fontFamily: "Acumin-bold",fontSize:12 }}>{item[0]}</Text>
                                    <Text style={{ color: COLOR_WHITE }}>{item[1]}</Text>
                                </View>

                                <View style={styles.corner_view_bottom}>
                                </View>

                            </View>
                        )
                    }}
                />

                <TouchableOpacity
                    style={styles.contactUs}
                    onPress={() => { props.navigation.navigate('Contact') }}>
                    <Image
                        source={CONTACTUS_ICON}
                        style={{ height: 40, width: 40}}
                    />
                </TouchableOpacity>

                <View style={{ width: '100%', height: 70, position: 'absolute', bottom: 0, zIndex: -1 }}>
                    <BannerAd
                        unitId='ca-app-pub-7992663111948996/8668892853'
                        size={BannerAdSize.FULL_BANNER}
                    />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_DarkGray
    },
    img: {
        height: 250,
        width: "100%",
    },
    instructions_text: {
        marginTop: 4,
        marginEnd: 10,
        marginStart: 10,
        marginBottom: 4,
        textAlign: "justify",
        fontWeight: '500',
        color: COLOR_WHITE
    },
    card: {
        margin: 5,
        width: 100,
        height: 120,
        backgroundColor: COLOR_LIGHT_GRAY,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderTopEndRadius: 8,
        borderBottomStartRadius: 8,
        borderColor: COLOR_ORANGE,
        borderWidth: 0.6,


    },
    corner_view: {
        position: 'absolute',
        width: 20,
        height: 5,
        left: 0,
        Top: 0,
        zIndex: 1,
        backgroundColor: COLOR_ORANGE
    },
    corner_view_bottom: {
        position: 'absolute',
        width: 20,
        height: 5,
        right: 0,
        bottom: 0,
        zIndex: 1,
        backgroundColor: COLOR_ORANGE
    },
    contactUs: {
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: COLOR_ORANGE,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        bottom: 0,
        marginEnd: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
    },
    imgContainer: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default Detail;