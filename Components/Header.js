import { Alert, ScrollView, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { SearchBar } from "@rneui/themed";
import { useState } from "react";
import FilterButton from "./FilterButton";
import { faStar, faSchool, faTree, faDog, faChild, faMedkit, faBalanceScale, faHouseChimneyCrack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const height_proportion = '20%';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        height: height_proportion,
        paddingTop: 50,
    },
    searchArea: {
        flex:1,  
        width: "100%",
        alignItems: 'center', 
        flexDirection: 'row',
        margin: 20,
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
                <View style={{flex:8}}>
                    <SearchBar 
                    round={true} 
                    ref={search => this.search = search}
                    containerStyle = 
                    {{
                        backgroundColor: 'none',
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        paddingRight: 20,
                        paddingLeft: 20,
                        shadowColor: '#171717',
                        shadowOffset: {width: -2, height: 4},
                        shadowOpacity: 0.1,
                        shadowRadius: 5
                    }}
                    inputContainerStyle = {{ backgroundColor:'#d9d9d9' }}
                    onChangeText={handleSearch}
                    value={text}
                    placeholder="Search"
                    />
                </View>
                <TouchableOpacity onPress={ onStarPress } 
                    style={{
                        flex:1, 
                        marginRight: 20, 
                        borderRadius: '100%',
                        height: 50,
                        width: 90,
                        alignContent: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#aaaaaa',
                        borderColor: "#d9d9d9",
                        borderWidth: 2.5,
                        shadowOffset: {width: -2, height: 4},
                        shadowOpacity: 0.1,
                        shadowRadius: 5
                        }}
                    >
                    <FontAwesomeIcon icon={ faStar } style={{left: 6, bottom: 1}} size={ 32 } color={ 'gold' } />
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginHorizontal: 10, overflow: "hidden"}}>
                <FilterButton title="Environmental" zoomId="1" imgInfo={faTree}/>
                <FilterButton title="Education" zoomId="2" imgInfo={faSchool}/>
                <FilterButton title="Animal Relief" zoomId="3" imgInfo={faDog}/>
                <FilterButton title="Impoverished Areas" zoomId="4" imgInfo={faHouseChimneyCrack}/>
                <FilterButton title="Social Justice" zoomId="5" imgInfo={faBalanceScale}/>
                <FilterButton title="Medical" zoomId="6" imgInfo={faMedkit}/>
            </ScrollView>
        </View>
    );
}