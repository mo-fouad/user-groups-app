import { ON_CONNECT, ON_DISCONNECT } from "../actions/actionTypes";
import { initialStatus } from "../initialState";

export default function getDataReducer(state = initialStatus, action) {
   switch (action.type) {
      case ON_CONNECT:
         return Object.assign({}, state, {
            groupsData: action.payload
         });
      case ON_DISCONNECT:
         return Object.assign({}, state, {
            groupsData: {}
         });
      default:
         return state;
   }
}
