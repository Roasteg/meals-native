import { StyleSheet, Text, View } from "react-native";
type Props = {
    title: string;
}

function MealItem(props: {title: string}) {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    );
}


export default MealItem;

const styles = StyleSheet.create({});
