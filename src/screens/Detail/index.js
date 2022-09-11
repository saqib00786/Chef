import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { COLOR_DARK_BROWN, COLOR_EQUA_RED, COLOR_LIGHT_RED, COLOR_REDISH, CONTACTUS_BTN, CONTACTUS_ICON } from '../../../res/drawables';


const Detail = (props) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={{uri : 'https://drive.google.com/uc?export=view&id=1BOolG3mLsmbQFu7Cvh0kDIvCYCOo5YuL'}}
            />

            <Text style={[styles.instructions_text, { fontWeight: 'bold', fontSize: 18, color: COLOR_DARK_BROWN }]}>Prepration Method:</Text>

            <Text style={styles.instructions_text}>
                Step 1: Prepare the chicken curry. Prepare the biryani masala (or use store-bought) and marinate the chicken.
                Cook the chicken curry. While it’s cooking over low heat, prepare the rice.
                Step 2: Parboil the rice.
                Bring a pot of water to a boil and parboil the rice. Drain and set aside.
                Step 3: Bring it all together for a final steam (‘dum‘).
                Layer half of the rice, all of the chicken, and then the remaining rice on top.
                Add the finishing touches.
                Allow steam to develop, then lower the heat and let the flavors meld.
            </Text>
            <Text style={[styles.instructions_text, { fontWeight: 'bold', fontSize: 18, color: COLOR_DARK_BROWN }]}>Ingredients:</Text>


            <FlatList
                data={[["ali", "1Kg"], ["ahmed", "2Kg"], ["saba", "8kg"], ["saqib", "1kg"], ['abaid', "8kg"], ['asia', '10kg'], ['haris', '1kg']]}
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
                                    source={require('../../../assets/rice.png')}
                                />
                                <Text>{item[0]}</Text>
                                <Text>{item[1]}</Text>
                            </View>

                            <View style={styles.corner_view_bottom}>
                            </View>

                        </View>
                    )
                }}
            />

            <TouchableOpacity
                style={styles.contactUs}
                onPress={() => { props.navigation.navigate('Contact') }}
            >
                <Image
                    source={CONTACTUS_ICON}
                    style={{ height: 40, width: 40 }}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        color: COLOR_DARK_BROWN
    },
    ing_img: {
        marginTop: 15,
        height: 100,
        width: 100,
        borderRadius: 100
    },
    card: {
        margin: 5,
        width: 95,
        height: 120,
        backgroundColor: '#ffffff',
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
        borderColor: COLOR_EQUA_RED,
        borderWidth: 0.6,


    },
    corner_view: {
        position: 'absolute',
        width: 20,
        height: 5,
        left: 0,
        Top: 0,
        zIndex: 1,
        backgroundColor: COLOR_LIGHT_RED
    },
    corner_view_bottom: {
        position: 'absolute',
        width: 20,
        height: 5,
        right: 0,
        bottom: 0,
        zIndex: 1,
        backgroundColor: COLOR_LIGHT_RED
    },
    contactUs: {
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: COLOR_REDISH,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        bottom: 0,
        marginEnd: 20,
        marginBottom: 20
    },
    imgContainer: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default Detail;