import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Calendar from '../container/Calendar';
import {getStocks,setDate} from "../actions";
import {DataService} from "../DataService";

interface IState {

}

class Splash extends Component<any,IState> {
    constructor (props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount = async () => {
        await DataService.getData()
            .then((res)=>{
                this.props.getStocks(res);
                this.props.setDate();
            });

        setTimeout(()=>{
            this.props.navigation.navigate('App');
        },4000);
    };

    render = () => {
        return (
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize: 30}}>WELCOME</Text>
                <ActivityIndicator color="#f58820" size="large" style={{marginTop: 25}}/>
            </View>
        )
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getStocks: (data) => {dispatch(getStocks(data))},
        setDate: () => {dispatch(setDate())}
    }
}

export default connect(null, mapDispatchToProps)(Splash);
