import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
const ListScreen = () => {

  const friends = [
    { name: 'Habib', age: 32 },
    { name: 'Ruhul', age: 31 },
    { name: 'Joy', age: 35 },
    { name: 'Pori', age: 38 },
    { name: 'Anam', age: 36 },
    { name: 'Rasel', age: 37 },
    { name: 'Nayem', age: 31 },
    { name: 'Saif', age: 22 },
    { name: 'Sadia', age: 39 },
    { name: 'Aysa', age: 38 },
    { name: 'Tamvir', age: 40 },
    { name: 'asdf', age: 22 },
    { name: 'sdfsb', age: 39 },
    { name: 'csdf', age: 38 },
    { name: 'dsdfsdf', age: 40 },
  ]

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.itemStyle} >{item.name} - {item.age} </Text>
      }}
    />

  );
};

const styles = StyleSheet.create({
  itemStyle: {
    fontSize: 25,
    marginVertical: 10,
    marginLeft: 25
  }
})

export default ListScreen;