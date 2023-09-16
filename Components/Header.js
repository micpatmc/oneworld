import { ScrollView, StyleSheet, View } from "react-native";
import { SearchBar } from "@rneui/themed";
import { useState } from "react";
import FilterButton from "./FilterButton";

const height_proportion = '20%';

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'gray',
        height: height_proportion,
        paddingTop: 50,
        paddingBottom: 10,
    },
});

export default function Header() {
    const [text, setText] = useState('')
    return (
        <View style={styles.header}>
            <SearchBar 
            round={true} 
            ref={search => this.search = search}
            containerStyle = {{backgroundColor: 'none', borderTopWidth: 0, borderBottomWidth: 0}}
            onChangeText={setText}
            value={text}
            placeholder="Search"
            />
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
