import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, TextInput, StyleSheet, Dimensions, Modal, Alert, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import api from '../../services/api';
import { format } from 'date-fns';



import ActionModalCalculator from '../ActionModalCalculadora';

const { height } = Dimensions.get('window');

export default function ActionModalRevenue({ handleClose}) {
  const [moneyInput, setMoneyInput] = useState('');
  const [isCalculatorVisible, setCalculatorVisible] = useState(false);
  const [isTextInputEditable, setTextInputEditable] = useState(false);
  const [labelInput, setLabelInput] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [type, setType] = useState('receita');

  const openCalculatorModal = () => {
    setCalculatorVisible(true);
  };

  const closeCalculatorModal = () => {
    setCalculatorVisible(false);
  };
  const handleConfirmExpression = (value) => {
    setMoneyInput(value);
    setTextInputEditable(false);
    closeCalculatorModal();
   
  };
  const handleMoneyInputChange = (text) => {
    setMoneyInput(text);
    setValueInput(text);
  };

  const handleTextInputPress = () => {
    setTextInputEditable(true);
    openCalculatorModal();
  };
  function handleSubmit(){
    Keyboard.dismiss();

    if(isNaN(parseFloat(moneyInput)) || type == null){
      alert('Preencha todos os campos')
    }
    Alert.alert(
      'Confirmando dados',
      `Tipo: ${type} - Valor: ${parseFloat(moneyInput)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd() 
        }
      ]
    )

    async function handleAdd(){
      Keyboard.dismiss();
  
      await api.post('/receive', {
        description: labelInput,
        value: Number(moneyInput),
        type: type,
        date: format(new Date(), 'dd/MM/yyyy')
      })
  
      setLabelInput('');
      setValueInput('');
      alert('RECEITA CADASTRADA COM SUCESSO!')
      handleClose();
    }
  

  }

  return (
   
    <SafeAreaView style={styles.container}>
    <TouchableOpacity style={styles.overlay} onPress={handleClose}></TouchableOpacity>
    <View style={styles.modal}>
      <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
        <FontAwesome name="times" size={38} color="#F9CD2F" style={styles.closeIcon} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>Nova Receita</Text>
        <Text style={styles.description}>Valor da Receita</Text>
        <View style={styles.textInputContainer}>
          <TouchableOpacity onPress={handleTextInputPress}>
            <TextInput
              style={styles.moneyInput}
              keyboardType="visible-password"
              placeholder='R$ 0.00'
              placeholderTextColor='#FFF'
              value={moneyInput}
              onChangeText={handleMoneyInputChange}
              onFocus={() => setCalculatorVisible(false)}
              editable={isTextInputEditable}
            />
          </TouchableOpacity>
        </View>
      
     
        <View style={styles.bottomSection}>
        <Text style={styles.description2}>Descrição do registro</Text>
        <TextInput
          style={styles.input}
          placeholder='Descrição'
          value = {labelInput}
          onChangeText={(text) => setLabelInput(text)}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={handleClose}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirmButton} onPress={() => handleSubmit()}>
            <Text style={styles.buttonText}>Registar</Text>
          </TouchableOpacity>
        </View>
          
        </View>
      </View>
    </View>
    <Modal
      animationType="slide"
      transparent={true}
      visible={isCalculatorVisible}
      onRequestClose={closeCalculatorModal}
    >
      <ActionModalCalculator
        handleClose={(value) => {
          setTextInputEditable(false);
          closeCalculatorModal();
          handleConfirmExpression(value);
        }}
      />
    </Modal>
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
    height: height/1.2,
    backgroundColor: '#051037',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    padding: 8,
    zIndex: 5,
  },
  closeIcon: {
    padding: 2,
    marginTop: 8,
    marginBottom: 10, 
  },
  content: {
    flex: 1,
    marginBottom: 16,
  },
  moneyInput: {
    height: 40,
    borderWidth: 0,
    marginTop: 5,
    paddingHorizontal: 30,
    fontSize: 30,
    color: '#FFF'
  },
 
  containerView: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  textInputContainer: {
    zIndex: 2, 
  },
  description: {
    color: '#FFF',
    fontSize: 18,
    marginTop: 40,
    marginBottom:8,
   
  },
  description2: {
    color: '#FFF',
    fontSize: 18,
    marginTop: 40,
    marginBottom:8,
    marginLeft:10,
  },
  title: {
    color: '#F9CD2F',
    fontSize: 24,
    marginTop: 30,
    textAlign:'center'
    
  },
  input:{
    height: 50,
    width:380,
    backgroundColor:'#FFF',
    fontSize: 17,
    padding:8,
    marginBottom:14,
    borderRadius:4,
    marginLeft:10,

  
  },

  
  submitText:{
    color: '#FFF',
    fontSize: 21,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    height: 40,
    backgroundColor: '#FF6A46',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginRight: 8,
    marginLeft:10,
  },
  confirmButton: {
    flex: 1,
    height: 40,
    backgroundColor: '#0A8C5A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginLeft: 10,
    marginRight:10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#2C2A34', 
    marginTop: 20, 
    borderRadius: 10, 
    marginLeft:-10,
    marginRight:-13,
  
  
  },


});