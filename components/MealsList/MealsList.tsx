import { FlatList, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import StackNavigation from "../../navigation/StackNavigation";
import Meal from "../../models/meal";
import MealItem from "./MealItem";

type NavigationType = NativeStackNavigationProp<StackNavigation>;

function MealsList(this: typeof MealsList, props: { mealsList: Meal[] }) {
    const navigation = useNavigation<NavigationType>();
    const onMealPressHandler = (id: string) => {
        navigation.navigate("MealScreen", {
            mealId: id,
        });
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={props.mealsList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <MealItem
                        title={item.title}
                        imageUrl={item.imageUrl}
                        duration={item.duration}
                        affordability={item.affordability}
                        complexity={item.complexity}
                        onPress={onMealPressHandler.bind(this, item.id)}
                    />
                )}
            />
        </View>
    );
}

export default MealsList;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
