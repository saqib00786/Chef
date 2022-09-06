import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'

const ApiScreen = () => {

    const [data, setData] = useState()
    const [loading, isLoading] = useState(true)

    useEffect(() => {
        getJsonData()
    }, [])

    const getJsonData = async () => {
        try {
            const responce = await fetch("https://jsonplaceholder.typicode.com/photos")
            const responceJson = await responce.json()
            setData(responceJson)
            isLoading(false)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <View style={{ flex: 1, padding: 12 }}>

            {loading ? <ActivityIndicator /> :
                <View style={{flex : 1}}>
                <Text style={{ alignSelf: 'center', fontWeight: '800', fontSize: 24 }}>API DATA LIST</Text>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.itemContainer}>
                                    <View style={{ flex: 0.3 }}>
                                        <Image
                                            source={{ uri: item.url }}
                                            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                                        />

                                    </View>

                                    <View style={{ flex: 0.7, padding: 4 }}>
                                        <Text style={{ alignSelf: 'center', fontWeight: '800', fontSize: 24 }}>{item.id < 10 ? `0${item.id}` : `${item.id}`}</Text>
                                        <Text>{item.title}</Text>
                                    </View>

                                </View>
                            )
                        }}
                    />
                </View>
            }
        </View>

    )
}


const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: 'cyan',
        height: 120,
        margin: 8,
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row'
    }
})


export default ApiScreen