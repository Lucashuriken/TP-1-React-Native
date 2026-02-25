import { View, Text, Image, StyleSheet } from 'react-native';

export default function Tarefa03() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>Logo do React Native</Text>
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
  image: {
    width: '80%',
    height: 200,
  },
  text: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
  },
});