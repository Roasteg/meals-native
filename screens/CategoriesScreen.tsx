import { StyleSheet, Text, View, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CompositeScreenProps } from "@react-navigation/native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import CategoryGrid from "../components/CategoryGrid";
import { CATEGORIES } from "../data/data";
import Category from "../models/category";
import StackNavigation from "../navigation/StackNavigation";
import DrawerNavigation from "../navigation/DrawerNavigation";

type NavigationProp = CompositeScreenProps<
    DrawerScreenProps<DrawerNavigation, "Home">,
    NativeStackScreenProps<StackNavigation, "MealsCategories">
>;

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
