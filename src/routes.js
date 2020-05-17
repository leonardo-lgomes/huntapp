import { createStackNavigator } from 'react-navigation-stack'

import Main from './pages/main';
import Product from'./pages/product';

import { createAppContainer } from 'react-navigation';

const RootStack =  createStackNavigator({
    Main,
    Product,
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#DA552F"
        },
        headerTintColor: "#FFF"
    },
});

export default createAppContainer (RootStack);

/*
const route1 = createAppContainer (RootStack);

export default route1;
*/


