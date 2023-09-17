import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { markerZoom } from "./ScreenMap";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const styles = StyleSheet.create({
    filterButton: {
        backgroundColor: 'white',
        margin: 10,
        flex: 1,
        flexDirection: 'row',
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
        margin: 10
    },
});

export default function FilterButton({title, zoomId, imgInfo, iconColor, changeFilter}) {
    const handleClick = () => {
        markerZoom({zoomId});
        changeFilter();
    }
    return (
        <TouchableOpacity onPress={handleClick} style={styles.filterButton}>
            <FontAwesomeIcon icon={imgInfo} style={{right: 5}} size={ 25 } color={ `${iconColor}` } />
            <Text styles={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}
