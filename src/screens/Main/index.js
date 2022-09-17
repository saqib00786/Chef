import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageBackground, ActivityIndicator } from "react-native";
import { COLOR_DarkGray, COLOR_LIGHT_GRAY, COLOR_ORANGE } from '../../../res/drawables'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import AnimatedLottieView from 'lottie-react-native';

const Main = (props) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUserData()
    }, [])


    const getUserData = async () => {
        try {
            const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken')
            const mydata = await res.json()
            setData(mydata.meals)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.mainContainer}>
            {loading ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <AnimatedLottieView
                    style={{ width: 400, height: 400}}
                    source={require('../../../assets/loading_indicator.json')}
                    autoPlay
                    loop
                />
            </View> :
                <View style={{ flex: 1 }}>
                    <FlatList
                        ListHeaderComponent={
                            <View style={{ width: '100%', height: "100%", alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 30, fontFamily: 'Sacramento-Regular', color: COLOR_ORANGE, lineHeight: 40 }}>Personal</Text>
                                <Text style={{ fontSize: 80, fontFamily: 'Acumin-bold', color: COLOR_ORANGE, lineHeight: 80 }}>Chef</Text>
                                <Image
                                    source={require('../../../assets/food.png')}
                                    style={styles.designElmement2}
                                />
                                <Image
                                    source={require('../../../assets/food1.png')}
                                    style={styles.designElmement}
                                />
                            </View>

                        }
                        ListHeaderComponentStyle={styles.header}
                        showsVerticalScrollIndicator={false}
                        //horizontal = {true}
                        numColumns={2}
                        initialNumToRender={8}
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => { props.navigation.navigate("Detail", { Id: item.idMeal }) }}
                                    style={styles.cardContainer}>
                                    <View style={styles.imgContainer}>
                                        <Image
                                            source={{ uri: item.strMealThumb }}
                                            style={styles.img}
                                        />
                                    </View>
                                    <View style={{
                                        flex: 0.3,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: "100%",
                                    }}>
                                        <Text
                                            numberOfLines={2}
                                            style={{ color: 'white', width: '95%', textAlign: 'center', fontFamily: 'Acumin-bold' }}>{item.strMeal}</Text>
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
                    <View style={{ width: '100%', height: 60, position: 'absolute', bottom: 0, zIndex: 1 }}>
                        <BannerAd
                            unitId='ca-app-pub-7992663111948996/5372893090'
                            size={BannerAdSize.FULL_BANNER}
                        />
                    </View>
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLOR_DarkGray
    },
    cardContainer: {
        width: "45%",
        height: 190,
        borderRadius: 16,
        backgroundColor: COLOR_LIGHT_GRAY,
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
        backgroundColor: COLOR_ORANGE,
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
        backgroundColor: COLOR_LIGHT_GRAY,
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

    },
    designElmement2: {
        position: 'absolute',
        width: 200,
        height: 250,
        resizeMode: 'contain',
        left: 0,
        bottom: 0,
        zIndex: -1,
    }
});

export default Main