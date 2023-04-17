import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Favourites = {
    ids: string[]
}

const initialState: Favourites = {
    ids: []
}

const favouritesReducer = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        addFavourite: (state, action: PayloadAction<string>) => {
            state.ids.push(action.payload);
        },
        removeFavourite: (state, action: PayloadAction<string>) => {
            state.ids.splice(state.ids.indexOf(action.payload), 1);
        }
    }
})


export const addFavourite = favouritesReducer.actions.addFavourite;
export const removeFavourite = favouritesReducer.actions.removeFavourite;
export default favouritesReducer.reducer;