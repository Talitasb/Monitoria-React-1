import{ Text, View } from "react-native";
import estilo from '../Estilos/estilo'

export default function Primeiro(props){
    return (
        <View>
            <Text style={estilo.first}>Meu Nome é: <Text style={estilo.texto}>{props.nome}</Text></Text>
        </View>
      );
    }
    