import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {navigate} from '../../../../navigation/settings';
import {palette} from '../../../../style';

export default function LandingScreen() {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: palette.palegray,
      }}>
      <Text>landingScreen</Text>
      <TouchableOpacity
        style={{width: 100, height: 50, backgroundColor: 'red'}}
        onPress={() => navigate('Login', {})}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
