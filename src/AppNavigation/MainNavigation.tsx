import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from "../DashboardScreen/DashboardScreen";
import WorkoutScreen from "../WorkoutScreen/WorkoutScreen";
import ProgressScreen from "../ProgressScreen/ProgressScreen";
import { useColorMode } from "native-base";
import { DARK_MODE_COLOR, LIGHT_MODE_COLOR } from "../style-constants";
import SettingsScreen from "../SettingsScreen/SettingsScreen";

function MainNavigation() {
    const Tab = createBottomTabNavigator();

    const { colorMode, } = useColorMode();

    const backgroundColor = colorMode === 'dark' ? DARK_MODE_COLOR: LIGHT_MODE_COLOR;
    const tintColor = colorMode === 'dark' ? LIGHT_MODE_COLOR : DARK_MODE_COLOR;

    const tabOptions = {
        tabBarShowLabel: false,
        tabBarActiveTintColor: tintColor,
        tabBarStyle: { backgroundColor: backgroundColor },
    }

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ ...tabOptions }} />
            <Tab.Screen name="Workout" component={WorkoutScreen} options={{ ...tabOptions }} />
            <Tab.Screen name="Progress" component={ProgressScreen} options={{ ...tabOptions }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{ ...tabOptions }} />
        </Tab.Navigator>
    );
}

export default MainNavigation;
