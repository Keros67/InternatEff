import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import EffectifScreen from '../screens/EffectifScreen';
import ReviewDetailsScreen from '../screens/ReviewDetailsScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Acceuil" component={HomeScreen}/>
      <Stack.Screen name="Effectif" component={EffectifScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Infos" component={ReviewDetailsScreen} />
    </Stack.Navigator>
  );
}
