import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Linking } from 'react-native-maps';

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 37,
          longitude: -122,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37,
            longitude: -120,
          }}
          image={require('../assets/pin.png')}
          title="Charity"
          description="Wildfires"
        >
          <Callout tooltip>
            <View>
              <View style={styles.calloutBubble}>
                <Text style={styles.textMain}>Children's Charity</Text>
                <Text style={styles.textTagline}>We donate to children in need.</Text>
                <Text style={styles.textType}>Humanitarian {'\n'}</Text>
                {/* <Image  */}
                  {/* style={styles.calloutImage} */}
                  {/* source={require('../assets/pin.png')} */}
                {/* /> */}
                <Text 
                  style={styles.calloutURL}
                  onPress={() => {Linking.openURL('http://google.com')}}  
                >
                    http://wesupportchildren.com
                </Text>
                <Text style={styles.text}>Children Street</Text>
                <Text style={styles.text}>California, USA</Text>
              </View>
              <View style={styles.arrowBorder}/>
              <View style={styles.arrow}/>
            </View>
          </Callout>
        </Marker>
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
    zIndex: 100
  },
  calloutBubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
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

  }
});