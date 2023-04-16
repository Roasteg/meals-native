import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/data";

function FavouritesScreen() {
    const favouritesContext = useContext(FavouritesContext);
    const favouriteMealsIds = favouritesContext.ids;
    const meals = MEALS.filter((meal) => favouriteMealsIds.includes(meal.id));
    if(meals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favourite meals yet.</Text>
            </View>
        )
    }
    return <MealsList mealsList={meals} />;
}

export default FavouritesScreen;
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontWeight: "bold",
        fontSize: 18,
        color: "white"
    }
});
