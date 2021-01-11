import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from 'src/contexts/userContext';
/* navigations */
import { AfterLoginTabNavigator } from '../navigations/AfterLoginTabNavigator';
import { BeforeLoginTabNavigator } from '../navigations/BeforeLoginTabNavigator';

/**
 *  ログインの有無により表示する画面を管理する
 */
export const AppNavigator: React.FC = () => {
  const { user } = React.useContext(UserContext);
  return (
    <NavigationContainer>
      {!!user && user.id === '' ? <BeforeLoginTabNavigator /> : <AfterLoginTabNavigator />}
    </NavigationContainer>
  );
};
