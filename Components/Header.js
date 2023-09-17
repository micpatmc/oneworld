import { Alert, ScrollView, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { SearchBar } from "@rneui/themed";
import { useState } from "react";
import FilterButton from "./FilterButton";
import { faStar, faHurricane, faDog, faMedkit, faBalanceScale, faHouseChimneyCrack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ToggleFavorite } from "../App";

const height_proportion = '20%';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        height: height_proportion,
        paddingTop: 40,        
    },
    searchArea: {
        flex:1,  
        width: "100%",
        alignItems: 'center', 
        flexDirection: 'row',
        margin: 20,
        borderRadius: 5,
        borderColor: 'red',
    },
});

export default function Header({toggleFavorites, setSearchResults, data}) {
    const [text, setText] = useState(null)

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
                <TouchableOpacity onPress={ toggleFavorites } 
                    style={{
                        height: 50,
                        width: 50,
                        borderRadius: "50%",
                        alignItems: "center",
                        justifyContent: 'center',
                        marginRight: 20,                         
                        backgroundColor: '#aaaaaa',
                        borderColor: "#d9d9d9",
                        borderWidth: 2.5,
                        shadowOffset: {width: -2, height: 4},
                        shadowOpacity: 0.1,
                        shadowRadius: 5,
                        }}
                    >
                    <FontAwesomeIcon icon={ faStar } size={ 32 } color={ 'gold' } />
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginHorizontal:20, overflow: "hidden"}}>
                <FilterButton title="Disaster Relief" zoomId="1" imgInfo={faHurricane}/>
                <FilterButton title="Impoverished Areas" zoomId="3" imgInfo={faHouseChimneyCrack}/>
                <FilterButton title="Social Justice" zoomId="5" imgInfo={faBalanceScale}/>
                <FilterButton title="Animal Relief" zoomId="2" imgInfo={faDog}/>
                <FilterButton title="Medical" zoomId="4" imgInfo={faMedkit}/>
            </ScrollView>
        </View>
    );
}