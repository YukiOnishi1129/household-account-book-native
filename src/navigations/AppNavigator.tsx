import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
/* navigations */
import { AfterLoginTabNavigator } from '../navigations/AfterLoginTabNavigator';
import { BeforeLoginTabNavigator } from '../navigations/BeforeLoginTabNavigator';
import { TopScreen } from '../components/screens/TopScreen';

type User = {
  id: number;
  email: string;
};

/**
 *  ログインの有無により表示する画面を管理する
 */
export const AppNavigator = () => {
  const user = null;
  return (
    <NavigationContainer>
      {!user ? <BeforeLoginTabNavigator /> : <AfterLoginTabNavigator />}
    </NavigationContainer>
  );
};
