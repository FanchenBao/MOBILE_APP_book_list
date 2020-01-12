import React, {Component} from 'react';
import {StyleSheet, View, TouchableHighlight, Linking} from 'react-native';
import {ExtraInfo, ExtraInfoName, ButtonText} from './text_tag.js';

/** A class to provide rendering for extra info of each book */
class ExtraInfoView extends Component {
  _row(name, info) {
    return (
      <View style={styles.row}>
        <ExtraInfoName>{`${name}:`}</ExtraInfoName>
        <ExtraInfo>{info}</ExtraInfo>
      </View>
    );
  }

  /**
   * Helper function to go to the specified URL from within the app.
   *
   * This function first checks whether the device can or cannot open the given
   * URL. If it can, it proceeds to open it in whatever default browser used
   * on the device. Otherwise, it reports error. For more details about the
   * functions `canOpenURL` and `openURL`, refer to their doc.
   *
   * @param {string} url The URL to visit.
   */
  async _goToURL(url) {
    try {
      let urlVerdict = await Linking.canOpenURL(url);
      if (urlVerdict) {
        Linking.openURL(url);
      } else {
        console.error(`Do not know how to open URL: ${url}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this._row('Description', this.props.description)}
        {this._row('Publisher', this.props.publisher)}
        <TouchableHighlight
          style={styles.linkButton}
          underlayColor={'#196619'}
          onPress={() => this._goToURL(this.props.amazon_product_url)}>
          <ButtonText>Buy a copy</ButtonText>
        </TouchableHighlight>
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
    flex: 1,
  },
  row: {
    flex: 2,
    flexDirection: 'row',
    // borderColor: 'black',
    // borderWidth: 2,
  },
  linkButton: {
    flex: 1,
    backgroundColor: '#33cc33',
    marginTop: 20,
    borderRadius: 20,
    padding: 7,
  },
});

export {ExtraInfoView};
