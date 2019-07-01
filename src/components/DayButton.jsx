import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View} from 'react-native';

interface IProps {
    day: number,
    prices?: number,
    navigation: any,
}

const DayButton = (props: IProps) => {
    const handleClick = () => {
        props.navigation.navigate('StockForm',{date:props.day,stock: props.prices});
    }
    return(
        <View>

            <TouchableOpacity onPress={handleClick}>
                <View style={styles.day}>
                    <Text>{props.day}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClick}>
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
