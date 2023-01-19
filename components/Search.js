import { View, TextInput } from 'react-native';
import {
  AdjustmentsVerticalIcon as AdjustmentsVerticalIconOutline,
  MagnifyingGlassIcon as MagnifyingGlassIconOutline,
} from 'react-native-heroicons/outline';

const Search = () => {
  return (
    <View className='flex-row items-center space-x-2 pb-2 mx-4'>
      <View className='flex-row space-x-2 bg-gray-200 p-3 flex-1'>
        <MagnifyingGlassIconOutline color='gray' size={20} />
        <TextInput placeholder='Restaurants' keyboardType='default' />
      </View>
      <AdjustmentsVerticalIconOutline color='#00CCBB' />
    </View>
  );
};

export default Search;
