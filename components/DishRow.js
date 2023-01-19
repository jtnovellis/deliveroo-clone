import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { urlFor } from '../client/sanity';
import {
  MinusCircleIcon as MinusCirculeIconSolid,
  PlusCircleIcon as PlusCirculeIconSolid,
} from 'react-native-heroicons/solid';

const DishRow = ({ name, price, short_description, image, _id }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed((prev) => !prev);
  };
  return (
    <>
      <TouchableOpacity
        onPress={handlePress}
        className={`bg-white p-4 border border-gray-200 flex-row ${
          isPressed && 'border-b-0'
        }`}
      >
        <View className='pr-2 flex-1'>
          <Text className='text-lg mb-1'>{name}</Text>
          <Text className='text-gray-400'>{short_description}</Text>
          <Text className='text-gray-400 mt-2'>${price.toFixed(2)}</Text>
        </View>
        <View>
          <Image
            source={{
              uri: urlFor(image).url(),
            }}
            className='w-20 h-20 bg-gray-300 p-4'
            style={{
              borderColor: '#F3F3F4',
              borderWidth: 1,
            }}
          />
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className='bg-white px-4'>
          <View className='flex-row items-center gap-2 pb-3'>
            <TouchableOpacity>
              <MinusCirculeIconSolid color='#00CCBB' size={40} />
            </TouchableOpacity>
            <Text>{'0'}</Text>
            <TouchableOpacity>
              <PlusCirculeIconSolid color='#00CCBB' size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;