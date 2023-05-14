import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

const AddTodo = (props: any) => {

    const [text, setText] = useState('')
    const changeHandle = (val: any) => {
        setText(val)
    }

    return (
      <View >
        <TextInput
            style={styles.input}
            placeholder='add a to do......'
            onChangeText={ changeHandle }
            value = {text}
            
        />
        <Button onPress={ () => {
                props.submitHandler(text)
                setText('')
            }}
            title='Add' color='coral'/>
      </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 2,
        borderBottomColor: 'blue'
    },

})

export default AddTodo;