import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColourScreen from "./src/screens/ColourScreen";
import PaletteScreen from "./src/screens/PaletteScreen";
import PaletteScreenWithReducer from "./src/screens/PaletteScreenWithReducer";
import CounterWithReducer from "./src/screens/CounterWithReducerScreen";
import NameShowerScreen from "./src/screens/NameShowerScreen";
import BoxScreen from "./src/screens/BoxScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Images: ImageScreen,
    Counter: CounterScreen,
    Colour: ColourScreen,
    Palette: PaletteScreen,
    Reducer: PaletteScreenWithReducer,
    CounterReducer: CounterWithReducer,
    NameShower: NameShowerScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "New app",
    },
  }
);

export default createAppContainer(navigator);
