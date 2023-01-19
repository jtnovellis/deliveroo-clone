import { View, Image } from 'react-native';
const Header = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://links.papareact.com/wru',
        }}
        className='h-7 w-7 bg-gray-300 p-4 rounded-full'
      />
    </View>
  );
};

export default Header;
