/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import styled from "styled-components/native";

import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SavedContext } from "../../services/saved/saved.context";

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;


const SavedButton = styled(TouchableOpacity)`
    position: absolute;
    right: 10px;
`;

export const Saved = ({ kitchen }) => {
    const { saved, addToSaved, removeFromSaved } = useContext(
        SavedContext
    );
    const isSaved = saved.find((r) => r.name === kitchen.name);

    return (

        <SectionEnd>
        <SavedButton
          onPress={() =>
           !isSaved ? addToSaved(kitchen)
           : removeFromSaved(kitchen)
           }
           >
            <AntDesign name={isSaved ? "star" : "staro"}  size={36} color={isSaved ? "white" : "white"}/>
        </SavedButton>
        </SectionEnd>
        );
};
