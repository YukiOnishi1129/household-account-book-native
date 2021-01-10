import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, FontAwesome } from "@expo/vector-icons";
/* screen */
import { TopScreen } from "../components/screens/TopScreen";
import { LoginScreen } from "../components/screens/LoginScreen";
import { RegisterScreen } from "../components/screens/RegisterScreen";

const Tab = createBottomTabNavigator();

export const BeforeLoginTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#900",
        inactiveBackgroundColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Top"
        component={TopScreen}
        options={{
          tabBarLabel: "TOP",
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="SignUp"
        component={RegisterScreen}
        options={{
          tabBarLabel: "SIGNUP",
          tabBarIcon: ({ color, size }) => {
            return <Feather name="user" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: "LOGIN",
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="sign-out" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
