import React from "react";
import { View, Text, StyleSheet, Platform, StatusBar, SafeAreaView, Image, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const data = [
  {
    productId: 1,
    name: "clothes",
    productImage: require("../assets/favicon.png"),
    price: 500,
    offer: "offer",
  },
  {
    productId: 2,
    name: "clothes",
    productImage: require("../assets/favicon.png"),
    price: 500,
    offer: "offer",
  },
  {
    productId: 3,
    name: "clothes",
    productImage: require("../assets/favicon.png"),
    price: 500,
    offer: "offer",
  },
  {
    productId: 4,
    name: "clothes",
    productImage: require("../assets/favicon.png"),
    price: 500,
    offer: "offer",
  },
];

function WeatherScreen({}) {
  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                height: "30%",
                margin: 18,
                borderRadius: 12,
                overflow: "hidden",
                shadowOffset: 1,
                shadowColor: "black",
                shadowRadius: 6,
                shadowOffset: {
                  height: 5,
                  width: 4,
                },
                elevation: 10,
                backgroundColor: "red",
                height: 250,
              }}
            >
              <Image
                source={item.productImage}
                style={{
                  width: "100%",
                  flex: 1,
                }}
                key={item.productId}
              />
              <View
                style={{
                  backgroundColor: "white",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    paddingHorizontal: 24,
                    paddingVertical: 12,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "500",
                      fontStyle: "italic",
                    }}
                  >
                    Rs {item.price} only/-
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "red",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopLeftRadius: 12,
                    borderBottomLeftRadius: 12,
                    marginVertical: 12,
                    paddingHorizontal: 12,
                    shadowOffset: 1,
                    shadowColor: "black",
                    shadowRadius: 6,
                    shadowOffset: {
                      height: 5,
                      width: 4,
                    },
                    elevation: 10,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "white",
                      borderRadius: 50,
                      paddingVertical: 4,
                      paddingHorizontal: 16,
                    }}
                  >
                    <MaterialIcons name="shopping-cart" size={28} color="black" />
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 50,
                      padding: 6,
                      borderRadius: 2,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        color: "green",
                        fontWeight: "bold",
                      }}
                    >
                      Offer
                    </Text>
                    <Text
                      style={{
                        fontSize: 24,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {item.offer}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.productId}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FAF9F6",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
  },
});

export default WeatherScreen;
