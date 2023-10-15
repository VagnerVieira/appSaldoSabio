import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import { AntDesign, Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import Transfer from '../../pages/Transfer';
import Revenue from '../../pages/Revenue';
import Expenditure from '../../pages/Expenditure';
import ExpenditureCreditCard from '../../pages/ExpenditureCreditCard';

export default class FabButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: props.size,
      color: props.color,
      focused: false, // Inicialmente não focado
    };

    this.animation = new Animated.Value(0); //
    this.open = false;
  }

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1; // clicou vai para o 1

    Animated.spring(this.animation, {
      toValue,
      friction: 6,
      useNativeDriver: false, 
    }).start();

    this.open = !this.open; // recolher o botão

    this.setState((prevState) => ({ // Atualizar o estado focused
      ...prevState,
      focused: this.open,
    }));
  };


  render() {
    const { size, color, focused } = this.state;

    const pinStyle = {
      transform: [
        {
          scale: this.animation,
        },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -80],
          }),
        },
      ],
    };

    const heartStyle = {
      transform: [
        {
          scale: this.animation,
        },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -140],
          }),
        },
      ],
    };
    const transfer = {
      transform: [
        {
          scale: this.animation,
        },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -200],
          }),
        },
      ],
    };
    const creditCard = {
      transform: [
        {
          scale: this.animation,
        },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -260],
          }),
        },
      ],
    };

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg'],
          }),
        },
      ],
    };

    return (
      
      <View style={[styles.container]}>
        <TouchableWithoutFeedback onPress={() => alert('CURTIR!')}>
          <Animated.View style={[styles.button, styles.secondary, creditCard]}>
            <FontAwesome5 name="money-check" size={size} color="#FFF" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => alert('CURTIR!')}>
          <Animated.View style={[styles.button, styles.secondary, transfer]}>
            <FontAwesome name="exchange" size={size} color="#FFF" />
          </Animated.View>
        </TouchableWithoutFeedback>

        
        <TouchableWithoutFeedback onPress={() => alert('DESPESA!')}>
          <Animated.View style={[styles.button, styles.secondary, heartStyle]}>
            <FontAwesome5 name="sort-amount-down-alt" size={size} color="#FFF" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => alert('RECEITA!')}>
          <Animated.View style={[styles.button, styles.secondary, pinStyle]}>
            <FontAwesome5 name="sort-amount-up-alt" size={size} color="#FFF" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
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
  }
}

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