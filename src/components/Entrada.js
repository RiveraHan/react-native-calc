import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Entrada = ({placeholder, handleChangeNum, num}) => {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType="numeric"
      style={styles.input}
      placeholderTextColor="#000"
      value={num}
      onChangeText={handleChangeNum}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#eee',
    borderRadius: 10,
    color: '#000',
    fontSize: 18,
    marginTop: 20,
    paddingLeft: 10,
  },
});

export default Entrada;
