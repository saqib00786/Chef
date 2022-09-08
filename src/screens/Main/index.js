import { StyleSheet, Text, View, FlatList, SectionList } from "react-native";
import React from "react";

const Main = (props) => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.text}>Chef</Text>
      </View>
      <View>
        <SectionList
          sections={[
            {
              title: "Pakistani Food Recipes",
              data: [
                "Recipe 1",
                "Recipe 2",
                "Recipe 3",
                "Recipe 4",
                "Recipe 5",
              ],
            },
            {
              title: "Indian Food Recipes",
              data: [
                "Recipe 1",
                "Recipe 2",
                "Recipe 3",
                "Recipe 4",
                "Recipe 5",
              ],
            },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={styles.subheading1}>{section.title}</Text>
          )}
          keyExtractor={(item, index) =>
            `basicListEntry-${item.title + Math.random().toString()}`
          }
        />
      </View>
    </>
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

export default Main;
