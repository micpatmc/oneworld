import React, { useState, useRef, useEffect } from "react"
import { Alert, Animated, TextInput, StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const styles = StyleSheet.create({
    page: {
        position: 'absolute',
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
        zIndex: 1,
        alignItems: 'center',
        paddingVertical: 100,
        paddingHorizontal: 50,
    },
    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    input: {
        width:'100%',
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 5,
        borderBottomWidth: 2,
    },
    button: {
        height: 75,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
    },
    title: {
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 50,
    },
    icon: {
        position:'absolute',
        top: 65,
        right: 30,
    }
})

export default NewCharity = ({setNewForm}) => {
    const [response1, setResponse1] = useState('');
    const [response2, setResponse2] = useState('');
    const [response3, setResponse3] = useState('');
    const [response4, setResponse4] = useState('');
    const [response5, setResponse5] = useState('');
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    const onSubmission = () => {
        if (response1 == '') {
            Alert.alert('Please enter a charity name.', '', [
                {
                    text: 'Ok',
                    isPreferred: true,
                }
            ]
            );
            return
        }
        if (response2 == '') {
            Alert.alert('Please enter a tagline.', '', [
                {
                    text: 'Ok',
                    isPreferred: true,
                }
            ]
            );
            return
        }
        if (response3 == '') {
            Alert.alert('Please enter a charity type.', '', [
                {
                    text: 'Ok',
                    isPreferred: true,
                }
            ]
            );
            return
        }
        if (response4 == '') {
            Alert.alert('Please enter a location.', '', [
                {
                    text: 'Ok',
                    isPreferred: true,
                }
            ]
            );
            return
        }

        setResponse1('');
        setResponse2('');
        setResponse3('');
        setResponse4('');
        setResponse5('');
        Alert.alert('Request Submitted!', '', [
            {
                text: 'Ok',
                onPress: () => { setNewForm(false) },
            }
        ]
        );
    }

    return (
        <Animated.View View style={{...styles.page, opacity: fadeAnim}}>
            <TouchableOpacity style={styles.icon} onPress={() => {setNewForm(false)}}><FontAwesomeIcon size={ 25 } icon={ faX }/></TouchableOpacity>
            <ScrollView  showsVerticalScrollIndicator={false} automaticallyAdjustKeyboardInsets={true} contentContainerStyle={styles.container}>
                <View style={styles.title}>
                    <Text style={{fontSize: 35}}>Register Your Charity</Text>
                </View>
                <TextInput style={styles.input} onChangeText={setResponse1} placeholder="Charity Name" placeholderTextColor={'#de7c7c'}/>
                <TextInput style={styles.input} onChangeText={setResponse2} placeholder="Description" placeholderTextColor={'#de7c7c'}/>
                <TextInput style={styles.input} onChangeText={setResponse3} placeholder="Type" placeholderTextColor={'#de7c7c'}/>
                <TextInput style={styles.input} onChangeText={setResponse4} placeholder="Location" placeholderTextColor={'#de7c7c'}/>
                <TextInput style={styles.input} onChangeText={setResponse5} placeholder="Website" placeholderTextColor={'#de7c7c'}/>
                <TouchableOpacity onPress={onSubmission} style={styles.button}>
                    <Text style={styles.text}> Submit </Text>
                </TouchableOpacity>          
            </ScrollView>
        </Animated.View>
    );
}