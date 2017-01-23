//@author Antonella Solomon


//Import library to help create Component

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create Component
const App = () => (
  <View>
  <Header headerText={'Antonella Solomon'} />
  <AlbumList />
  </View>
  );


//Render To device
AppRegistry.registerComponent('albums', () => App);
