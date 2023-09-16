import { Alert, ScrollView, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { SearchBar } from "@rneui/themed";
import { useState } from "react";
import FilterButton from "./FilterButton";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const height_proportion = '20%';

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        height: height_proportion,
        paddingTop: 50,
    },
    searchArea: {
        flex:1,  
        width: "100%",
        alignItems: 'center', 
        flexDirection: 'row',
        margin: 10,
    },
    searchResult: {
        borderColor: 'red',
        borderWidth: 5,
    }
});

export default function Header({setSearchResults, data}) {
    const [text, setText] = useState(null)

    const onStarPress = () => {
        Alert.alert('Favorites', 'Awaiting Alain\'s Favorites Page', 
        [
            {
                text: 'Cancel',
                onPress: () => {console.log('Canceled')},
                style: 'cancel',
            },
            {
                text: 'OK',
                onPress: () => {console.log('OK')},
            }
        ]
        );
    }

    const handleSearch = (searchString) => {
        const newSearchResults = data.filter((charity) => {
            return charity.Name.toLowerCase().includes(searchString.toLowerCase());
        });
        setText(searchString);
        // Ensure the empty string doesn't cause a filter
        if (searchString == "") {
            setSearchResults([]);
        } else {
            setSearchResults(newSearchResults);
        }
    }

    return (
        <View style={styles.header}>
            <View style={styles.searchArea}>
                <View style={{flex:10}}>
                    <SearchBar 
                    round={true} 
                    ref={search => this.search = search}
                    containerStyle = {{backgroundColor: 'none', borderTopWidth: 0, borderBottomWidth: 0}}
                    inputContainerStyle = {{ backgroundColor:'#d9d9d9' }}
                    onChangeText={handleSearch}
                    value={text}
                    placeholder="Search"
                    />
                </View>
                <TouchableOpacity onPress={ onStarPress } style={ {flex:1} }>
                    <FontAwesomeIcon icon={ faStar } size={ 32 } color={ 'gold' } />
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginHorizontal: 10, overflow: "hidden"}}>
                <FilterButton title="Environmental"/>
                <FilterButton title="Education"/>
                <FilterButton title="Wildfires"/>
                <FilterButton title="Wildlife"/>
                <FilterButton title="Natural Disasters"/>
                <FilterButton title="Terrorism"/>
            </ScrollView>
        </View>
    );
}