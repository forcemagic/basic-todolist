import React from 'react';
import { StatusBar, StyleSheet, FlatList, TextInput, View } from 'react-native';
import ListItem from './ListItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: '',
      items: [
        { key: '1', text: 'Hello' }
      ],
    };
  }

  render() {
    // TODO: Only show <Text>, later delete btn
    return (
      <View style={styles.container}>
        {/* <TextInput onChangeText={(t) => this.setState({ currentText: t })} /> */}
        <FlatList data={this.state.items} renderItem={({item}) => <ListItem item={item} />} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    padding: 8,
    backgroundColor: '#fff',
  },
});
