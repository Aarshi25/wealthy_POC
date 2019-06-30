import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IDates } from '../models';
import DaysRow from '../components/DaysRow';
import { connect } from 'react-redux'

const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

interface IProps{
    navigation: {
        navigate: (route: string) => void
    }
}

class Calendar extends Component<IProps,any> {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: '',
        }
    }

    render = () => {
        if(this.props.loading){
            const stocks = this.props.stocks;
            console.log(stocks,"***");
            return (
                <View style={styles.container}>
                    <View style={styles.monthContainer}>
                        <Text>June</Text>
                    </View>
                    <View style={styles.days}>
                        <DaysRow navigation={this.props.navigation} row={1}/>
                        <DaysRow navigation={this.props.navigation} row={2}/>
                        <DaysRow navigation={this.props.navigation} row={3}/>
                    </View>
                </View>
            )
        }
        else {
            return (
                <View style={styles.container}>
                    <View style={styles.monthContainer}>
                        <Text>June</Text>
                    </View>
                    <View style={styles.days}>
                        {/*<DaysRow navigation={this.props.navigation} prices={stocks.splice(0,9)} row={1}/>*/}
                        {/*<DaysRow navigation={this.props.navigation} prices={stocks.splice(10,19)} row={2}/>*/}
                        {/*<DaysRow navigation={this.props.navigation} prices={stocks.splice(20,29)} row={3}/>*/}
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    monthContainer: {
        alignItems: 'center',
        marginTop: 5,
    },
    days: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    container:{
        flex: 1,
        backgroundColor: 'rgb(200,200,200)',
        width: '90%',
        borderRadius:10,
        alignSelf:'center',
        marginTop: 10,
    },
})

const mapStateToProps = (state) => {
    return{
        ...state
    }
};

export default connect (mapStateToProps)(Calendar);

