import React, {PureComponent} from 'react';
import {StyleSheet, Text} from 'react-native';

/** Text tag for author */
class Author extends PureComponent {
  render() {
    return <Text style={styles.mediumText}>{this.props.children}</Text>;
  }
}

/** Text tag for book title */
class Title extends PureComponent {
  render() {
    return (
      <Text style={[styles.mediumText, styles.bold]}>
        {this.props.children}
      </Text>
    );
  }
}

/** Text tag for book rank */
class Rank extends PureComponent {
  render() {
    return (
      <Text style={[styles.mediumText, styles.italic]}>
        {this.props.children}
      </Text>
    );
  }
}

/** Text tag for extra info content of a book */
class ExtraInfo extends PureComponent {
  render() {
    return <Text style={styles.extrainfo}>{this.props.children}</Text>;
  }
}

/**
 * Text tag for the name of each extra info category, e.g. description,
 * publisher.
 */
class ExtraInfoName extends PureComponent {
  render() {
    return <Text style={styles.extrainfoname}>{this.props.children}</Text>;
  }
}

/** Text tag for the text within a button */
class ButtonText extends PureComponent {
  render() {
    return <Text style={styles.buttonText}>{this.props.children}</Text>;
  }
}

const styles = StyleSheet.create({
  smallText: {fontSize: 15},
  mediumText: {fontSize: 18},
  bigText: {fontSize: 21},
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
  extrainfo: {
    fontSize: 15,
    flex: 2,
    // marginRight: 20,
  },
  extrainfoname: {
    fontSize: 15,
    flex: 1,
    fontWeight: 'bold',
    // marginLeft: 20,
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
  },
});

export {Author, Title, Rank, ExtraInfo, ExtraInfoName, ButtonText};
