import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Certifique-se de ter o pacote expo-vector-icons instalado

const { height } = Dimensions.get('window');

export default function ActionModalCalculator({ handleClose }) {
  const [expression, setExpression] = useState('');

  const handlePress = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };


  const handleBackspace = () => {
    setExpression((prevExpression) => prevExpression.slice(0, -1));
  };

  const handleEquals = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };
  const handleCancel = () => {
    setExpression('');
    handleClose('R$ 0.00');
  };

  const handleConfirmExpression = () => {
    if (expression.trim() !== '') {
      const formattedValue = `R$ ${expression}`;
      console.log('Valor:', formattedValue);
      handleClose(formattedValue);
    } else {
      handleClose('R$ 0.00');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.overlay} onPress={handleClose}></TouchableOpacity>
      <View style={styles.modal}>
        <View style={styles.displayContainer}>
          <Text style={styles.expression}>
            {expression}

            <TouchableOpacity onPress={handleBackspace}>
            <MaterialIcons name="backspace" size={24} color="#FFF" style={styles.buttonClen} />
          </TouchableOpacity>
          </Text>
        </View>
        

        <View style={styles.row}>
          <TouchableOpacity onPress={() => handlePress('7')}>
            <Text style={styles.button}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('8')}>
            <Text style={styles.button}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('9')}>
            <Text style={styles.button}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('/')}>
            <Text style={styles.button}>/</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => handlePress('4')}>
            <Text style={styles.button}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('5')}>
            <Text style={styles.button}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('6')}>
            <Text style={styles.button}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('*')}>
            <Text style={styles.button}>*</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => handlePress('1')}>
            <Text style={styles.button}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('2')}>
            <Text style={styles.button}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('3')}>
            <Text style={styles.button}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('-')}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
        <TouchableOpacity onPress={() => handlePress('.')}>
            <Text style={styles.button}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('0')}>
            <Text style={styles.button}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('+')}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEquals}>
            <Text style={styles.button}>=</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row2}>
          <TouchableOpacity onPress={handleCancel}>
            <Text style={styles.cancelButton}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleConfirmExpression}>
            <Text style={styles.confirmButton}>Concluir</Text>
          </TouchableOpacity>
        </View>


      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    height: height / 1.8,
    backgroundColor: '#2C2A34',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  displayContainer: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  expression: {
    fontSize: 39,
    color:'#FFF'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
    marginTop:6,
  },
  button: {
    fontSize: 24,
    backgroundColor: '#F5F6FA',
    borderRadius: 6,
    textAlign: 'center',
    width: 80, 
    height:50,
    paddingVertical: 10,
    marginHorizontal: 4,
    color:'#151C60'
  },
  buttonClen: {
    fontSize: 24,
    backgroundColor: '#151C60',
    borderRadius: 6,
    textAlign: 'center',
    marginLeft: 40,
    paddingVertical: 10,
    paddingTop:10,
    width: 80, 
    height:50,
    marginHorizontal: 4,
  },
  cancelButton: {
    fontSize: 18,
    backgroundColor: 'red',
    borderRadius: 10,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    height:50,
    width:180,
    color: 'white',
    
  },

  confirmButton: {
    fontSize: 18,
    backgroundColor: '#151C60',
    borderRadius: 10,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: 'white',
    height:50,
    width:180,
  },
});