/* eslint-disable prettier/prettier */
import React from "react";
import { KitchensNavigator } from "./kitchens.navigator";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeArea } from "../../components/utility/safe-area.component";

import { ProfileNavigator  } from "./profile.navigator";
import { LocationContextProvider } from "../../services/location/location.context";
import { KitchensContextProvider } from "../../services/kitchens/kitchens.context";
import { SavedContextProvider } from "../../services/saved/saved.context";

const Tab = createMaterialTopTabNavigator();

export const AppNavigator = () =>  (
       <SavedContextProvider>
       <LocationContextProvider>
        <KitchensContextProvider>
        <SafeArea>
        <Tab.Navigator
        tabBarOptions = {{
            activeTintColor: "#f1ce0e",
            inactiveTintColor: "grey",
          }}>
          <Tab.Screen name="Kitchens"  component={KitchensNavigator} />
          <Tab.Screen name="My Profile" component={ProfileNavigator} />
        </Tab.Navigator>
        </SafeArea>
        </KitchensContextProvider>
       </LocationContextProvider>
       </SavedContextProvider>
);
