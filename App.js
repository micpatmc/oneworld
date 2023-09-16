import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import { useState } from 'react';
import Map from './Components/Map';
import Header from './Components/Header';
import { Card } from '@rneui/themed';
import data from "./data.json"

export default function App() {
  const [searchResults, setSearchResults] = useState([])

  return (
    <View style={styles.container}>
      <Header setSearchResults={setSearchResults} data={data}/>

      { /* Determine whether to render map or search results */ }
      {searchResults.length == 0
        ? <Map />
        : 
        <ScrollView style={{width:'100%'}}>
          {
            searchResults.map((value, index) => {
              return (
                <Card key={index}>
                  <Card.Image style={styles.cardImage} source={{uri: value.Image}}/>
                  <Card.Title>{value.Name}</Card.Title>
                  <Text style={{textAlign:'center', marginBottom: 20}}>{value.Tagline}</Text>
                  <Card.Divider />
                  <View style={styles.searchResult}>
                    <Text style={styles.cardInfo}><Text style={{fontWeight: "bold"}}>Type:</Text> {value.Type}</Text>
                    <Text style={styles.cardInfo}><Text style={{fontWeight: "bold"}}>Address:</Text> {value.Address}</Text>
                    <Text style={styles.cardInfo}><Text style={{fontWeight: "bold"}}>Website:</Text> {value.Website}</Text>
                    <Text style={styles.cardInfo}><Text style={{fontWeight: "bold"}}>Location:</Text> {value.Location}</Text>
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
  searchResult: {
    height: 150,
  },
  cardImage: {
    marginBottom: 10,
    borderRadius: 5,
  },
  cardInfo: {
    marginVertical: 10,
  },
  debug: {
    borderWidth: 5,
    borderColor: 'red'
  }
});