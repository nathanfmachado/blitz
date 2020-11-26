import 'react-native-gesture-handler';

import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => {
  
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#1f1e26" />
      <View style={{flex: 1, backgroundColor: '#f2f2e8'}}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;