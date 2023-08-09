import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";

const navigation = createStackNavigator({
    Search: SearchScreen,
  },
  {
    defaultRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Food Searcher'
    }
  }
);

export default createAppContainer(navigation);