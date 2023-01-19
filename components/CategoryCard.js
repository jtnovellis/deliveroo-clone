import { View, Text, TouchableOpacity, Image } from 'react-native';
import { urlFor } from '../client/sanity';

const CategoryCard = ({ image, name }) => {
  return (
    <TouchableOpacity className='relative mr-2'>
      <Image
        source={{
          uri: urlFor(image).url(),
        }}
        className='h-20 w-20 rounded'
      />
      <Text className='absolute bottom-1 left-1 text-white font-bold'>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
