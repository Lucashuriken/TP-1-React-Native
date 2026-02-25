import { View, Button, Alert, StyleSheet } from 'react-native';


export default function Tarefa07() {
  return (
    <View style={styles.container}>
      <Button title="Salvar" onPress={() => Alert.alert('Eu não sou preguiçoso, estou no modo economia de energia')} />
      <Button title="Editar" onPress={() => Alert.alert('Eu não estou dizendo que odeio pessoas… ')} />
      <Button title="Excluir" onPress={() => Alert.alert('Eu não sou contra o sistema. Eu só queria que ele funcionasse')} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategray',
    justifyContent: 'center',
    gap: 10,
  },
});
