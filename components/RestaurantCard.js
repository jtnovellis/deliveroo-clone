import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StarIcon as StarIconSolid } from 'react-native-heroicons/solid';
import { MapPinIcon as MapPinIconOutline } from 'react-native-heroicons/outline';
import { urlFor } from '../client/sanity';

const RestaurantCard = ({
  _id,
  image,
  name,
  rating,
  type,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className='bg-white mr-3 shadow'>
      <Image
        source={{
          uri: urlFor(image).url(),
        }}
        className='h-36 w-64 rounded-sm'
      />
      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{name}</Text>
        <View className='flex-row items-center space-x-1'>
          <StarIconSolid color='green' opacity={0.5} size={22} />
          <Text className='text-xs text-gray-500'>
            {rating} • <Text>{type.name}</Text>
          </Text>
        </View>
        <View className='flex-row items-center gap-1'>
          <MapPinIconOutline color='gray' opacity={0.4} size={22} />
          <Text className='text-xs text-gray-500'>Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
