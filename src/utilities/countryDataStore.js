import { writable } from "svelte/store";

export const countryDataStore = writable([]);

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    countryDataStore.set(data);
  });
