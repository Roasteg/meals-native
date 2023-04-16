import { StyleSheet, Text, View, ViewStyle, TextStyle } from "react-native";

type Props = {
    duration: number;
    complexity: string;
    affordability: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
};

function MealDetails(props: Props) {
    return (
        <View style={[styles.details, props.style]}>
            <Text style={[styles.detailItem, props.textStyle]}>
                {props.duration}m
            </Text>
            <Text style={[styles.detailItem, props.textStyle]}>
                {props.complexity.toUpperCase()}
            </Text>
            <Text style={[styles.detailItem, props.textStyle]}>
                {props.affordability.toUpperCase()}
            </Text>
        </View>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        justifyContent: "center",
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});
