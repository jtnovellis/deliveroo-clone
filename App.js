import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './navigation/NavigationStack';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </Provider>
  );
}
