import { View, Image, Text } from 'react-native';
import {
  ChevronDownIcon as ChevronDownIconOutline,
  UserIcon as UserIconOutline,
} from 'react-native-heroicons/outline';

const Header = () => {
  return (
    <View className='flex-row pb-3 items-center mx-4 space-x-2'>
      <Image
        source={{
          uri: 'https://links.papareact.com/wru',
        }}
        className='h-7 w-7 bg-gray-300 p-4 rounded-full'
      />
      <View className='flex-1'>
        <Text className='font-bold text-gray-400 text-xs'>Deliver now!</Text>
        <Text className='font-bold text-xl'>
          Current location
          <ChevronDownIconOutline size={20} color='#00CCBB' />
        </Text>
      </View>
      <UserIconOutline size={35} color='#00CCBB' />
    </View>
  );
};

export default Header;
