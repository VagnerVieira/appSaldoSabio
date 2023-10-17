import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#051037',
        alignItems: 'center',
        paddingTop: 95,
      },
    textTitle: {
        color:"#FFFFFF",
        fontSize: 24,
        fontWeight: "bold",
    },
    viewSaldo: {
        flexDirection: 'row',
        padding: 35,
        justifyContent:"center",
        color:"#FFFFFF",
        
    },
    saldoAtual: {
        backgroundColor: "#0A8354",
        marginRight: 10,
        borderRadius: 15,
        width: 180,
    },
    saldoAtualText: {
        color:"#FFFFFF",
        textAlign: "center",
    },
    saldoPrevisto: {
        backgroundColor: "#272e66",
        marginLeft: 10,
        borderRadius: 15,
        width: 180,
    },
    saldoPrevistoText: {
        color:"#FFFFFF",
        textAlign: "center",
    },
    carteira: {
        backgroundColor: "#2C2A34",
        color:"#FFFFFF",
        marginBottom: 15,
        borderRadius: 15,
        width: 400,
    }


  });

  export default styles