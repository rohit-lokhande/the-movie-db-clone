import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import homeReducer from "./reducer/home-reducer";
import detailsReducer from "./reducer/details-reducer";
import paginationReducer from "./reducer/pagination-reducer";
import searchReducer from "./reducer/search-reducer";
import authReducer from "./reducer/auth-reducer";
import dicussionReducer from "./reducer/dicussion-reducer";


const reducers = combineReducers(
    {
        home: homeReducer,
        details: detailsReducer,
        pagination: paginationReducer,
        search: searchReducer,
        auth: authReducer,
        dicussion: dicussionReducer
    }, composeWithDevTools(applyMiddleware(thunk))
);


const store = configureStore({
    reducer: reducers
});

export default store;