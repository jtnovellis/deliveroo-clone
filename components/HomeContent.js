import { ScrollView } from 'react-native';
import Categories from './Categories';
import FeaturedRows from './FeaturedRows';

const HomeContent = () => {
  return (
    <ScrollView className='bg-gray-100'>
      <Categories />
      <FeaturedRows />
    </ScrollView>
  );
};

export default HomeContent;
