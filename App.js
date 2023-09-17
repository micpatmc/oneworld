import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View, Animate} from 'react-native';
import { Card } from '@rneui/themed';
import data from "./data.json"
import ScreenMap from './Components/ScreenMap';
import Header from './Components/Header';
import SplashScreen from './Components/SplashScreen';
import NewCharity from './Components/NewCharity';
import AddButton from './Components/AddButton'
import FavoriteList from './Components/FavoriteList';

export default function App() {
  const [searchResults, setSearchResults] = useState([])
  const [newForm, setNewForm] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false)
  const [favorites, setFavorites] = useState(new Set())
  const [filter, setFilter] = useState(null)
  const [showSplash, setShowSplash] = useState(true)


  const toggleFavorites = () => {
    const newShowFavorites = !showFavorites;
    setShowFavorites(newShowFavorites);
  }

  const handleFavoriteClick = (charityName) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(charityName)) {
      newFavorites.delete(charityName);
    } else {
      newFavorites.add(charityName);
    }
    setFavorites(newFavorites);
  }
  
  SplashScreen.show ;

  const changeFilter = (newFilter) => {
    if (newFilter == filter) {
      setFilter(null)
      return
    }
    setFilter(newFilter);
  }

  const hideSplashScreen = () => {
    setShowSplash(false);
  }


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // SplashScreen.show ;
      hideSplashScreen();
    }, 3000); // 10 seconds
  

    return () => clearTimeout(timeoutId);
  
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }
  

  return (
    <View style={styles.container}>
      <Header toggleFavorites={toggleFavorites} setSearchResults={setSearchResults} data={data} changeFilter={changeFilter} filter={filter}/>
      <AddButton setNewForm={setNewForm}/>

      {
        showFavorites ? <FavoriteList favorites={favorites}/> : <></>
      }

      { /* Determine whether to render map or search results */ }
      {searchResults.length == 0 ?
        <>
          {newForm && <NewCharity setNewForm={setNewForm}/>}
          <ScreenMap data={data} handleFavoriteClick={handleFavoriteClick} filter={filter} favorites={favorites}/>
        </>:
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            searchResults.map((value, index) => {
              return (
                <Card containerStyle={{borderRadius:5}} key={index}>
                  <Card.Image style={styles.cardImage} source={{uri: value.Image[0]}}/>
                  <Card.Title>{value.Name}</Card.Title>
                  <Text style={{textAlign:'center', marginBottom: 20}}>{value.Tagline}</Text>
                  <Card.Divider />
                  <View style={styles.searchResult}>
                    <Text style={styles.cardInfo}><Text style={{fontWeight: "bold"}}>Type:</Text> {value.Type}</Text>
                    <Text style={styles.cardInfo}><Text style={{fontWeight: "bold"}}>Website:</Text> {value.Website}</Text>
                    <Text style={styles.cardInfo}><Text style={{fontWeight: "bold"}}>City:</Text> {value.City}</Text>
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