import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React from "react";
import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/context/BlogContext";
import BlogDetailsScreen from "./src/screens/BlogDetailScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
const navigator = createStackNavigator({
  Index: IndexScreen,
  Details: BlogDetailsScreen,
  Create: CreateScreen,
  Edit: EditScreen
  }, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

const App = createAppContainer(navigator)
export default () => {
  return(
  <BlogProvider>
      <App />
  </BlogProvider>
  )
};