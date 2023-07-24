import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import HomeWork2 from "./src/screens/Homework2";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColourScreen from "./src/screens/ColourScreen";
import PaletteScreen from "./src/screens/PaletteScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    HomeworkComp: HomeWork2,
    List: ListScreen,
    Images: ImageScreen,
    Counter: CounterScreen,
    Colour: ColourScreen,
    Palette: PaletteScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "New app",
    },
  }
);

export default createAppContainer(navigator);
