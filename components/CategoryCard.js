import { View, Text, TouchableOpacity, Image } from 'react-native';

const CategoryCard = ({ imageUrl, title }) => {
  const text = 'Testing';
  return (
    <TouchableOpacity className='relative mr-2'>
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2015/11/26/22/28/woman-1064664_1280.jpg',
        }}
        className='h-20 w-20 rounded'
      />
      <Text className='absolute bottom-1 left-1 text-white font-bold'>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
