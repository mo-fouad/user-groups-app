import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import reducers from "./reducers/index";

const loggerMiddleware = createLogger();

function configureStore(initialState) {
   const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

   return createStore(
      reducers,
      initialState,
      composeEnhancers(applyMiddleware(thunk, loggerMiddleware, reduxImmutableStateInvariant()))
   );
}

export default configureStore;
