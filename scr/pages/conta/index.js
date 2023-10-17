import React from "react";
import {View, Text, Button} from "react-native";
import styles from "./style"

const slides = [
    {
        key: 1,
        title: 'Janeiro',
    },
    {
        key: 2,
        title: 'Fevereiro',
    },
    {
        key: 3,
        title: 'Março',
    },
    {
        key: 4,
        title: 'Abril',
    },
    {
        key: 5,
        title: 'Maio',
    },
    {
        key: 6,
        title: 'Junho',
    },
    {
        key: 7,
        title: 'Julho',
    },
    {
        key: 8,
        title: 'Agosto',
    },
    {
        key: 9,
        title: 'Setembro',
    },
    {
        key: 10,
        title: 'Outubro',
    },
    {
        key: 11,
        title: 'Novembro',
    },
    {
        key: 12,
        title: 'Dezembro',
    }
]

export default function Conta(){
    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>Contas</Text>
            <Text style={styles.textTitle}> <h3> Setembro</h3></Text>
            <View style={styles.viewSaldo}>
                <View style={styles.saldoAtual}>
                    <Text style={styles.saldoAtualText}> 
                    <h2>Saldo Atual</h2>
                    <p>R$ 1.980,00</p>
                    </Text>
                </View>
                <View style={styles.saldoPrevisto}>
                    <Text style={styles.saldoPrevistoText}>
                    <h2>Saldo Previsto</h2>
                    <p>R$ 1.980,00</p> 
                    </Text>
                </View>

            </View>
            <View style={styles.carteira}>
                <h2>Carteira</h2>
                <p>Saldo Atual: 1.980,00</p>
                <p>Saldo Previsto:  1.980,00 </p>
                </View>



            <Button title="Criar Nova Conta"/>
        </View>
    );
}

