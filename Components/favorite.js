import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import FavoriteButton from "./FavoriteButton";


const styles = StyleSheet.create({
    style1: {
        backgroundColor: 'white',
        height: 600,
        width: 400,
        flex: 1
    },
    style2: {
        backgroundColor: 'white',
        height: 200,
        width: 400,
        flex: 1
    }
});

const textStyles = StyleSheet.create({
    style1: {
        color: "grey",
        fontSize: 30,
        textAlign: "left",
        paddingHorizontal: 10,
    },
    style2: {
        color: "grey",
        fontSize: 10,
        textAlign: "center",
        margin: 10,
    }
})

export default function Favorite() {
  return ( 
    
    <View style = {styles.style1}>
        <Text style = {textStyles.style1}>Favorites</Text>
        <View style = {styles.style2}>
            <ScrollView vertical={true}  style={{marginVertical: 10, overflow: "hidden"}}>
                <FavoriteButton title="Red Cross"/>
                <FavoriteButton title="Doctors without Borders"/>
                <FavoriteButton title="St. Judes"/>
            </ScrollView>
        </View >
    </View >
  );
};