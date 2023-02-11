import React from "react";
import { useQuery } from "react-query";

export const useQueryHook = () => {
  const BASE_URL = "https://api.punkapi.com/v2/beers/random";
  const fetcher = async () => {
    try {
      const response = await fetch(BASE_URL);
      if (response?.ok) {
        return response.json();
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return useQuery("hook", fetcher);
};
