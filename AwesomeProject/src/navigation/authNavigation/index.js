import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {SCREENS} from '../screens';
import screenNames from '../screenNames';

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();

  const authScreens = [
    {
      id: 1,
      name: SCREENS?.SPLASH,
      component: screenNames?.Splash,
    },
  ];
  return (
    <Stack.Navigator initialRouteName={SCREENS.SPLASH}>
      {authScreens?.map((item, i) => (
        <Stack.Screen
          name={item?.name}
          component={item?.component}
          options={{headerShown: false}}
          key={i}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AuthNavigation;
