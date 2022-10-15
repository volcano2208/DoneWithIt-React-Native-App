import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const AddItem = ({ addItem }) => {
  const [text, setText] = useState('');

  const onChange = value => {
    setText(value);
  };

  return (
    <View>
      <TextInput onChangeText={onChange} placeholder="Add Item..." style={styles.input} />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text);
        }}
      >
        <Text style={styles.btnText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

AddItem.propTypes = {};

export default AddItem;
