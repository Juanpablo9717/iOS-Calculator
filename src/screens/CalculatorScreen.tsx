import React from 'react';
import {View, Text} from 'react-native';
import ButtonCalc from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';
import { useCalculator } from './useCalculator';

export const CalculatorScreen = () => {
  const {
    colors,
    type,
    lastNumber,
    number,
    clear,
    createNumbers,
    minusPlus,
    btnDel,
    btnAdd,
    btnSubtract,
    btnMultiply,
    btnDivide,
    result,
  } = useCalculator();

  return (
    <View style={styles.calcContainer}>
      {lastNumber !== '0' && (
        <Text style={styles.smallResult}>
          {lastNumber} {type}
        </Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        <ButtonCalc text="C" color={colors.gray} action={clear} />
        <ButtonCalc text="+/-" color={colors.gray} action={minusPlus} />
        <ButtonCalc text="del" color={colors.gray} action={btnDel} />
        <ButtonCalc text="/" color={colors.orange} action={btnDivide} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" action={createNumbers} />
        <ButtonCalc text="8" action={createNumbers} />
        <ButtonCalc text="9" action={createNumbers} />
        <ButtonCalc text="x" color={colors.orange} action={btnMultiply} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" action={createNumbers} />
        <ButtonCalc text="5" action={createNumbers} />
        <ButtonCalc text="6" action={createNumbers} />
        <ButtonCalc text="-" color={colors.orange} action={btnSubtract} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" action={createNumbers} />
        <ButtonCalc text="2" action={createNumbers} />
        <ButtonCalc text="3" action={createNumbers} />
        <ButtonCalc text="+" color={colors.orange} action={btnAdd} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" large action={createNumbers} />
        <ButtonCalc text="." action={createNumbers} />
        <ButtonCalc text="=" color={colors.orange} action={result} />
      </View>
    </View>
  );
};
