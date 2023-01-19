import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../components/Header';
import HomeContent from '../components/HomeContent';
import Search from '../components/Search';
import sanityClient from '../client/sanity';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured"] {
        ...,
        restaurants[] -> {
          ...,
          dishes[] ->,
          type ->
        }
      }
    `
      )
      .then((res) => setFeaturedCategories(res));
  }, []);

  return (
    <SafeAreaView className='pt-5 bg-white'>
      <Header />
      <Search />
      <HomeContent featuredCategories={featuredCategories} />
    </SafeAreaView>
  );
};

export default HomeScreen;
