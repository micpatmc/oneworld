import { StatusBar } from 'expo-status-bar';
import { Keyboard, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import { useState } from 'react';
import Map from './Components/Map';
import Header from './Components/Header';
import { Button, Card } from '@rneui/themed';
import data from "./data.json"
import AddButton from './Components/AddButton'

export default function App() {
  const [searchResults, setSearchResults] = useState([])

  return (
    <View style={styles.container}>
      <Header setSearchResults={setSearchResults} data={data}/>
    <AddButton />

      { /* Determine whether to render map or search results */ }
      {searchResults.length == 0 ?
        <Map /> :
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            searchResults.map((value, index) => {
              return (
                <Card key={index}>
                  {
                  /* Render Images */
                  value.Image.map((value) => {
                    console.log(value)
                  })
                  }
                  <Card.Image style={styles.cardImage} source={{uri: value.Image[0]}}/>
                  <Card.Title>{value.Name}</Card.Title>
                  <Text style={{textAlign:'center', marginBottom: 20}}>{value.Tagline}</Text>
                  <Card.Divider />
                  <View style={styles.searchResult}>
                    <Text style={styles.cardInfo}><Text style={{fontWeight: "bold"}}>Type:</Text> {value.Type}</Text>
                    <Text style={styles.cardInfo}><Text style={{fontWeight: "bold"}}>Website:</Text> {value.Website}</Text>
                    <Text style={styles.cardInfo}><Text style={{fontWeight: "bold"}}>City:</Text> {value.City}</Text>
                    <Button style={styles.cardButton} size='lg' buttonStyle={{backgroundColor:"black"}}>
                      <Text style={{fontWeight:'bold', color:"white"}}>Go To Location</Text>
                    </Button>
                  </View>
                </Card>
              );
            })
          }
        </ScrollView>
      }

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    marginBottom: 10,
    borderRadius: 5,
  },
  cardInfo: {
    marginVertical: 10,
  },
  cardButton: {
    marginLeft: 'auto',
  },
  debug: {
    borderWidth: 5,
    borderColor: 'red'
  }
});