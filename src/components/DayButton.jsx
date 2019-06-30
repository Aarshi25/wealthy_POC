import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View} from 'react-native';

interface IProps {
    day: number,
    prices?: number,
    handleClick: () => void
}

const DayButton = (props: IProps) => {
    return(
        <View>

            <TouchableOpacity onPress={props.handleClick}>
                <View style={styles.day}>
                    <Text>{props.day}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.handleClick}>
                <Text style={{margin: 5}}>{props.prices ? `${props.prices} $` : 'Add'}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    day: {
        borderColor: 'grey',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'cyan',
        margin: 5,
        borderWidth: 2,
        width: 30,
        height: 30
    }
});

export default DayButton;
