import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import AddScreen from "./src/screens/AddScreen";
import ShowScreen from "./src/screens/ShowScreen";
import { Provider as HousesProvider } from "./src/context/HousesContext";

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Add: AddScreen
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <HousesProvider>
      <App />
    </HousesProvider>
  );
};
