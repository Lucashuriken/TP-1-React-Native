import { ScrollView, Text, StyleSheet } from 'react-native';

export default function Tarefa04() {
  return (
    <ScrollView style={styles.container}>
      {['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6'].map(item => (
        <Text key={item} style={styles.text}>{item}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategray',
    padding: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 15,
  },
});