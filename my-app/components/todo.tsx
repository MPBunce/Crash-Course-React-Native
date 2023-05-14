import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Todo = (props: any) => {
  return (
    <TouchableOpacity onPress={ () => props.pressHandler(props.item.key) }>

      <Text style={styles.item}>{ props.item.text }</Text>


    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
      marginTop: 18,
      padding: 18,
      borderColor: '#bbb',
      borderStyle: 'dashed',
      borderRadius: 10,
  },

})

export default Todo;