/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { Text, StyleSheet, View, Linking, Platform, TouchableOpacity } from "react-native";



export class OrderScreen extends Component {
    makeCall = () => {

        let phoneNumber = "";

        if (Platform.OS === "android") {
          phoneNumber = "tel:${8971872487}";
        } else {
          phoneNumber = "telprompt:${1234567890}";
        }
        Linking.openURL(phoneNumber);
      };

   render() {
    return (
        <View style={styles.container} >
        <TouchableOpacity onPress={this.makeCall} activeOpacity={0.7} style={styles.touchableButton} >
          <Text style={styles.TextStyle}>Contact the chef</Text>
        </TouchableOpacity>
      </View>
    );
}
};

const styles = StyleSheet.create(
    {
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
      },
      touchableButton: {
        width: "80%",
        padding: 10,
        backgroundColor: "#9c27b0",
      },
      TextStyle: {
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
      }
  
    });
