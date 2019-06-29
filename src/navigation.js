import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import StockForm from './screens/StockForm';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
    },
    StockForm: {
       screen: StockForm,
    }
},
    {
        initialRouteName: 'Home',
    })

const Navigator = createAppContainer(AppNavigator);

export default Navigator;
