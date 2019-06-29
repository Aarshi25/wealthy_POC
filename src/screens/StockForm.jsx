import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

interface IProps {

}

interface IState {

}

export default class StockForm extends Component<IProps,IState> {
    constructor (props: IProps) {
        super(props);
        this.state = {

        };
    }

    render = () => {
        return (
            <View>
                <Text>StockScreen</Text>
            </View>
        )
    };
}
