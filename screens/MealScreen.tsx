import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
} from "react-native";
import StackNavigation from "../navigation/StackNavigation";
import { MEALS } from "../data/data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "../components/IconButton";
import { AppDispatch, RootState } from "../store/redux/store";
import {
    addFavourite,
    removeFavourite,
} from "../store/redux/slices/favourites";

type NavigationProp = NativeStackScreenProps<StackNavigation, "MealScreen">;

function MealScreen(
    this: typeof MealScreen,
    { route, navigation }: NavigationProp
) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const favouriteMealIds = useSelector(
        (state: RootState) => state.favouriteMeals.ids
    );
    const dispatch: AppDispatch = useDispatch();

    const mealIsFavourite = favouriteMealIds.includes(mealId);

    const onHeaderButtonPressHandler = () => {
        if (mealIsFavourite) {
            dispatch(removeFavourite(mealId));
        } else {
            dispatch(addFavourite(mealId));
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
