import { ADD_NEW_GROUP, DELETE_GROUP } from "../actions/actionTypes";
import { initialStatus } from "../initialState";

export default function groupReducer(state = initialStatus, action) {
   switch (action.type) {
      case ADD_NEW_GROUP:
         return Object.assign({}, state, {
            addNewGroupData: action.payload
         });
      case DELETE_GROUP:
         return Object.assign({}, state, {
            DeleteGroupData: action.group_id
         });
      default:
         return state;
   }
}
