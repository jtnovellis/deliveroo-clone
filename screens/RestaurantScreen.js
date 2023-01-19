import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { urlFor } from '../client/sanity';
import {
  ArrowLeftIcon as ArrowLeftIconSolid,
  StarIcon as StarIconSolid,
  MapPinIcon as MapPinIconOutline,
  ChevronRightIcon as ChevronRightIconSolid,
} from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon as QuestionMarkCircleIconOutline } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { name, image, rating, type, address, short_description, dishes } =
    params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View className='relative'>
        <Image
          source={{
            uri: urlFor(image).url(),
          }}
          className='w-full h-56 bg-gray-300 p-4'
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
        >
          <ArrowLeftIconSolid size={20} color='#00CCBB' />
        </TouchableOpacity>
      </View>
      <View className='bg-white'>
        <View className='px-4 pt-4'>
          <Text className='text-3xl font-bold'>{name}</Text>
          <View className='flex-row gap-2 my-1'>
            <View className='flex-row items-center gap-1'>
              <StarIconSolid color='green' opacity={0.5} size={22} />
              <Text className='text-xs text-gray-500'>
                <Text className='text-green-500'>{rating}</Text> • {type.name}
              </Text>
            </View>
            <View className='flex-row items-center gap-1'>
              <MapPinIconOutline color='gray' opacity={0.4} size={22} />
              <Text className='text-xs text-gray-500'>Nearby • {address}</Text>
            </View>
          </View>
          <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
        </View>
        <TouchableOpacity className='flex-row items-center gap-2 p-4 border-y border-gray-300'>
          <QuestionMarkCircleIconOutline color='gray' opacity={0.6} size={20} />
          <Text className='pl-2 flex-1 text-md font-bold'>
            Have a food allergy?
          </Text>
          <ChevronRightIconSolid color='#00CCBB' />
        </TouchableOpacity>
      </View>
      <View>
        <Text className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</Text>
        {dishes.map((dish) => (
          <DishRow key={dish._id} {...dish} />
        ))}
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
