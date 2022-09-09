import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';


const Detail = () => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.img}
                source={require('../../../assets/bryani_img.jpg')}
            />

            <Text style={{...styles.text, fontWeight: 'bold'}}>CHICKEN BIRYANI RECIPE:</Text>
          
            <Text style={styles.text}>
            Step 1: Prepare the chicken curry.
            Prepare the biryani masala (or use store-bought) and marinate the chicken.
            Cook the chicken curry. While it’s cooking over low heat, prepare the rice.
            Step 2: Parboil the rice.
            Bring a pot of water to a boil and parboil the rice. Drain and set aside.
            Step 3: Bring it all together for a final steam (‘dum‘).
            Layer half of the rice, all of the chicken, and then the remaining rice on top.
            Add the finishing touches.
            Allow steam to develop, then lower the heat and let the flavors meld.
            </Text>
            <Text style={{...styles.text, fontWeight: 'bold'}}>Ingredients:</Text>
          
            <FlatList
                data={["ali", "ahmed","saba","saqib"]}
                numColumns={1}
                horizontal={true}
                renderItem={({item}) => {
                    return(
                        <View style={styles.card}>
                        <View style={styles.corner_view}>                        
                        </View>

                        <View>
                            <Image
                            style={{width: 50, height: 50}}
                                source={require('../../../assets/rice.jpg')}
                            />
                            <Text>Rice</Text>
                            <Text>2kg</Text>
                        </View>
                        
                        <View style={styles.corner_view_bottom}>
                        </View>

                        </View>
                    )
                }}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    img : {
        height: 250,
        width: 350,
        marginTop: 70,
        borderRadius: 10
    },
    text: {
        marginTop: 5,
        marginLeft: 20,
        textAlign: 'left'
    },
    ing_img: {
            marginTop: 15,
            height: 100,
            width: 100,
            borderRadius: 100         
    } ,
    card:{
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
        alignItems: 'center',
        

    }, 
    corner_view:{
        position: 'absolute',
        width: 15,
        height: 8,
        left: 0,
        Top: 0,
        backgroundColor: '#000000'
    },
    corner_view_bottom:{
        position: 'absolute',
        width: 15,
        height: 8,
        right: 0,
        bottom: 0,
        backgroundColor: '#000000'
    }
    
})

export default Detail;