import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BookList = ({ navigation }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://example.com/books.json')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <View style={styles.container}>
      {books.map(book => (
        <TouchableOpacity
          key={book.id}
          style={styles.book}
          onPress={() => navigation.navigate('BookDetails', { book })}
        >
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>{book.author}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  book: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  author: {
    fontSize: 14,
    color: '#666',
  },
});

export default BookList;