import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from "../DashboardScreen/DashboardScreen";
import WorkoutScreen from "../WorkoutScreen/WorkoutScreen";
import ProgressScreen from "../ProgressScreen/ProgressScreen";
import { useColorMode } from "native-base";
import { DARK_MODE_COLOR, LIGHT_MODE_COLOR } from "../style-constants";
import SettingsScreen from "../SettingsScreen/SettingsScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function MainNavigation() {
    const Tab = createBottomTabNavigator();

    const { colorMode, } = useColorMode();

    const backgroundColor = colorMode === 'dark' ? DARK_MODE_COLOR: LIGHT_MODE_COLOR;
    const tintColor = colorMode === 'dark' ? LIGHT_MODE_COLOR : DARK_MODE_COLOR;

    const tabOptions = {
        tabBarActiveTintColor: tintColor,
        tabBarStyle: { backgroundColor: backgroundColor, borderTopColor: backgroundColor },
    }

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    ...tabOptions,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="view-dashboard" size={20} color={color} />
                    )
            }}
            />
            <Tab.Screen
                name="Workout"
                component={WorkoutScreen}
                options={{
                    ...tabOptions,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="dumbbell" size={20} color={color} />
                    )
            }}
            />
            <Tab.Screen
                name="Progress"
                component={ProgressScreen}
                options={{
                    ...tabOptions,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="book-open" size={20} color={color} />
                    )
            }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    ...tabOptions,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cog" size={20} color={color} />
                    )
            }}
            />
        </Tab.Navigator>
    );
}

export default MainNavigation;
