import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  SectionList,
  Text,
  TouchableHighlight,
} from 'react-native';
import {BookItem} from './book_item.js';
import {fetchBooks} from './fetch_books.js';
import update from 'immutability-helper';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
    };
  }

  _onPress(section, index) {
    // Acquire the index of the section within this.state.sections. This is
    // necessary because I don't know any other way to refer to the section in
    // this.state.sections without using its index.
    let sectionIndex = this.state.sections.indexOf(section);
    // Use update method (ref: https://github.com/kolodny/immutability-helper)
    // to toggle the 'showInfo' value of a specific item within a sepcific
    // section. Refer to `update` document for how its syntax work here.
    this.setState({
      sections: update(this.state.sections, {
        [sectionIndex]: {
          data: {
            [index]: {
              showInfo: function(x) {
                return !x;
              },
            },
          },
        },
      }),
    });
  }

  _renderItem = ({item, index, section}) => {
    // console.log(index, item.showInfo);
    return (
      <View>
        <TouchableHighlight onPress={() => this._onPress(section, index)}>
          <BookItem
            image_url={item.book_image}
            author={item.author}
            title={item.title}
            rank={item.rank}
          />
        </TouchableHighlight>
        <Text>{item.showInfo ? 'hello' : 'world'}</Text>
      </View>
    );
  };

  _renderHeader = ({section}) => {
    return <Text style={styles.headerText}>{section.title}</Text>;
  };

  _addKeysToBooks = books =>
    books.map(book =>
      Object.assign(book, {key: book.primary_isbn13, showInfo: false}),
    );

  async _refreshData() {
    try {
      let allBooks = [
        await fetchBooks('hardcover-fiction'),
        await fetchBooks('hardcover-nonfiction'),
      ];
      if (allBooks.length !== 2) {
        console.error('Unexpected results');
      } else {
        this.setState({
          sections: [
            {
              title: 'Hardcover Fiction',
              data: this._addKeysToBooks(allBooks[0]),
            },
            {
              title: 'Hardcover Nonfiction',
              data: this._addKeysToBooks(allBooks[1]),
            },
          ],
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this._refreshData();
  }

  render() {
    // console.log(this.state.sections[1]);
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.sections}
          renderItem={this._renderItem}
          renderSectionHeader={this._renderHeader}
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
  headerText: {
    fontSize: 30,
    fontFamily: 'serif',
    textAlign: 'center',
    backgroundColor: 'lightgrey',
    padding: 10,
  },
});

export {BookList};
