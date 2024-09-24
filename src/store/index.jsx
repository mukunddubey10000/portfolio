import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mouseUtils from "../Mouse/mouseUtils";
import { useSelector } from "react-redux";

const reducers = combineReducers({
    mouse: mouseUtils
});

const store = configureStore({
    reducer: reducers,
});

export const useAppSelector = useSelector;

export default store;