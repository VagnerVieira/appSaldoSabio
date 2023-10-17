import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, TextInput, StyleSheet, Dimensions, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import ActionModalCalculator from '../ActionModalCalculadora';

const { height } = Dimensions.get('window');

export default function ActionModalTransfer({ handleClose }) {
  const [moneyInput, setMoneyInput] = useState('R$ 0.00');
  const [isCalculatorVisible, setCalculatorVisible] = useState(false);
  const [isTextInputEditable, setTextInputEditable] = useState(false);

  const openCalculatorModal = () => {
    setCalculatorVisible(true);
  };

  const closeCalculatorModal = () => {
    setCalculatorVisible(false);
  };

  const handleMoneyInputChange = (text) => {
    setMoneyInput(text);
  };

  const handleTextInputPress = () => {
    setTextInputEditable(true);
    openCalculatorModal();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.overlay} onPress={handleClose}></TouchableOpacity>
      <View style={styles.modal}>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <FontAwesome name="times" size={38} color="#FFF" style={styles.closeIcon} />
        </TouchableOpacity>
        <View style={styles.content}>
          <View style={styles.textInputContainer}>
            <TouchableOpacity onPress={handleTextInputPress}>
              <TextInput
                style={styles.moneyInput}
                keyboardType="visible-password"
                value={moneyInput}
                onChangeText={handleMoneyInputChange}
                onFocus={() => setCalculatorVisible(false)}
                editable={isTextInputEditable}
              />
            </TouchableOpacity>
          </View>
          
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isCalculatorVisible}
        onRequestClose={closeCalculatorModal}
      >
        <ActionModalCalculator handleClose={() => { setTextInputEditable(false); closeCalculatorModal(); }} />
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
    height: height,
    backgroundColor: '#2C2A34',
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
    marginTop: 23,
    marginBottom: 10, 
  },
  content: {
    flex: 1,
    marginBottom: 16,
  },
  moneyInput: {
    height: 40,
    borderWidth: 0,
    marginTop: 70,
    paddingHorizontal: 30,
    fontSize: 30,
    color: '#FFF'
  },
  actionButton: {
    backgroundColor: '#F9CD2F',
    borderRadius: 6,
    marginTop: 200,
    padding: 8,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    shadowOpacity: 0.28,
    shadowRadius: 4,
  },
  containerView: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  textInputContainer: {
    zIndex: 2, 
  },

});