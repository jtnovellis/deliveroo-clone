import { ScrollView, Text } from 'react-native';
import Categories from './Categories';
import FeaturedRows from './FeaturedRows';

const HomeContent = ({ featuredCategories }) => {
  return (
    <ScrollView
      className='bg-gray-100'
      contentContainerStyle={{
        paddingBottom: 100,
      }}
    >
      <Categories />
      {featuredCategories.length > 0 ? (
        featuredCategories.map((featuredCat) => (
          <FeaturedRows key={featuredCat._id} {...featuredCat} />
        ))
      ) : (
        <Text>No features</Text>
      )}
    </ScrollView>
  );
};

export default HomeContent;
