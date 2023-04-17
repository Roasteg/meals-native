import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

function CategoryGrid(props: {
    title: string;
    color: string;
    onPress: () => void;
}) {
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
                onPress={props.onPress}
            >
                <View
                    style={[
                        styles.innerContainer,
                        { backgroundColor: props.color },
                    ]}
                >
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGrid;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        backgroundColor: "white",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        borderRadius: 8,
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
});
