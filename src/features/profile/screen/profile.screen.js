/* eslint-disable prettier/prettier */
import React, { useContext, useState } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List,Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AuthButton } from "../../account/components/account.style";
import { firebaseInit } from "../../../../App";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";



let db = null;
let chefsRef = null;

if (firebaseInit){
  db = firebaseInit.database();
}

const ProfileItems = styled(List.Item)`
    padding: ${(props) => props.theme.space[3]}; 
`;

const AvatarContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding-right: 20px;
`;

const AuthButtonContainer = styled.View`
    padding-top: 200px; 
`;


export const ProfileScreen = ({ navigation }) => {
    const { onLogout, user } = useContext(AuthenticationContext);
    const [photo, setPhoto] = useState(null);
    
    const getProfilePicture = async (currentUser) => {
        const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
        setPhoto(photoUri);
      };
    
      useFocusEffect(() => {
        getProfilePicture(user);
      }, [user]);
    

    return (
    <SafeArea>
        <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("ProfilePicture")}>
        {!photo && (
           <Avatar.Icon size={130} icon="account-circle" color="#f1ce0e" />
           )}
           {photo && (
             <Avatar.Image
               size={130}
               source={{ uri: photo }}
               backgroundColor="#2182BD"
             />
           )}
        </TouchableOpacity>
          <Spacer size="large" position="left">
              <Text>{user.email}</Text>
          </Spacer>
        </AvatarContainer>
        <List.Section>
            <ProfileItems
              title="Saved"
              left={(props) => <List.Icon {...props} color="#f1ce0e" icon="star"/>}
              onPress={() => navigation.navigate("Saved")}
            />
            <ProfileItems
               title="Chef Registration"
               left={(props) => <List.Icon {...props} color="#f1ce0e" icon="chef-hat"/>}
               onPress={() => navigation.navigate("ChefRegistration")}
            />

        </List.Section>
        <AuthButtonContainer>
        <AuthButton mode="contained"
            onPress={() => onLogout()} >
                logout
        </AuthButton>
        </AuthButtonContainer>
    </SafeArea>
 );
};

