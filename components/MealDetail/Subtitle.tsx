import { StyleSheet, Text, View } from "react-native";
import { ReactNode } from "react";
function Subtitle(props: { children: ReactNode }) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{props.children}</Text>
        </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    subtitleContainer: {
        marginHorizontal: 24,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2,
    },
});
