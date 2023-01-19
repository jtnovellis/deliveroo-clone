import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../components/Header';
import HomeContent from '../components/HomeContent';
import Search from '../components/Search';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className='pt-5 bg-white'>
      <Header />
      <Search />
      <HomeContent />
    </SafeAreaView>
  );
};

export default HomeScreen;
