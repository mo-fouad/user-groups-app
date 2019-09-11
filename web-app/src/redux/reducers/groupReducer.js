import { ADD_NEW_GROUP, DELETE_GROUP, GROUP_CREATED, GROUP_EXISTS } from "../actions/actionTypes";
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

      case GROUP_CREATED:
         return Object.assign({}, state, {
            GroupHasCreated: action
         });
      case GROUP_EXISTS:
         return Object.assign({}, state, {
            GroupExists: action
         });
      default:
         return state;
   }
}
