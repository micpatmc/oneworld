import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

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
                <Text style={styles.calloutText}>Name</Text>
                <Text style={styles.calloutText}>Address</Text>
                {/* <Image  */}
                  {/* style={styles.calloutImage} */}
                  {/* source={require('../assets/pin.png')} */}
                {/* /> */}
              </View>
              <View style={styles.arrowBorder}/>
              <View style={styles.arrow}/>
            </View>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: 37,
            longitude: -100,
          }}
          image={require('../assets/pin.png')}
          title="Charity"
          description="Wildfires"
        >
          <Callout tooltip>
            <View>
              <View style={styles.calloutBubble}>
                <Text style={styles.calloutText}>Charity2</Text>
                <Text style={styles.calloutText}>Address</Text>
                <Text style={styles.calloutText}></Text>
                {/* <Image  */}
                  {/* style={styles.calloutImage} */}
                  {/* source={require('../assets/pin.png')} */}
                {/* /> */}
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
    width: 150
  },
  calloutText: {
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