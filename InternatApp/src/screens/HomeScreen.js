import { StyleSheet, Text, View, Button, SafeAreaView, ImageBackground } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen({navigation}) {

  const handlePress = () => {
    navigation.navigate('Effectif');
  }

  const handleAbout = () => {
    navigation.navigate('About');
  }

  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground source={require('../../assets/bg1.jpg')} style={styles.image}>
    <Text style={styles.title}>Bienvenue Sur Votre Espace Internat de l'excellence De Guebwiller</Text>
   
      <Button style={styles.button} title='Effectif' onPress={handlePress} />
      <Button style={styles.button} title='Contact' onPress={handleAbout} />
 </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9E9A9A32',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 100,
  },
  bouton: {
    marginHorizontal: 20,
    marginVertical: 10,
    width: '60%',
    fontWeight: 'bold',
    backgroundColor: '#066493',
    borderRadius: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '75%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  }
})