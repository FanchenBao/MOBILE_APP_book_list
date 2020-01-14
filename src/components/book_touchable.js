import React, {Component} from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';

/**
 * A class to render a touchable on top of each book item.
 *
 * Note that this component is a regular `Component` with
 * `shouldComponentUpdate` defined, instead of a `PureComponent`. This is
 * because `BookTouchable` expects `children`, and `children` will break render
 * of `PureComponent`.
 */
class BookTouchable extends Component {
  /**
   * This function calls the onPress callback passed as props.
   * This is to force BookTouchable to remain pure, except from the `children`.
   */
  _onPress = () =>
    this.props.onPressCB(this.props.sectionIndex, this.props.bookIndex);

  /**
   * Explicitly set this function because we cannot use PureComponent.
   * @param {*} nextProps next props
   * @param {*} nextState next state, which is not used since this component
   * doesn't have state.
   */
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.onPressCB !== nextProps.onPressCB ||
      this.props.sectionIndex !== nextProps.sectionIndex ||
      this.props.bookIndex !== nextProps.bookIndex
    );
  }

  render() {
    // console.log(this.props.sectionIndex, this.props.bookIndex);
    return (
      <TouchableHighlight
        onPress={this._onPress}
        underlayColor={'#e6e6e6'}
        style={styles.touchable}>
        {this.props.children}
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: 'white',
  },
});

export {BookTouchable};
