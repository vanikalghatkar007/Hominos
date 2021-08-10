/* eslint-disable prettier/prettier */
import React, { useState, createContext, useContext, useEffect } from "react";
import { kitchensRequest, kitchensTransform } from "./kitchens.services";
import { LocationContext } from "../location/location.context";

export const KitchensContext = createContext();

export const KitchensContextProvider = ({ children }) => {
    const [kitchens, setKitchens] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);

    const retrieveKitchens = (loc) => {
      setIsLoading(true);
      setKitchens([]);

        setTimeout(() => {
          kitchensRequest(loc)
            .then(kitchensTransform)
            .then((results) => {
              setIsLoading(false);
              setKitchens(results);
            })
            .catch((err) => {
              setIsLoading(false);
              setError(err);
            });
        }, 2000);
      };
    useEffect(() => {
    if (location) {
        const locationString = `${location.lat},${location.lng}`;
        retrieveKitchens(locationString);
        console.log(locationString);
      }
    }, [location]);

    return (
    <KitchensContext.Provider
      value={{
        kitchens,
        isLoading,
        error,
      }}
    >
      {children}
    </KitchensContext.Provider>
  );
};
