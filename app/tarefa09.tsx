import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Tarefa09() {

  const listaCompras = [
    { id: '1', nome: 'Arroz' },
    { id: '2', nome: 'Feijão' },
    { id: '3', nome: 'Macarrão' },
    { id: '4', nome: 'Leite' },
    { id: '5', nome: 'Café' },
    { id: '6', nome: 'Açúcar' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras 🛒</Text>

      <FlatList
        data={listaCompras}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.texto}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategray',
    padding: 20,
  },

  titulo: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 15,
  },

  item: {
    backgroundColor: '#2f4f4f',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },

  texto: {
    color: 'white',
    fontSize: 16,
  },
});
