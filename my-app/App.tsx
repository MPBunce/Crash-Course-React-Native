//Components
import Header from './components/input';
import Todo from './components/todo';
import AddTodo from './components/addTodo';
//Other Stuff
import { Button, StyleSheet, Keyboard, Text, View, TextInput, FlatList, TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Get coffee', key: '1'},
    { text: 'Create an app', key: '2'},
    { text: 'Program', key: '3'},
  ])

  const submitHandler = (text: any) => {
    setTodos( (prevTodos) => {
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ]
    })
  }

  const pressHandler = (key: any) => {
    setTodos( (prevTodos) => {
      return prevTodos.filter( todo => todo.key != key);
    })
  }

  return (
    <TouchableWithoutFeedback onPress={ ()=> {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header header={"ToDo Header"}/>
        <View style={styles.content}>
          <AddTodo submitHandler={ submitHandler }/>

          <View style={styles.list}>

            <FlatList
              data={todos}
              renderItem={ ({item}) => (
                <Todo item={item} pressHandler={ pressHandler }/>
              )}
            />

          </View>

        </View>
      </View>
    </TouchableWithoutFeedback>
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