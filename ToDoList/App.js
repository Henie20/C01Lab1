import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import 'react-native-get-random-values'
import ToDoList from './components/ToDoList';

export default function App() {
  return (
    <View style={styles.container}>
        <ToDoList initialValues={["task1", "task2", "task3"]} />
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
