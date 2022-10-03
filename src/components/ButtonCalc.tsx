/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

interface Props {
  text: string;
  color?: string;
  large?: boolean;
  action: (actionValue: string) => void;
}

const {width} = Dimensions.get('window');

const ButtonCalc = ({text = '', color = '#2d2d2d', large = false, action}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.btn,
          backgroundColor: color,
          width: large ? width / 2 - 20 : width / 4 - 20,
        }}>
        <Text
          style={{
            ...styles.btnText,
            color: color === '#9b9b9b' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCalc;

const styles = StyleSheet.create({
  btn: {
    height: width / 4 - 20,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  btnText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
