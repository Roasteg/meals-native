import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./slices/favourites";

const store = configureStore({
    reducer: {
        favouriteMeals: favouritesReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
