import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Linking } from 'react-native-maps';

export const markerZoom = ({zoomId}) => {
  if (zoomId == "1")
    this.map.fitToSuppliedMarkers(['c1','c2']);
}

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView 
        ref={map => {this.map = map}}
        style={styles.map}
        // provider={PROVIDER_GOOGLE}
      >
        <Marker
          // onPress={() => {this.map.fitToSuppliedMarkers(['c1'])}}
          coordinate={{
            latitude: 37,
            longitude: -120,
          }}
          identifier={'c1'}
        >
          <Callout tooltip>
            <View>
              <View style={styles.calloutBubble}>
                <Text style={styles.textMain}>Children's Charity</Text>
                <Text style={styles.textTagline}>We donate to children in need.</Text>
                <Text style={[styles.textType, { color: 'red' }]}>Humanitarian {'\n'}</Text>
                <Image
                  style={styles.calloutImage}
                  source={require('../assets/child.png')}
                />
                <Text 
                  style={styles.calloutURL}
                  onPress={() => {environmentZoom()}}
                >
                    {'\n'}http://wesupportchildren.com
                </Text>
                <Text style={styles.text}>123 Children's Street</Text>
                <Text style={styles.text}>California, USA</Text>
              </View>
              <View style={styles.arrowBorder}/>
              <View style={styles.arrow}/>
            </View>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: 42,
            longitude: -100,
          }}
          identifier={'c2'}
        >
          <Callout tooltip>
            <View>
              <View style={styles.calloutBubble}>
                <Text style={styles.textMain}>Save the Trees</Text>
                <Text style={styles.textTagline}>Save the trees one at a time.</Text>
                <Text style={[styles.textType, { color: 'green' }]}>Environment {'\n'}</Text>
                <Image
                  style={styles.calloutImage}
                  source={require('../assets/tree.png')}
                />
                <Text 
                  style={styles.calloutURL}
                  onPress={() => {environmentZoom()}}
                >
                    {'\n'}http://savethetrees.com
                </Text>
                <Text style={styles.text}>456 Tree Street</Text>
                <Text style={styles.text}>Nebraska, USA</Text>
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