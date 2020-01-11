import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

class BookItem extends Component {
  render() {
    return (
      <View style={styles.bookItem}>
        <Image style={styles.cover} source={{uri: this.props.image_url}} />
        <View style={styles.info}>
          <Text style={styles.rank}>{`#${this.props.rank}`}</Text>
          <Text style={styles.author}>{this.props.author}</Text>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bookItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 2,
    padding: 20,
  },
  cover: {
    flex: 1,
    height: 150,
    resizeMode: 'contain',
    width: 90,
    // borderColor: 'black',
    // borderWidth: 2,
  },
  info: {
    flex: 2,
    alignItems: 'flex-end',
    flexDirection: 'column',
    alignSelf: 'center',
    padding: 20,
    // borderColor: 'black',
    // borderWidth: 2,
  },
  author: {fontSize: 18},
  title: {fontSize: 18, fontWeight: 'bold'},
  rank: {fontSize: 18, fontStyle: 'italic'},
});

export {BookItem};
