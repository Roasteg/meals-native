import { StyleSheet, Text, View, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import CategoryGrid from "../components/CategoryGrid";
import { CATEGORIES } from "../data/data";
import Category from "../models/category";
import RootStackParamList from "../navigation/navigation";

type NavigationProp = NativeStackScreenProps<RootStackParamList, "MealsCategories">;

function CategoriesScreen({ navigation }: NavigationProp) {
    function renderCategoryItem(item: Category) {
        const pressHandler = () => {
            navigation.navigate("MealsOverview", {
                categoryId: item.id,
            });
        };

        return (
            <CategoryGrid
                title={item.title}
                color={item.color}
                onPress={pressHandler}
            />
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => renderCategoryItem(item)}
            numColumns={2}
        />
    );
}

export default CategoriesScreen;

const styles = StyleSheet.create({});
