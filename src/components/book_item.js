import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Author, Title, Rank} from './text_tag.js';

class BookItem extends Component {
  render() {
    return (
      <View style={styles.bookItem}>
        <Image style={styles.cover} source={{uri: this.props.image_url}} />
        <View style={styles.info}>
          <Rank>{`#${this.props.rank}`}</Rank>
          <Author>{this.props.author}</Author>
          <Title>{this.props.title}</Title>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bookItem: {
    flexDirection: 'row',
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
});

export {BookItem};
