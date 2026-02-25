import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Tarefa06() {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.buttonBlue}>
        <Text style={styles.text}>Botão 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonGreen}>
        <Text style={styles.text}>Botão 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonFull}>
        <Text style={styles.text}>Botão Largo</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategray',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  buttonBlue: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    width: 200,
    marginBottom: 15,
    alignItems: 'center',
  },

  buttonGreen: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 30,
    width: 180,
    marginBottom: 15,
    alignItems: 'center',
  },

  buttonFull: {
    backgroundColor: 'red',
    padding: 18,
    borderRadius: 5,
    width: '100%',   // 👈 ocupa toda a largura
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
