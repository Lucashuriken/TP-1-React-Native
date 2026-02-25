import { View, Text, StyleSheet } from 'react-native';

export default function Tarefa01() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Bem-vindos ao meu TP1 de React Native
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
