/* eslint-disable prettier/prettier */
import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const kitchensRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const kitchensTransform = ({ results = [] }) => {
  const mappedResults = results.map((kitchen) => {
        kitchen.photos = kitchen.photos.map((p) => {
          return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
        });


  return {
      ...kitchen,
      address: kitchen.vicinity,
    };
  });

  return camelize(mappedResults);
};
