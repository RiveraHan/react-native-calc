import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import Boton from './Boton';
import Entrada from './Entrada';

const Calculadora = ({
  result,
  num1,
  handleChangeNum1,
  num2,
  handleChangeNum2,
  sumar,
  restar,
  multiplicar,
  dividir,
}) => {
  return (
    <SafeAreaView style={styles.contedor}>
      <View style={styles.resultado}>
        <Text style={styles.encabezado}>Resultado</Text>
        <Text style={styles.texto}>{result}</Text>
      </View>
      <View style={styles.formulario}>
        <Entrada
          placeholder="Numero"
          handleChangeNum={handleChangeNum1}
          num={num1}
        />
        <Entrada
          placeholder="Numero 2"
          handleChangeNum={handleChangeNum2}
          num={num2}
        />
        <View style={styles.botones}>
          <Boton texto={'+'} operacion={sumar} />
          <Boton texto={'-'} operacion={restar} />
          <Boton texto={'*'} operacion={multiplicar} />
          <Boton texto={'/'} operacion={dividir} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
  },
  resultado: {
    height: '50%',
    backgroundColor: 'rgba(0, 255, 255, 0.5)',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  entrada: {
    marginTop: 20,
  },
  formulario: {
    height: '40%',
    margin: 20,
  },
  texto: {
    fontSize: 60,
  },
  encabezado: {
    fontSize: 30,
  },
});

export default Calculadora;
