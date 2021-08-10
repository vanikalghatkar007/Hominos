/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity, FlatList } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { SavedContext } from "../../../services/saved/saved.context";
import {  KitchenInfo } from "../../../features/kitchens/components/kitchens-info.component";

const KitchenList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const NothingSaved = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;


export const SavedScreen = ({ navigation }) => {
  const { saved } = useContext(SavedContext);

  return saved.length ? (
    <SafeArea>
      <KitchenList
        data={saved}
        renderItem={( {item} ) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("KitchenDetails", {
                kitchen: item,
              })
      }
    >
    <KitchenInfo kitchen={item}/>
    </TouchableOpacity>
        );
      }
    }

        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NothingSaved>
      <Text>Nothing saved yet!</Text>
    </NothingSaved>
  );
};
