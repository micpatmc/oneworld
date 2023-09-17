    import React, { useState, useEffect } from "react";
    import { StyleSheet, View, Image, Animated, Easing, Text } from "react-native";


    const styles = StyleSheet.create({
    
    image: {
        marginTop: 30,
        marginLeft: 0,
        width: 200, 
        height: 200,
    },
    
    div: {
        width: "100%",
        height: "100%",
        backgroundColor: "#6fa8dc",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },




    });

    export default function SplashScreen() {
    

    return (
    
        <View style={styles.div}>    


            <Image
                source={require('../assets/oneworld_logo.png')} 
                style={styles.image}
            />



        </View>
        
    );
    }