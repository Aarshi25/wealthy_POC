import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

interface IProps {
    date: string;
}

interface IState {
    stock: string
}

export default class StockForm extends Component<IProps,IState> {
    constructor (props: IProps) {
        super(props);
        this.state = {
            stock:'',
        };
    }

    render = () => {
        return (
            <View style={styles.container}>
                <Text>Add Stock Prices</Text>
                <TextInput
                value={this.state.stock}
                onChangeText={this.handleChange}
                style={styles.textBox}
                />
            </View>
        )
    };

    handleChange = (text: string) => {
      this.setState({stock: text});
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    textBox: {
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 10,
        width: '80%',
    }
})

