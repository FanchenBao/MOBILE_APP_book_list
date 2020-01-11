import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

class Author extends Component {
  render() {
    return <Text style={styles.mediumText}>{this.props.children}</Text>;
  }
}

class Title extends Component {
  render() {
    return (
      <Text style={[styles.mediumText, styles.bold]}>
        {this.props.children}
      </Text>
    );
  }
}

class Rank extends Component {
  render() {
    return (
      <Text style={[styles.mediumText, styles.italic]}>
        {this.props.children}
      </Text>
    );
  }
}

class ExtraInfo extends Component {
  render() {
    return <Text style={styles.extrainfo}>{this.props.children}</Text>;
  }
}

class ExtraInfoName extends Component {
  render() {
    return <Text style={styles.extrainfoname}>{this.props.children}</Text>;
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
});

export {Author, Title, Rank, ExtraInfo, ExtraInfoName};
