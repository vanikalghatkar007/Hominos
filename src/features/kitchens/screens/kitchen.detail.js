/* eslint-disable prettier/prettier */
import React from "react";
import { KitchenInfo } from  "../components/kitchens-info.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { ScrollView } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthButton } from "../../account/components/account.style";
import { DataTable } from "react-native-paper";

export const KitchenDetailScreen = ({route, navigation, children}) => {

    const { kitchen } = route.params;
    return (
       <SafeArea>
        <KitchenInfo kitchen={kitchen} />
        <ScrollView>
        {
          kitchen.menu ? (
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Dish</DataTable.Title>
              <DataTable.Title numeric>Price</DataTable.Title>
            </DataTable.Header>
            {
              kitchen.menu ? (kitchen.menu.map(dish=>
              <DataTable.Row key={dish.dishId}>
                <DataTable.Cell>{dish.dishName}</DataTable.Cell>
                <DataTable.Cell numeric>{dish.price}</DataTable.Cell>
              </DataTable.Row>
              )) : null
            }
           </DataTable>
           ) : null
        }
        </ScrollView>
        <Spacer>
            <AuthButton mode="contained"
            onPress={() => navigation.navigate("OrderScreen")}>
               ORDER
            </AuthButton>
        </Spacer>
        {children}
        </SafeArea>
 
    );
};
