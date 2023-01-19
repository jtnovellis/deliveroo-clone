import { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';
import sanityClient from '../client/sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "category"]
    `
      )
      .then((res) => setCategories(res));
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {categories?.map((category) => (
        <CategoryCard key={category._id} {...category} />
      ))}
    </ScrollView>
  );
};

export default Categories;
