import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const Basket = () => {
  const { items } = useSelector((state) => state.basketReducer);
  const natvigation = useNavigation();

  const totalItems = items.length;
  const totalPrice = items
    .reduce((acc, current) => acc + current.price, 0)
    .toFixed(2);
  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity className='flex-row mx-5 bg-[#00CCBB] p-4 rounded-lg items-center space-x-1'>
        <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>
          {totalItems}
        </Text>
        <Text className='text-white flex-1 font-extrabold text-lg text-center'>
          View Basket
        </Text>
        <Text className='text-lg text-white font-extrabold'>${totalPrice}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Basket;
