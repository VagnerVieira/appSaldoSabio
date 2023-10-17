import React from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';


const { height } = Dimensions.get('window');

export default function ActionModalCategory({ handleClose }) {
  
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.overlay} onPress={handleClose}></TouchableOpacity>
      <View style={styles.modal}>
        <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
          <View style={styles.containerView}></View>
        </TouchableOpacity>
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
    height: height / 2 + 120, // Ajusta a altura da modal para metade da tela
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  actionButton: {
    backgroundColor: '#F9CD2F',
    borderRadius: 6,
    marginTop: 8,
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

});
