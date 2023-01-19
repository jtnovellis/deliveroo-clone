import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useMemo } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { XCircleIcon } from 'react-native-heroicons/outline';
import { useDispatch, useSelector } from 'react-redux';
import { urlFor } from '../client/sanity';
import { removeFromBasket } from '../features/basketSlice';

const BasketScreen = () => {
  const navigation = useNavigation();
  const [groupedBasketItems, setGroupedBasketItems] = useState([]);
  const { restaurant } = useSelector((state) => state.restaurantReducer);
  const { items } = useSelector((state) => state.basketReducer);
  const dispatch = useDispatch();

  const subtotal = items.reduce((acc, current) => acc + current.price, 0);
  const fee = (subtotal * 5) / 100;
  const totalPrice = fee + subtotal;

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {});
    setGroupedBasketItems(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00CCBB] bg-white shadow-xs'>
          <View>
            <Text className='text-lg font-bold text-center'>Basket</Text>
            <Text className='text-gray-400 text-center'>{restaurant.name}</Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className='rounded-full bg-gray-100 absolute top-3 right-5'
          >
            <XCircleIcon color='#00CCBB' size={50} />
          </TouchableOpacity>
        </View>
        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
          <Image
            className='h-7 w-7 bg-gray-100 p-4 rounded-full'
            source={{
              uri: urlFor(restaurant.image).url(),
            }}
          />
          <Text className='flex-1'>Deliver in 30 - 50 minutes</Text>
          <TouchableOpacity>
            <Text className='text-[#00CCBB]'>Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className='divide-y divide-gray-200'>
          {Object.entries(groupedBasketItems).map(([key, items]) => (
            <View
              key={key}
              className='flex-row items-center space-x-3 bg-white py-2 px-5'
            >
              <Text className='text-[#00CCBB]'>{items.length} x</Text>
              <Image
                source={{
                  uri: urlFor(items[0].image).url(),
                }}
                className='h-12 w-12 rounded-full'
              />
              <Text className='flex-1'>{items[0].name}</Text>
              <Text className='text-gray-600'>
                ${items[0].price.toFixed(2)}
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <Text className='text-[#00CCBB] text-xs'>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className='bg-white space-y-4 mt-5 p-5'>
          <View className='flex-row'>
            <Text className='flex-1 text-gray-400'>Subotal</Text>
            <Text className='text-gray-400'>${subtotal.toFixed(2)}</Text>
          </View>
          <View className='flex-row'>
            <Text className='flex-1 text-gray-600'>Delivery fee</Text>
            <Text className='text-gray-600'>${fee.toFixed(2)}</Text>
          </View>
          <View className='flex-row'>
            <Text className='flex-1 font-bold'>Total</Text>
            <Text className='font-bold'>${totalPrice.toFixed(2)}</Text>
          </View>
          <TouchableOpacity className='bg-[#00CCBB] p-4 rounded-lg'>
            <Text className='text-white text-center text-lg font-extrabold'>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
