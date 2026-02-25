import { View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';


export default function Tarefa10() {
  const [count, setCount] = useState(0);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button title="Clique aqui" onPress={() => setCount(count + 1)} />
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
    fontSize: 40,
    marginBottom: 20,
  },
});
