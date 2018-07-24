import React from 'react';
import { View, Text } from 'react-native';

export default class ListItem extends React.Component {
    render() {
        return (
            <View>
                <Text>{ this.props.item.text }</Text>
            </View>
        );
    }
}