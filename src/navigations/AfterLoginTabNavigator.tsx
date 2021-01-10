import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, FontAwesome } from "@expo/vector-icons";
/* screen */
import { CalendarScreen } from "../components/screens/CalendarScreen";
import { GraphScreen } from "../components/screens/GraphScreen";

const Tab = createBottomTabNavigator();

export const AfterLoginTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#900",
        inactiveBackgroundColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Home"
        component={CalendarScreen}
        options={{
          tabBarLabel: "HOME",
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Graph"
        component={GraphScreen}
        options={{
          tabBarLabel: "GRAPH",
          tabBarIcon: ({ color, size }) => {
            return <Feather name="user" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
