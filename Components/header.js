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
                <FilterButton title="Environmental" zoomId="1" />
                <FilterButton title="Education" zoomId="2"/>
                <FilterButton title="Wildfires" zoomId="3"/>
                <FilterButton title="Wildlife" zoomId="4"/>
                <FilterButton title="Natural Disasters" zoomId="5"/>
                <FilterButton title="Terrorism" zoomId="6"/>
            </ScrollView>
        </View>
    );
}