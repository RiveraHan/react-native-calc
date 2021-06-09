import React, {useState} from 'react';
import {Alert} from 'react-native';
import Calculadora from './Calculadora';

const Contenedor = () => {
  const [result, setResult] = useState(0);
  const [num1, changeNum1] = useState(null);
  const [num2, changeNum2] = useState(null);

  const handleChangeNum1 = value => {
    changeNum1(value);
  };
  const handleChangeNum2 = value => {
    changeNum2(value);
  };

  const sumar = () => {
    setResult(Number(num1) + Number(num2));
  };

  const restar = () => {
    setResult(Number(num1) - Number(num2));
  };

  const multiplicar = () => {
    setResult(Number(num1) * Number(num2));
  };

  const dividir = () => {
    if (Number(num2) === 0) {
      Alert.alert('¡Cuidado!', 'Está tratando de dividir entre cero (0).');
    } else {
      setResult((Number(num1) / Number(num2)).toFixed(2));
    }
  };

  return (
    <Calculadora
      result={result}
      num1={num1}
      handleChangeNum1={handleChangeNum1}
      num2={num2}
      handleChangeNum2={handleChangeNum2}
      sumar={sumar}
      restar={restar}
      multiplicar={multiplicar}
      dividir={dividir}
    />
  );
};

export default Contenedor;
