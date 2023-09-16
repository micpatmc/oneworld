import { StatusBar } from 'expo-status-bar';
import { Keyboard, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View, Animated } from 'react-native';
import { useState } from 'react';
import Map from './components/Map';
import Header from './components/Header';
import { Button, Card } from '@rneui/themed';
import data from "./data.json"
import Favorite from './components/favorite';
import NewCharity from './components/NewCharity';
import AddButton from './components/AddButton'

export default function App() {
  const [searchResults, setSearchResults] = useState([])
  const swipeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(swipeAnim, {
      toValue: 100,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [swipeAnim]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                    <Card.Image style={styles.cardImage} source={{uri: value.Image}}/>
                    <Card.Title>{value.Name}</Card.Title>
                    <Text style={{textAlign:'center', marginBottom: 20}}>{value.Tagline}</Text>
                    <Card.Divider />
                    <View style={styles.searchResult}>
                      <Text style={styles.cardInfo}><Text style={{fontWeight: "bold"}}>Type:</Text> {value.Type}</Text>
                      <Text style={styles.cardInfo}><Text style={{fontWeight: "bold"}}>Address:</Text> {value.Address}</Text>
                      <Text style={styles.cardInfo}><Text style={{fontWeight: "bold"}}>Website:</Text> {value.Website}</Text>
                      <Text style={styles.cardInfo}><Text style={{fontWeight: "bold"}}>Location:</Text> {value.Location}</Text>
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

        <Animated.View // Special animatable View
          style={{
            // ...props.style,
            transform: {translateX: swipeAnim} // Bind opacity to animated value
          }}>
          <Favorite/>
          {/* {props.children} */}
        </Animated.View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
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