import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import DayButton from './DayButton';
import {getStocks} from "../actions";
import {DataService} from "../DataService";

interface IProps {
    row: number;
    prices?: number[];
    navigation: {
        navigate: (route: string) => void
    },
    getStocks: () => void
}

let days=[];
interface IState {
    days: number[];
}

class DaysRow extends Component<IProps,IState> {
    constructor(props){
        super(props);
        this.state = {
            days: [],
            stock1:[],
            stock2:[],
            stock3:[]
        }
    }

    componentDidMount(): void {
        console.log(this.props.stocks,"$$$$$$4")
        // let date = new Date().getDate();
        // let month = new Date().getMonth();
        // let today = `${date}/${month}`;
        // console.log(today,"******");
        if( this.props.row === 1) {
            let dayArray = [];
            let stockArray=[];
            for(let i=1; i<11; i++){
                dayArray.push(i);
                stockArray.push(this.props.stocks[i]);
            }
            this.setState({days: dayArray, stock1: stockArray});
        } else if ( this.props.row === 2) {
            let dayArray = [];
            let stockArray=[];
            for(let i=11; i<21; i++){
                dayArray.push(i);
                stockArray.push(this.props.stocks[i]);
            }
            this.setState({days: dayArray, stock2: stockArray});
        } else if ( this.props.row === 3) {
            let dayArray = [];
            let stockArray=[];
            for(let i=21; i<31; i++){
                dayArray.push(i);
                stockArray.push(this.props.stocks[i]);
            }
            this.setState({days: dayArray, stock3: stockArray});
        }
        console.log(this.state,"******8");
    }

    render () {
        return(
            <View style={styles.daysContainer}>
                {this.renderDays()}
            </View>
        )
    }

    renderDays = () => {
        days = this.state.days;
        return days.map((day) => {
            if(this.props.stocks) {
                    return (<DayButton handleClick={this.handleClick} day={day} prices={this.props.stocks[day-1]}/>);
            } else {
                return (<DayButton handleClick={this.handleClick} day={day}/>);
            }
        })
    }

    handleClick = () => {
        this.props.navigation.navigate('StockForm');
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getStocks: () => dispatch(getStocks()),
    }
};

const mapStateToProps = (state) => {
    return {
        stocks: state.stocks,
    }
}

const styles = StyleSheet.create({
    daysContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DaysRow);
