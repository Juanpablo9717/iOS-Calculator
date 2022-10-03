import {useRef, useState} from 'react';

export const useCalculator = () => {
  const colors = {
    gray: '#9b9b9b',
    orange: '#FF9427',
  };

  enum Operators {
    add,
    subtract,
    multiply,
    divide,
  }

  const [lastNumber, setLastNumber] = useState('0');
  const [number, setNumber] = useState('0');
  const [type, setType] = useState('');

  const lastOperation = useRef<Operators>();

  const clear = () => {
    setNumber('0');
    setLastNumber('0');
  };

  const createNumbers = (numberText: string) => {
    // No aceptar doble punto
    if (number.includes('.') && numberText === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal
      if (numberText === '.') {
        setNumber(number + numberText);

        // Evaluar si es otro cero y ya hay un punto
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
        // Evaluar si es doferente de cero y no tiene un punto
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
        // Evitar 000000.0
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  // Cambiar de positivo a negativo
  const minusPlus = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const btnDel = () => {
    if (number.length === 2 && number.startsWith('-')) {
      setNumber('0');
    } else if (number.length === 1) {
      setNumber('0');
    } else {
      setNumber(number.slice(0, -1));
    }
    if (number[number.length - 2] === '.') {
      setNumber(number.slice(0, -2));
    }
  };

  const saveLastNumber = () => {
    if (number.endsWith('.')) {
      setLastNumber(number.slice(0, -1));
    } else {
      setLastNumber(number);
    }
    setNumber('0');
  };

  const btnAdd = () => {
    saveLastNumber();
    lastOperation.current = Operators.add;
    setType('+');
  };
  const btnSubtract = () => {
    saveLastNumber();
    lastOperation.current = Operators.subtract;
    setType('-');
  };
  const btnMultiply = () => {
    saveLastNumber();
    lastOperation.current = Operators.multiply;
    setType('x');
  };
  const btnDivide = () => {
    saveLastNumber();
    lastOperation.current = Operators.divide;
    setType('/');
  };

  const result = () => {
    const num1 = Number(number);
    const num2 = Number(lastNumber);

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.subtract:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.divide:
        if (num1 !== 0) {
          setNumber(`${num2 / num1}`);
        }

        break;
    }
    setLastNumber('0');
  };
  return {
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
  };
};
