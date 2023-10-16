import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Animated, Modal } from 'react-native';
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import ActionModalRevenue from '../ActionModalRevenue';
import ActionModalExpenditure from '../ActionModelExpenditure';
import ActionModalExpenditureCreditCard from '../ActionModelExpenditureCreditCard';
import ActionModalTransfer from '../ActionModelTransfer';

const FabButton = (props) => {
  const navigation = useNavigation();
  const [size, setSize] = useState(props.size);
  const [color, setColor] = useState(props.color);
  const [focused, setFocused] = useState(false);
  const [isRevenueModalVisible, setIsRevenueModalVisible] = useState(false);
  const [isExpenditureModalVisible, setIsExpenditureModalVisible] = useState(false);
  const [isExpenditureCreditCardModalVisible, setIsExpenditureCreditCardModalVisible] = useState(false);
  const [isTransferModalVisible, setIsTransferModalVisible] = useState(false);

  const animation = useRef(new Animated.Value(0)).current;
  const open = useRef(false);

  const toggleMenu = () => {
    const toValue = open.current ? 0 : 1;

    Animated.spring(animation, {
      toValue,
      friction: 6,
      useNativeDriver: false,
    }).start();

    open.current = !open.current;

    setFocused(open.current);
  };

  const openRevenueModal = () => {
    setIsRevenueModalVisible(true);
  };

  const closeRevenueModal = () => {
    setIsRevenueModalVisible(false);
  };

  const openExpenditureModal = () => {
    setIsExpenditureModalVisible(true);
  };

  const closeExpenditureModal = () => {
    setIsExpenditureModalVisible(false);
  };

  const openExpenditureCreditCardModal = () => {
    setIsExpenditureCreditCardModalVisible(true);
  };

  const closeExpenditureCreditCardModal = () => {
    setIsExpenditureCreditCardModalVisible(false);
  };

  const openTransferModal = () => {
    setIsTransferModalVisible(true);
  };

  const closeTransferModal = () => {
    setIsTransferModalVisible(false);
  };

  const pinStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -80],
        }),
      },
    ],
  };

  const heartStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -140],
        }),
      },
    ],
  };

  const transfer = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -200],
        }),
      },
    ],
  };

  const creditCard = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -260],
        }),
      },
    ],
  };

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg'],
        }),
      },
    ],
  };

  return (
    <View style={[styles.container]}>
      <TouchableWithoutFeedback onPress={openExpenditureCreditCardModal}>
        <Animated.View style={[styles.button, styles.secondary, creditCard]}>
          <FontAwesome5 name="money-check" size={size} color="#FFF" />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={openTransferModal}>
        <Animated.View style={[styles.button, styles.secondary, transfer]}>
          <FontAwesome name="exchange" size={size} color="#FFF" />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={openExpenditureModal}>
        <Animated.View style={[styles.button, styles.secondary, heartStyle]}>
          <FontAwesome5 name="sort-amount-down-alt" size={size} color="#FFF" />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={openRevenueModal}>
        <Animated.View style={[styles.button, styles.secondary, pinStyle]}>
          <FontAwesome5 name="sort-amount-up-alt" size={size} color="#FFF" />
        </Animated.View>
      </TouchableWithoutFeedback>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isRevenueModalVisible}
        onRequestClose={closeRevenueModal}
      >
        <ActionModalRevenue handleClose={closeRevenueModal} />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isExpenditureModalVisible}
        onRequestClose={closeExpenditureModal}
      >
        <ActionModalExpenditure handleClose={closeExpenditureModal} />
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isExpenditureCreditCardModalVisible}
        onRequestClose={closeExpenditureCreditCardModal}
      >
        <ActionModalExpenditureCreditCard handleClose={closeExpenditureCreditCardModal} />
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isTransferModalVisible}
        onRequestClose={closeTransferModal}
      >
        <ActionModalTransfer handleClose={closeTransferModal} />
      </Modal>

      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View
          style={[
            styles.button,
            styles.menu,
            rotation,
            { backgroundColor: focused ? '#FF6A46' : '#F9CD2F' },
          ]}
        >
          <AntDesign name="plus" size={size} color={focused ? '#F9CD2F' : '#051037'} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F9CD2F',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: '#00213B',
    shadowOpacity: 0.3,
    shadowOffset: { height: 10 },
  },
  menu: {
    backgroundColor: '#00213B',
  },
  secondary: {
    width: 48,
    height: 48,
    borderRadius: 46 / 2,
    backgroundColor: '#F9CD2F',
  },
});

export default FabButton;