import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Tv from "../Screens/Tv";
import Search from "../Screens/Search";

const Nav = createBottomTabNavigator();

const Stack = () => {
  return (
    <Nav.Navigator>
      <Nav.Screen name="Home" component={Home} />
      <Nav.Screen name="Tv" component={Tv} />
      <Nav.Screen name="Search" component={Search} />
    </Nav.Navigator>
  );
};

export default Stack;
