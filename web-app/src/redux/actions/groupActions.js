import { ADD_NEW_GROUP, GROUP_EXISTS } from "./actionTypes";
import configureStore from "../configureStore";

const store = configureStore();

import io from "socket.io-client";

const socket = io.connect(process.env.API_URL || "http://localhost:4004/");

socket.on("GroupAlreadyExits", () => {
   store.dispatch(groupAlreadyExists());
});

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

export const groupAlreadyExists = () => {
   console.log("GROUP_EXISTS");
   return {
      type: GROUP_EXISTS
   };
};
