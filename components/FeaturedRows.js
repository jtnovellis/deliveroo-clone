import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon as ArrowRightIconOutline } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRows = ({ description, title, id }) => {
  return (
    <View>
      <View className='flex-row items-center justify-between mt-4 mx-4'>
        <Text className='font-bold text-lg'>{title || 'TestTitle'}</Text>
        <ArrowRightIconOutline color='#00CCBB' />
      </View>
      <Text className='px-4 text-xs text-gray-500'>
        {description || 'this a provitional description for development'}
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </ScrollView>
    </View>
  );
};

export default FeaturedRows;
