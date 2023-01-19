import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useLayoutEffect } from 'react';
import { Text, SafeAreaView } from 'react-native';
import Header from '../components/Header';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <Header />
    </SafeAreaView>
  );
};

export default HomeScreen;
