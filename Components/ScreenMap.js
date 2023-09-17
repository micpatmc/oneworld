import React from 'react';
import MapView, { Marker, Callout, Linking } from 'react-native-maps';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Card } from '@rneui/themed';

export const markerZoom = ({zoomId}) => {
  if (zoomId == "1")
    this.map.fitToSuppliedMarkers(['en-1','en-2']);
}

// Color according to type of event
const getColor = (type) => {
  switch (type) {
    case 'Disaster Relief':
      return 'blue'
    case 'Impoverished Areas':
      return 'brown'
    case 'Social Justice':
      return 'gray'
    case 'Medical':
      return 'red'
    case 'Animal Relief':
      return 'orange'
    case 'Education':
      return 'green'
    default:
      return 'black'
  }
}

export default function ScreenMap({data, handleFavoriteClick, filter}) {
  
  const openUrl = async(url) => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url)
    } else {
      console.log("Can't open url");
    }
  }
  return (
    <View style={styles.container}>
      <MapView 
        ref={map => {this.map = map}}
        style={styles.map}  
      >
        {data.map((value, index) => {         
          return (!filter || filter == value.Type) ? (
            <Marker
            coordinate={{
               latitude: value.Latitude, 
               longitude: value.Longitude,
              }}
            identifier={value.Name}
            key={index}
            pinColor={getColor(value.Type)}
            >
              <Callout tooltip>
                <View>
                  <View style={styles.calloutBubble}>
                    <Text style={styles.textMain}>{value.Name}</Text>
                    <Text style={styles.textTagline}>{value.Tagline}</Text>
                    <Text style={[styles.textType, { color: 'red' }]}>{value.Type} {'\n'}</Text>
                    <View style={{maxHeight:120}}>
                      <ScrollView>
                        <Card.Image style={styles.calloutImage} source={{uri: value.Image[0]}}/>
                        <Card.Image style={styles.calloutImage} source={{uri: value.Image[0]}}/>
                      </ScrollView>
                    </View>
                    <Text style={styles.calloutURL} onPress={() => Linking.openURL(`${value.Website}`)}>{'\n'}View Webpage</Text>
                    <Text style={styles.text}>{value.City}</Text>
                    <TouchableOpacity style={styles.favorite} onPress={() => handleFavoriteClick(value.Name)}>
                      <FontAwesomeIcon icon={ faStar } style={styles.star} size={ 26 } color={ 'gold' } />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.arrowBorder}/>
                  <View style={styles.arrow}/>
                </View>
              </Callout>
            </Marker>
            ) : <></>
          })
        }
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  map: {
    width: '100%',
    height: '100%',
  },
  marker: {
    width: 100,
    height: 100,
  },
  calloutBubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    maxWidth: 300
  },
  textMain: {
    textAlign: 'left',
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  textTagline: {
    color: '#808080',
    textAlign: 'left',
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  textType: {
    color: '#aaaaaa',
    textAlign: 'left',
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  text: {
    color: '#808080',
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 5
  },
  calloutURL: {
    color: '#0000ff',
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 5
  },
  favorite: {
    position: 'absolute',
    height: 45,
    width: 45,
    right: 7,
    bottom: 7,
    backgroundColor: '#000',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#aaaaaa',
    borderColor: "#d9d9d9",
    borderWidth: 2.5,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderRadius: '100%'
  },
  star: {
    left: 7,
    bottom: 1
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5
  },
  calloutImage: {
    width: 'auto',
    maxHeight: 120,
    borderRadius: 10
  }
});