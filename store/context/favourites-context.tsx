import { ReactNode, createContext, useState } from "react";

type TFavouritesContext = {
    ids: string[];
    addFavourite: (id: string) => void;
    removeFavourite: (id: string) => void;
}

export const FavouritesContext = createContext<TFavouritesContext>({
    ids: [],
    addFavourite: (id: string) => {},
    removeFavourite: (id: string) => {},
});

function FavouritesContextProvider(props: { children: ReactNode }) {
    const [favouriteMealIds, setFavouriteMealIds] = useState<string[]>([]);

    const addFavourite = (id: string) => {
        setFavouriteMealIds((currentIds) => [...currentIds, id]);
    };

    const removeFavourite = (id: string) => {
        setFavouriteMealIds((currentIds) =>
            currentIds.filter((value) => value !== id)
        );
    };

    const value: TFavouritesContext= {
        ids: favouriteMealIds,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite 
    }

    return (
        <FavouritesContext.Provider value={value}>
            {props.children}
        </FavouritesContext.Provider>
    );
}

export default FavouritesContextProvider;
