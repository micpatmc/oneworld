import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';


var array = [];

const styles = StyleSheet.create({
    style1: {
        position: 'absolute',
        backgroundColor: 'white',
        height: "100%",
        width: "100%",
        flex: 1,
        zIndex: 2
    },
    style2: {
        backgroundColor: 'grey',
        height: 200,
        width: 400,
        flex: 1
    },
    container: { 
        flex: 1,
        alignItems: "center"
    }
});

const textStyles = StyleSheet.create({
    style1: {
        color: "black",
        fontSize: 30,
        textAlign: "left",
        paddingHorizontal: 30,
        paddingVertical: 100
    },
    style2: {
        color: "grey",
        fontSize: 10,
        textAlign: "left",
        margin: 10, 
    }
})

const NewCharity = () => {
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [message3, setMessage3] = useState("");
    const [message4, setMessage4] = useState("");
    const [message5, setMessage5] = useState("");
  return ( 
    <View style = {styles.style1}>
        <Text style = {textStyles.style1}> Looking to put your Charity on the map?  </Text>
        <Text style = {textStyles.style2}> Name:  </Text>
        <View style = {styles.container}>
        <TextInput 
                placeholder="enter your charity name here"
                value={message1}
                onChangeText={(text) => setMessage1(text)}
                onSubmitEditing={() => array.push(message1)}
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300, }}
            />
        </View>
        <Text style = {textStyles.style2}> Tagline:  </Text>
        <View style = {styles.container}>
        <TextInput 
                placeholder="enter your charity tagline here"
                value={message2}
                onChangeText={(text) => setMessage2(text)}
                onSubmitEditing={() => array.push(message2)}
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300, }}
            />
        </View>
        <Text style = {textStyles.style2}> Type:  </Text>
        <View style = {styles.container}>
        <TextInput 
                placeholder="enter your charity type here"
                value={message3}
                onChangeText={(text) => setMessage3(text)}
                onSubmitEditing={() => array.push(message3)}
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300, }}
            />
        </View>
        <Text style = {textStyles.style2}> Website:  </Text>
        <View style = {styles.container}>
        <TextInput 
                placeholder="enter your website here"
                value={message4}
                onChangeText={(text) => setMessage4(text)}
                onSubmitEditing={() => array.push(message4)}
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300, }}
            />
        </View>
        <Text style = {textStyles.style2}> Address:  </Text>
        <View style = {styles.container}>
        <TextInput 
                placeholder="enter your address info here"
                value={message5}
                onChangeText={(text) => setMessage5(text)}
                onSubmitEditing={() => (array.push(message5) && alert(`Congratulations on configuring ${message1}`))}
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300, }}
            />
        </View>
    </View >
  );
};

export default NewCharity;