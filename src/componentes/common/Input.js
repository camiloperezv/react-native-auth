import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, placeholder, value, onChange, secureText }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureText}
        autoCapitalize={'none'}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChange}
        style={inputStyle} 
      />
    </View>
  );
};
const styles = {
  inputStyle: { 
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    flex: 1,
    paddingLeft: 20
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};
export { Input };
