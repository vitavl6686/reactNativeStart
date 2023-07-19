import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import HomeWork2 from "./src/screens/Homework2";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    HomeworkComp: HomeWork2,
    List: ListScreen
  },
  {
    initialRouteName: "HomeworkComp",
    defaultNavigationOptions: {
      title: "New app",
    },
  }
);

export default createAppContainer(navigator);
