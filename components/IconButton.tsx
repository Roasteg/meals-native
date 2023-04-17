import { StyleSheet, Pressable, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
    icon: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
    color?: string;
    style?: ViewStyle;
};

function IconButton(props: Props) {
    return (
        <Pressable
            onPress={props.onPress}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <Ionicons name={props.icon} size={24} color={props.color} />
        </Pressable>
    );
}
export default IconButton;
const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5,
    },
});
