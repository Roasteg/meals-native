import { StyleSheet } from "react-native";
import StackNavigation from "../navigation/StackNavigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MEALS, CATEGORIES } from "../data/data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

type NavigationProp = NativeStackScreenProps<StackNavigation, "MealsOverview">;

function MealsOverviewScreen(
    this: typeof MealsOverviewScreen,
    { route, navigation }: NavigationProp
) {
    const categoryId = route.params.categoryId;
    const displayedMeals = MEALS.filter(
        (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
    );

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === categoryId
        )?.title;

        navigation.setOptions({ title: categoryTitle });
    }, [categoryId, navigation]);

    return <MealsList mealsList={displayedMeals} />;
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
