import { ADD_NEW_GROUP, DELETE_GROUP } from "./actionTypes";

import io from "socket.io-client";

const socket = io.connect(process.env.API_URL || "http://localhost:4004/");

export const postAddNewGroup = data => {
   return {
      type: ADD_NEW_GROUP,
      payload: data
   };
};

export const addNewGroupAction = data => {
   return dispatch => {
      socket.emit("addNewGroup", data);
   };
};
