import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon as ArrowRightIconOutline } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRows = ({ name, short_description, restaurants }) => {
  return (
    <View>
      <View className='flex-row items-center justify-between mt-4 mx-4'>
        <Text className='font-bold text-lg'>{name || 'TestTitle'}</Text>
        <ArrowRightIconOutline color='#00CCBB' />
      </View>
      <Text className='px-4 text-xs text-gray-500'>
        {short_description || 'this a provitional description for development'}
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant._id} {...restaurant} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRows;
