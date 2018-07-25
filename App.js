import React from 'react';
import { StatusBar, StyleSheet, FlatList, TextInput, Button, View, Alert } from 'react-native';
import ListItem from './ListItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: '',
      lastKey: 1,
      items: [
        { key: '1', text: 'Hello' }
      ],
    };
  }

  addItem() {
    if (this.state.currentText === '') {
      Alert.alert('Hiba!', 'Nem fogok üres szöveggel elemet létrehozni!');
      return;
    }
    this.state.lastKey++;
    this.setState({ items: this.state.items.concat({
      key: this.state.lastKey.toString(),
      text: this.state.currentText,
    }) });
  }

  hideItem(key) {
    let index = this.state.items.findIndex(x => x.key === key);
    this.setState({ items: this.state.items.filter((_, i) => i !== index) });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchBox} onChangeText={(t) => this.setState({ currentText: t })}
            underlineColorAndroid="transparent" placeholder="Írj ide valamit!" />
          <Button style={{ flex: 0 }} title="Add" onPress={this.addItem.bind(this)} />
        </View>
        <FlatList style={styles.list} data={this.state.items} renderItem={({item}) =>
          <ListItem item={item} hideElement={this.hideItem.bind(this)} />
        } ItemSeparatorComponent={({highlighted}) => <View style={{ height: 1, backgroundColor: "#CED0CE" }} />} />
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
  searchContainer: {
    flex: 0,
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchBox: {
    flex: 1,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: "black",
    marginRight: 4,
  },
});
