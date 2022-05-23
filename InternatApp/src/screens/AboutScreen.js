import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Linking } from 'react-native';
import MapView,{ Marker } from 'react-native-maps';


const onPressMobileNumberClick = (number) => {

  let phoneNumber = '';
  if (Platform.OS === 'android') {
    phoneNumber = `tel:${number}`;
  } else {
    phoneNumber = `telprompt:${number}`;
  }

  Linking.openURL(phoneNumber);
}

export default function AboutScreen() {

  const [mapRegion, setmapRegion] = useState({
    latitude: 47.9057925,
    longitude: 7.213534,
    latitudeDelta: 0.0022,
    longitudeDelta: 0.00421,
  });


  return (
    <SafeAreaView style={styles.container}>
   
      <Text style={styles.contact}>Nous contacter : </Text>
     
      <TouchableOpacity 
          onPress={() => { onPressMobileNumberClick("0678000000") }} >
          <Text style={styles.phone}>Tel: 0678000000</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Email: craig03@hotmail.fr</Text>
      <Text style={styles.text}>Adresse: </Text>
      <Text style={styles.adress}>5, rue de chanoines, 68500 GUEBWILLER</Text>
  

      <MapView
        style={{ alignSelf: 'stretch', height: '50%', margin: 20}}
        region={mapRegion}
      >
        <Marker coordinate={mapRegion} title='Marker' />
      </MapView>
    
    </SafeAreaView>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contact: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 45,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
  },
  phone: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#066490',
  },
  adress: {
    fontSize: 20,
  }
});