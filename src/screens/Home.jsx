import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

interface IProps {

}

interface IState {

}

export default class Home extends Component<IProps,IState> {
    constructor (props: IProps) {
        super(props);
        this.state = {

        };
    }

    render = () => {
        return (
            <View>
                <Text>HomeScreen</Text>
            </View>
        )
    };
}
