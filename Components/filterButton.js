import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { markerZoom } from "./Map";

const styles = StyleSheet.create({
    filterButton: {
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 5,
        width: 100,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color:"red",
    }
});

export default function FilterButton({title, zoomId}) {
    return (
        <TouchableOpacity onPress={() => markerZoom({zoomId})} style={styles.filterButton}>
            <Text styles={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}