import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, SectionList } from "react-native";

const Main = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getUserData()
    }, [])


    const getUserData = async () => {
        try {
            const res = await fetch("https://github.com/uc?export=view&id=ec83ee9c4802e993d59e890a95420cc2f0dfe897/users.json")
            const mydata = await res.json()
            setData(mydata)
            console.log(mydata)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
            data={data}
            renderItem = {({item})=>{
                <Text>{item.name}</Text>
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "30%",
        backgroundColor: "#00ffff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 50,
        fontWeight: "bold",
    },
    subheading1: {
        marginHorizontal: 18,
        marginTop: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 14,
        backgroundColor: "#708090",
    },
    text1: {
        color: "#ffffff",
    },
    item: {
        marginHorizontal: 18,
        marginTop: 3,
        padding: 10,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 14,
        backgroundColor: "#00ffff",
        color: "#ffffff",
    },
});

export default Main