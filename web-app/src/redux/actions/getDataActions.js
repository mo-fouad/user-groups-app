import { ON_CONNECT } from "./actionTypes";
import io from "socket.io-client";

const socket = io.connect(process.env.API_URL || "http://localhost:4004/");

export const isConnected = data => {
   return {
      type: ON_CONNECT,
      payload: data
   };
};

export const getGroupsData = () => {
   return dispatch => {
      socket.on("dataUpdated", data => {
         dispatch(isConnected(data));
      });
   };
};
