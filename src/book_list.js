import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {BookItem} from './book_item.js';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: mockBooks,
    };
  }

  _renderItem = ({item}) => {
    return (
      <BookItem
        image_url={item.book_image}
        author={item.author}
        title={item.title}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={item => `${item.rank}_${item.title}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

const mockBooks = [
  {
    rank: 1,
    title: 'GATHERING PREY',
    author: 'John Sandford',
    book_image:
      'http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9780399168796.jpg',
  },
  {
    rank: 2,
    title: 'MEMORY MAN',
    author: 'David Baldacci',
    book_image:
      'http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9781455586387.jpg',
  },
];

export {BookList};
