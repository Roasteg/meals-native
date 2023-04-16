import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
    Platform,
} from "react-native";
import MealDetails from "../MealDetails";

type Props = {
    title: string;
    imageUrl: string;
    duration: number;
    affordability: string;
    complexity: string;
    onPress: () => void;
};

function MealItem(props: Props) {
    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={props.onPress}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            source={{ uri: props.imageUrl }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{props.title}</Text>
                    </View>
                    <MealDetails
                        affordability={props.affordability}
                        duration={props.duration}
                        complexity={props.complexity}
                    />
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8,
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        backgroundColor: "white",
        elevation: 4,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },

    buttonPressed: {
        opacity: 0.5,
    },
});
