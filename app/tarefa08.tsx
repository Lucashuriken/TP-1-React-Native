import { View, Text, Image, StyleSheet } from 'react-native';

export default function Tarefa08() {
  return (
    <View style={styles.container}>
      
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://i.pinimg.com/736x/7b/1d/89/7b1d89b159d0c82ba893c7e89cf24397.jpg' }} 
          style={styles.avatar} 
        />

        <Text style={styles.name}>Lucas Winter</Text>

        <Text style={styles.bio}>
          Estudante de Engenharia de Dados apaixonado por tecnologia,
          programação e café ☕
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategray',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: '85%',
    backgroundColor: '#2f4f4f',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 15,
  },

  name: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  bio: {
    fontSize: 16,
    color: '#ddd',
    textAlign: 'center',
  },
});
