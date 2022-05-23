import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React from 'react';
import Card from '../shared/Card';
import { images, globalStyles } from '../styles/Global';


export default function ReviewDetailsScreen({navigation, route}) {
  const { name } = route.params;
  const { grade  } = route.params;
  const { infos } = route.params;
  const { photo } = route.params;

  return(

      <View style={globalStyles.container}>
          <Card>
          <View style={styles.photo}>
                <Image style={styles.images} source={images.photo[photo]} />
            </View>
            <View style={styles.text}>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text}>{grade}</Text>
                <Text style={styles.text}>{infos}</Text>
            </View>
          </Card>
      </View>

  )

}


const styles = StyleSheet.create({
    photo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        width: 10,
        height: 10,
        borderRadius: 30,
        margin: 20,
    },
    images: {
        width: 70,
        height: 70,
    },
    text: {
        fontSize: 18,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#eee',
    }
})