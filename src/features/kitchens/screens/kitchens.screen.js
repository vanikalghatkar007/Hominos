/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import {  FlatList, Pressable } from "react-native";
import styled from "styled-components/native";
import { KitchenInfo } from "../components/kitchens-info.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { KitchensContext } from "../../../services/kitchens/kitchens.context";
import { SavedContext } from "../../../services/saved/saved.context";
import { Search } from "../components/search.component";
import { ActivityIndicator, Colors } from "react-native-paper";



 const KitchenList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const KitchenScreen = ({ navigation }) => {
  const { isLoading, error, kitchens } = useContext(KitchensContext);
  const { saved } = useContext(SavedContext);
  return (
    <SafeArea>
       {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.yellow300} />
        </LoadingContainer>
      )}
    <Search />
    <KitchenList
      data={kitchens}
      renderItem={( {item} ) => {
      return (
        <Pressable onPress={() => navigation.navigate("KitchenDetails", {
          kitchen: item,
        })
        }
      >
          <KitchenInfo kitchen={item}/>
        </Pressable>
        );
        }}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);

};
