/* eslint-disable prettier/prettier */
import React,{useContext, useEffect,useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Button, Image, View, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const ProfilePictureScreen = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const { user } = useContext(AuthenticationContext);

    useEffect(() => {
      (async () => {
        if (Platform.OS !== "web") {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== "granted") {
            alert("Sorry, we need camera roll permissions to make this work!");
          }
        }
      })();
    }, []);

    const pickImage = async () => {
      let photo = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });



     if (!photo.cancelled) {

        AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
        setImage(photo.uri);
        navigation.goBack();
      }
    };

   return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
};
