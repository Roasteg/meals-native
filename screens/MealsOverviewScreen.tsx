import { StyleSheet, Text, View, FlatList } from "react-native";
import RootStackParamList from "../navigation/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MEALS } from "../data/data";
import MealItem from "../components/MealItem";

type NavigationProp = NativeStackScreenProps<
    RootStackParamList,
    "MealsOverview"
>;

function MealsOverviewScreen({ route }: NavigationProp) {
    const categoryId = route.params.categoryId;
    const displayedMeals = MEALS.filter(
        (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MealItem title={item.title} />}
            />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
