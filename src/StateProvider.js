import React,{createContext,useContext,useReducer} from "react";

//preparing The Data Layer
export const StateContext=createContext();

// reducer-update info 
// initial State -render on startup
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)} >
        {children}
    </StateContext.Provider>
);
//Hook which allows us to pull information from data layer
export const useStateValue=()=>useContext(StateContext);