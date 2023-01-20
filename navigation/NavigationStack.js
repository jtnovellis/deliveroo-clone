import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import BasketScreen from '../screens/BasketScreen';
import PreparingOrderScreen from '../screens/PreparingOrderScreen';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Restaurant' component={RestaurantScreen} />
      <Stack.Screen
        name='Basket'
        component={BasketScreen}
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Preparing'
        component={PreparingOrderScreen}
        options={{ presentation: 'fullScreenModal', headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;
