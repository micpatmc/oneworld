import { TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    favoriteButton: {
        backgroundColor: 'white',
        margin: 10,
        height: 50,
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 5,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    buttonText: {
        marginHorizontal: 10,
        color:"red",
    },
});

export default function FavoriteButton({title}) {
    return (
        <TouchableOpacity style={styles.favoriteButton}>
            <Text styles={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}
