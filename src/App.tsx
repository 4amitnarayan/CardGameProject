import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import CardGame from './containers/CardGame';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <CardGame />
      </SafeAreaView>
    </Provider>
  );
};