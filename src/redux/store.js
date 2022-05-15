import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import main from "./reducers/main_reducer";
import basket from "./reducers/basket_reducer";

const reducers = combineReducers({
  main,
  basket,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
