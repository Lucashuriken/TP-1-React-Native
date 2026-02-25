import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  const tarefas = [
    { nome: 'TP1', rota: '/tarefa01' },
    { nome: 'TP2', rota: '/tarefa02' },
    { nome: 'TP3', rota: '/tarefa03' },
    { nome: 'TP4', rota: '/tarefa04' },
    { nome: 'TP5', rota: '/tarefa05' },
    { nome: 'TP6', rota: '/tarefa06' },
    { nome: 'TP7', rota: '/tarefa07' },
    { nome: 'TP8', rota: '/tarefa08' },
    { nome: 'TP9', rota: '/tarefa09' },
    { nome: 'TP10', rota: '/tarefa010' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>TP1 — React Native</Text>

      {tarefas.map(tarefa => (
        <TouchableOpacity
          key={tarefa.nome}
          style={styles.button}
          onPress={() => router.push(tarefa.rota)}
        >
          <Text style={styles.buttonText}>{tarefa.nome}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'darkslategray',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    width: '100%',
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
