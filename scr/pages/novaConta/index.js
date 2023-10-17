import React from "react";
import SelectDropdown from 'react-native-select-dropdown';
import {View, Text, TextInput, Button, ButtonProps} from "react-native";
import styles from "./style"


const contas = ["Conta Corrente", "Conta Poupança", "Investimento"]
const instituicaoF = ["Bradesco", "Banco do Brasil", "Santander", "Caixa", "Rico"]
const cores = ["Verde", "Vermelho", "Rosa", "Amarelo", "Azul", "Cinza"]

export default function novaConta(){
    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>
                <h2>Nova Conta</h2>
            </Text>
            <Text style={styles.textValues}>
                <p>Valor atual da conta</p>
                <p>R$ 0,00</p>
            </Text>
            <View style={styles.createAccount}>
            <SelectDropdown
                data={instituicaoF}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
            />
            <SelectDropdown
                data={contas}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
            />         
                <SelectDropdown
                data={cores}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {

                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
            />
            <TextInput placeholder="Descrição" style={styles.descricao}/>
            <p style={styles.textButton}>Incluir na soma da tela inicial <Button/></p>
            <Button title="Concluir"/>
            </View>
        </View>
    );
}