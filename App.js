import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Map from './components/Map';
import Header from './components/Header';
import { Card } from '@rneui/themed';
import data from "./data.json"
import AddButton from './components/AddButton'

export default function App() {
  const [searchResults, setSearchResults] = useState([])

  return (
    <View style={styles.container}>
      <Header setSearchResults={setSearchResults} data={data}/>
      <AddButton />

      { /* Determine whether to render map or search results */ }
      {searchResults.length == 0
        ? <Map />
        : 
        <ScrollView style={{width:'100%'}}>
          {
            searchResults.map((value, index) => {
              return (
                <Card wrapperStyle={styles.searchResult}>
                  <Card.Title>{value.Name}</Card.Title>
                  <Card.Divider />
                  <View>
                    
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
    height: 200,
  },
  debug: {
    borderWidth: 5,
    borderColor: 'red'
  }
});