import React from "react";
import useAuth from "./useAuth";
import axios from "../api/axios";

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const refresh = async (token) => {
    const response = await axios.get(`/api/VoiceSellers/RefreshToken/${token}`);
    setAuth((prev) => {
      console.log(response.data);

      return { ...prev, token: response.data };
    });
    return response.data;
  };
  return refresh;
};

export default useRefreshToken;
