import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, View, ScrollView, StyleSheet, Text, TouchableOpacity, LogBox } from 'react-native';
import { SectionList } from 'react-native-web';
import Card from '../shared/Card';
import { Platform } from 'react-native'
import {ViewPropTypes} from 'deprecated-react-native-prop-types';
import Button from '../shared/Button';


export default function EffectifScreen ({navigation}) {

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested", "ViewPropTypes will be removed",
    "ColorPropType will be removed","exported from 'deprecated-react-native-prop-types'.",])
  }, [])

  const [data6, setData6] = useState([
    
    {key: '1', name: 'Kaïs', grade: '6éme4', age: '12', infos: 'Lorem ipsum si dolor amet Lorem ipsum si dolor amet Lorem ipsum si dolor amet ', photo: '1'},
    {key: '2', name: 'Kylian', grade: '6éme5', age: '12', infos: 'Lorem ipsum', photo: '2'},
    {key: '3', name: 'Amine', grade: '6éme4', age: '12', infos: 'Lorem ipsum', photo: '3'},
    {key: '4', name: 'Alycia', grade: '6éme4', age: '12', infos: 'Lorem ipsum', photo: '4'},
    
]);

  const [data5, setData5] = useState([
    {key: '1', name: 'Nelson', grade: '5éme4', age: '14', infos: 'Lorem ipsum', photo: '5'},
    {key: '2', name: 'Noah', grade: '5éme5', age: '14', infos: 'Lorem ipsum', photo: '6'},
    {key: '3', name: 'Jean', grade: '5éme4', age: '15', infos: 'Lorem ipsum', photo: '7'},
    {key: '4', name: 'Erika', grade: '5éme4', age: '13', infos: 'Lorem ipsum', photo: '8'},
  ]);

  const [data4, setData4] = useState([
    {key: '1', name: 'Maelïs', grade: '4éme4', age: '14', infos: 'Lorem ipsum', photo: '9'},
    {key: '2', name: 'Luigi', grade: '4éme5', age: '14', infos: 'Lorem ipsum', photo: '10'},
    {key: '3', name: 'Mourad', grade: '4éme4', age: '15', infos: 'Lorem ipsum', photo: '11'},
    {key: '4', name: 'Rayan', grade: '4éme4', age: '13', infos: 'Lorem ipsum', photo: '12'},
  ]);

  return(
    <SafeAreaView style={styles.container}>
    <ScrollView>
   
    <Text style={styles.header}>6ème</Text>
    <FlatList
      data={data6}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('Infos', item)}>
          <Card>
            <Text style={styles.title}>{item.name}</Text>
          </Card>
        </TouchableOpacity>
      )}
     />
    
        <Text style={styles.header}> 5ème</Text>
     <FlatList
      data={data5}
     
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('Infos', item)}>
          <Card>
            <Text style={styles.title}>{item.name}</Text>
          </Card>
        </TouchableOpacity>
      )}
     />
    
     <Text style={styles.header}> 4ème</Text>
     <FlatList
      data={data4}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('Infos', item)}>
          <Card>
            <Text style={styles.title}>{item.name}</Text>
          </Card>
        </TouchableOpacity>
      )}
     />
   
     </ScrollView>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 15,
    color: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,

  }
})