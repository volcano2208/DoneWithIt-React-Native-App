import { useState } from 'react';
import { Alert, FlatList, Image, SafeAreaView, StyleSheet, Text } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddItem from './components/AddItem';
import Header from './components/Header';
import ListItem from './components/ListItem';

export default function App() {
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      text: 'Milk',
    },
    {
      id: uuidv4(),
      text: 'Eggs',
    },
    {
      id: uuidv4(),
      text: 'Bread',
    },
    {
      id: uuidv4(),
      text: 'Juice',
    },
  ]);

  const deleteItem = id => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please add some item');
    } else {
      setItems(prevItems => [
        ...prevItems,
        {
          id: uuidv4(),
          text: text,
        },
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List" />
      <Text style={styles.text}>Hello World</Text>
      <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.img} />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});
