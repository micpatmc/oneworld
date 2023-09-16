import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
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
  bubble: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  name: {
    fontSize: 16,
    marginBottom: 5
  }
});