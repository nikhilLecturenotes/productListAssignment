import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, Platform, SafeAreaView, TextInput, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";

function UserPanel(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onSubmitButton = () => {
    console.log("on submit data");
  };

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <View style={[styles.containerStyle]}>
          <View style={[styles.inputStyle]}>
            <Text style={[styles.inputTitleTextStyle]}>Name</Text>
            <TextInput placeholder="Enter The Product Name" style={[styles.textInputStyle]} value={name} onChangeText={(e) => setName(e)} />
          </View>
          <View style={[styles.inputStyle]}>
            <Text style={[styles.inputTitleTextStyle]}>Price</Text>
            <TextInput placeholder="Enter The Price" style={[styles.textInputStyle]} value={price} onChangeText={(e) => setPrice(e)} />
          </View>
          <View style={[styles.inputStyle]}>
            <Text style={[styles.inputTitleTextStyle]}>Offer</Text>
            <TextInput placeholder="Enter The Offer" style={[styles.textInputStyle]} value={offer} onChangeText={(e) => setOffer(e)} />
          </View>
          <View
            style={{
              margin: 2,
            }}
          >
            <Button title="Pick an image" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          </View>
          <View
            style={{
              marginHorizontal: 2,
              marginVertical: 12,
            }}
          >
            <Button title="submit" onPress={() => onSubmitButton} color="green" />
          </View>
        </View>
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
  containerStyle: {
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
    backgroundColor: "white",
    padding: 12,
  },
  inputStyle: {
    shadowOffset: 1,
    shadowColor: "black",
    shadowRadius: 6,
    shadowOffset: {
      height: 5,
      width: 4,
    },
    elevation: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 12,
  },
  inputTitleTextStyle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  textInputStyle: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 5,
    fontSize: 18,
  },
});

export default UserPanel;
