/* eslint-disable prettier/prettier */
import React from "react";
import { KitchenDetailScreen } from "../../features/kitchens/screens/kitchen.detail";

import { createStackNavigator } from "@react-navigation/stack";
import { KitchenScreen } from "../../features/kitchens/screens/kitchens.screen";
import { OrderScreen } from "../../features/kitchens/screens/order.screen";

const KitchenStack = createStackNavigator();

export const KitchensNavigator = () => {
  return (
    <KitchenStack.Navigator headerMode="none">

      <KitchenStack.Screen
        name="Kitchens"
        component={KitchenScreen}
      />

      <KitchenStack.Screen
        name="KitchenDetails"
        component={KitchenDetailScreen}
      />
       <KitchenStack.Screen
        name="OrderScreen"
        component={OrderScreen}
      />

      </KitchenStack.Navigator>
  );
};
