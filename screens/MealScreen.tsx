import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Button,
} from "react-native";
import StackNavigation from "../navigation/StackNavigation";
import { MEALS } from "../data/data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavouritesContext } from "../store/context/favourites-context";

type NavigationProp = NativeStackScreenProps<StackNavigation, "MealScreen">;

function MealScreen(
    this: typeof MealScreen,
    { route, navigation }: NavigationProp
) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const favouritesContext = useContext(FavouritesContext);

    const mealIsFavourite = favouritesContext.ids.includes(mealId);

    const onHeaderButtonPressHandler = () => {
        if (mealIsFavourite) {
            favouritesContext.removeFavourite(mealId);
        } else {
            favouritesContext.addFavourite(mealId);
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal?.title,
            headerRight: () => {
                return (
                    <IconButton
                        icon={mealIsFavourite ? "star" : "star-outline"}
                        color="white"
                        onPress={onHeaderButtonPressHandler}
                    />
                );
            },
        });
    }, [mealId, navigation, onHeaderButtonPressHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <View>
                <Image
                    source={{ uri: selectedMeal?.imageUrl }}
                    style={styles.image}
                />
                <Text style={styles.title}>{selectedMeal?.title}</Text>
                <MealDetails
                    duration={selectedMeal?.duration ?? 0}
                    affordability={selectedMeal?.affordability ?? ""}
                    complexity={selectedMeal?.complexity ?? ""}
                    textStyle={styles.detailText}
                />
                <View style={styles.listOuterContainer}>
                    <View style={styles.listInnerContainer}>
                        <Subtitle>Ingredients</Subtitle>
                        <List list={selectedMeal?.ingredients ?? []} />
                        <Subtitle>Steps</Subtitle>
                        <List list={selectedMeal?.steps ?? []} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default MealScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 30,
    },
    image: {
        width: "100%",
        height: 350,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white",
    },
    detailText: {
        color: "white",
    },
    listOuterContainer: {
        alignItems: "center",
    },
    listInnerContainer: {
        width: "80%",
        justifyContent: "center",
    },
});
