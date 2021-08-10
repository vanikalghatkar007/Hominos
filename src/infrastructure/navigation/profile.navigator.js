/* eslint-disable prettier/prettier */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen } from "../../features/profile/screen/profile.screen";
import { SavedScreen } from "../../features/profile/screen/saved.screens";
import { ProfilePictureScreen } from "../../features/profile/screen/profile-picture";
import { ChefRegisterScreen } from "../../features/profile/screen/chefRegister.screen";

const ProfileStack = createStackNavigator();

export const ProfileNavigator = ({ route, navigation }) => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                options={{
                header: () => null,
                }}
                name="My Profile"
                component={ProfileScreen}
        />
            <ProfileStack.Screen name="ProfilePicture" component={ProfilePictureScreen} />
            <ProfileStack.Screen name="Saved" component={SavedScreen} />
            <ProfileStack.Screen name="ChefRegistration" component={ChefRegisterScreen} />

      </ProfileStack.Navigator>
    );
};
