import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class ListItem extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 8 }}>
                <Text style={{ textAlignVertical: 'center' }}>{ this.props.item.text }</Text>
                <TouchableNativeFeedback onPress={() => this.props.hideElement(this.props.item.key)}>
                    <Ionicons name="md-trash" size={32} color="red" />
                </TouchableNativeFeedback>
            </View>
        );
    }
}