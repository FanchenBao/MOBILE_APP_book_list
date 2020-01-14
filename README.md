# Book List
## Introduction
This is another tutorial mobile app provided by _Learning React Native_ book, with quite a few touch from my end. The main changes I have made are:

1. Wrap each book item in a `TouchableHighlight` component, and upon touching a book item, extra info about the book will be displayed below, including a brief description of the book, publisher name, and a button to press if a purchase is desired.
2. Improve upon performance by making each book item a pure component, and by defining the `shouldComponentUpdate` function in each the book touchable component. The final outcome is that each book item and its associated touchable component will be rendered once at the beginning. After that, none of the touchable component will be rendered again, and only the book item touched will be further rendered upon user interaction (at least from react native's side).

## Issues
Testing has not been implemented in this project, especially the mocking of `fetch`. Therefore, the default testing would return error regarding the fetch function not being defined. To enable testing, `fetch` needs to be mocked, such as through [fetch-mock](http://www.wheresrhys.co.uk/fetch-mock/).