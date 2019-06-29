import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { IDates } from '../models';

class Calendar extends Component {
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    render = () => {
        return (
            <View>
               <Text>Calender</Text>
            </View>
        )
    }
}
