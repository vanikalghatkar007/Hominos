/* eslint-disable prettier/prettier */
import React, { createContext, useState, useEffect, useContext} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../services/authentication/authentication.context"; 


export const SavedContext = createContext();

export const SavedContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [saved, setSaved] = useState([]);

   const storeSaved = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@saved-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const getSaved = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@saved-${uid}`);
      if (value !== null) {
        setSaved(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

   const add = (kitchen) => {
       setSaved([...saved, kitchen]);
   };

   const remove = (kitchen) => {
       const newSaved = saved.filter(
       (x) => x.name !== kitchen.name);

       setSaved(newSaved);
   };

  useEffect(() => {
    if (user && user.uid) {
    storeSaved();
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && saved.length) {
    getSaved(saved, user.uid);
    }
  }, [saved, user]);

  return (
        <SavedContext.Provider
            value={{
                saved,
                addToSaved: add,
                removeFromSaved: remove,
            }}
        >
            {children}
        </SavedContext.Provider>
    );
};
