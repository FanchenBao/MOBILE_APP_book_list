import React, {PureComponent} from 'react';
import {
  StyleSheet,
  View,
  SectionList,
  Text,
  TouchableHighlight,
} from 'react-native';
import {BookItem} from './components/book_item.js';
import {fetchBooks} from './functions/fetch_books.js';
import update from 'immutability-helper';
import {ExtraInfoView} from './components/extra_info.js';

/** Main class for the app */
class BookList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
    };
  }

  /**
   * Callback when an item of the section list is pressed.
   *
   * This callback updates the "showInfo" state of the specific item pressed.
   * @param {*} section Representation of the section where press occurrs. This
   * is needed to locate which section to update the state.
   * @param {string} index The index of the item where press occurrs.
   */
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

  /**
   * A function to render extra info about a book.
   *
   * This function returns null if the "showInfo" state is false, but returns
   * the extra info DOM (containing the books's description, publisher, and a
   * button linking to the amazon page for purchase) when "showInfo" is set to
   * true, which happens when user presses on the item.
   * @param {*} item Representation of the specific item where press occurrs.
   */
  _renderExtraInfo(item) {
    if (item.showInfo) {
      return (
        <ExtraInfoView
          description={item.description}
          publisher={item.publisher}
          amazon_product_url={item.amazon_product_url}
        />
      );
    } else {
      return null;
    }
  }

  /**
   * Callback for "renderItem" prop in SectionList.
   *
   * It returns the DOM for each item.
   */
  _renderItem = ({item, index, section}) => {
    // console.log(item.author);
    return (
      <View>
        <TouchableHighlight
          onPress={() => this._onPress(section, index)}
          underlayColor={'#e6e6e6'}
          style={styles.touchable}>
          <BookItem
            image_url={item.book_image}
            author={item.author}
            title={item.title}
            rank={item.rank}
          />
        </TouchableHighlight>
        {this._renderExtraInfo(item)}
      </View>
    );
  };

  /** Callback for "renderHeader" prop of SectionList */
  _renderHeader = ({section}) => {
    return <Text style={styles.headerText}>{section.title}</Text>;
  };

  /**
   * A function to add keys to each book item.
   *
   * Notice the use of Object.assign function to merge new key-value maps to the
   * original one.
   */
  _addKeysToBooks = books =>
    books.map(book =>
      Object.assign(book, {key: book.primary_isbn13, showInfo: false}),
    );

  /**
   * A function to asynchronously retrieve best seller book list
   * data from an API, via the `fetchBooks` function. Once data are retrieved,
   * they are set into the state.
   */
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
  touchable: {
    backgroundColor: 'white',
  },
});

export {BookList};
