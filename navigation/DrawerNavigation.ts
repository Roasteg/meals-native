import { NavigatorScreenParams } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";

type DrawerNavigation = {
    Home: NavigatorScreenParams<StackNavigation>;
    Favourites: undefined;
}

export default DrawerNavigation;