import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './screens/Home';
import StockForm from './screens/StockForm';
import Splash from './screens/Splash';

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

const splash = createSwitchNavigator({
    Splash: Splash,
    App: AppNavigator,
},
    {
        initialRouteName: 'Splash'
    })

const Navigator = createAppContainer(splash);

export default Navigator;
