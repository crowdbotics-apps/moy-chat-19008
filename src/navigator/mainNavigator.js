import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings80933Navigator from '../features/Settings80933/navigator';
import Settings80916Navigator from '../features/Settings80916/navigator';
import Settings80882Navigator from '../features/Settings80882/navigator';
import Settings80865Navigator from '../features/Settings80865/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings80933: { screen: Settings80933Navigator },
Settings80916: { screen: Settings80916Navigator },
Settings80882: { screen: Settings80882Navigator },
Settings80865: { screen: Settings80865Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
