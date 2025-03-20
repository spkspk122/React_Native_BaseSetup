import React from 'react';
import { Button, Text, View } from 'react-native';
import { string } from '../../../constant/strings';
import { baseStyle } from '../../../utlis/baseStyle.js/theme';
import { colors } from '../../../utlis/colors';
import navigationServices from '../../../navigation/navigationServices';
import { SCREENS } from '../../../navigation/screens';
// Access the native module
const Splash = () => {

    // Function to call the native showToast method
    const showToast = () => {
  //  navigationServices.navigate(SCREENS.)
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button title="Show Toast" onPress={showToast} />
</View>
  );
};

export default Splash;
