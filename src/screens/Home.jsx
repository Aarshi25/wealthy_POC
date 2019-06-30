import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Calendar from '../container/Calendar';
import {getStocks} from "../actions";
import {DataService} from "../DataService";
import Graph from "../container/Graph";

interface IState {

}

class Home extends Component<any,IState> {
    constructor (props) {
        super(props);
        this.state = {

        };
    }


    render = () => {
        return (
            <ScrollView >
                <Calendar navigation={this.props.navigation}/>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
                    {/*<Graph/>*/}
                </View>
            </ScrollView>
        )
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getStocks: (data) => {dispatch(getStocks(data))},
    }
}

export default connect(null, mapDispatchToProps)(Home);
