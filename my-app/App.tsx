//Components
import Header from './components/input';
import Todo from './components/todo';

//Other Stuff
import { Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Get coffee', key: '1'},
    { text: 'Create an app', key: '2'},
    { text: 'Program', key: '3'},
  ])

  return (
    <View style={styles.container}>
      <Header header={"ToDo Header"}/>
      <View style={styles.content}>
        {/*Input form*/}

        <View style={styles.list}>

          <FlatList
            data={todos}
            renderItem={ ({item}) => (
              <Todo item={item} />
            )}
          />

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',

  }, 
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});