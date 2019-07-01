import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text , TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';

interface IProps {
    date: number;
    navigation: any;
}

interface IState {
    stock: string
}

class StockForm extends Component<IProps,IState> {
    constructor (props: IProps) {
        super(props);
        this.state = {
            stock:'',
        };
    }
    componentDidMount(): void {
        const {currentDate} = this.props;
        const clickedDay = this.props.navigation.getParam('date');
        const currentDay = currentDate.split('/');
        if(clickedDay==currentDay[0]){
            this.setState({stock: this.props.navigation.getParam('stock')});
        }
    }

    render = () => {
        return (
            <View style={styles.container}>
                <Text>Add Stock Prices</Text>
                <TextInput
                value={this.state.stock}
                onChangeText={this.handleChange}
                style={styles.textBox}
                keyboardType = 'phone-pad'
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={{color:'white'}}>Submit</Text>
                </TouchableOpacity>
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
    },
    button: {
        width: '60%',
        height: 40,
        marginTop: 40,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    }
})

const mapStateToProps = (state) => {
    return {
        currentDate: state.currentDate,
    }
}

export default connect (mapStateToProps)(StockForm);

