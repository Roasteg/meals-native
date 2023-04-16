import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealScreen from "./screens/MealScreen";
import StackNavigation from "./navigation/StackNavigation";
import DrawerNavigation from "./navigation/DrawerNavigation";
import FavouritesScreen from "./screens/FavouritesScreen";
import FavouritesContextProvider from "./store/context/favourites-context";

const Stack = createNativeStackNavigator<StackNavigation>();
const Drawer = createDrawerNavigator<DrawerNavigation>();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: "#351401" },
                headerTintColor: "white",
                sceneContainerStyle: { backgroundColor: "#3f2f25" },
                drawerContentStyle: { backgroundColor: "#351401" },
                drawerInactiveTintColor: "white",
                drawerActiveTintColor: "#351401",
                drawerActiveBackgroundColor: "#9c745c",
            }}
        >
            <Drawer.Screen
                name="Home"
                component={CategoriesScreen}
                options={{
                    drawerIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="home" color={color} size={size} />
                        );
                    },
                }}
            />
            <Drawer.Screen
                name="Favourites"
                component={FavouritesScreen}
                options={{
                    drawerIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="star" color={color} size={size} />
                        );
                    },
                }}
            />
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <FavouritesContextProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName="MealsCategories"
                        screenOptions={{
                            headerStyle: { backgroundColor: "#351401" },
                            headerTintColor: "white",
                            contentStyle: { backgroundColor: "#3f2f25" },
                        }}
                    >
                        <Stack.Screen
                            name="MealsCategories"
                            component={DrawerNavigator}
                            options={{
                                title: "All categories",
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="MealsOverview"
                            component={MealsOverviewScreen}
                        />
                        <Stack.Screen
                            name="MealScreen"
                            component={MealScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </FavouritesContextProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
