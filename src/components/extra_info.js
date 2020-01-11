import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {ExtraInfo, ExtraInfoName} from './text_tag.js';

class ExtraInfoView extends Component {
  _row(name, info) {
    return (
      <View style={styles.row}>
        <ExtraInfoName>{`${name}:`}</ExtraInfoName>
        <ExtraInfo>{info}</ExtraInfo>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this._row('Description', this.props.description)}
        {this._row('Publisher', this.props.publisher)}
        {this._row('Buy a copy', this.props.amazon_product_url)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 2,
    alignItems: 'flex-start',
    padding: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    // borderColor: 'black',
    // borderWidth: 2,
  },
});

export {ExtraInfoView};
