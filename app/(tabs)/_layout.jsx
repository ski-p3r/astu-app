import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import Icon from "@/components/Icon";
import icons from "@/constants/icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: "#FFA001",
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#848488",
        tabBarShowLabel: false,
        tabBarStyle: {
          // backgroundColor: "#1F313D",
          backgroundColor: "#0C1D47",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 65,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="calculator"
        options={{
          title: "Calculator",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              icon={icons.calculator}
              color={color}
              name="Calculator"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cgpa"
        options={{
          title: "CGPA Calculator",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              icon={icons.cgpa}
              className={"w-10 h-10"}
              color={color}
              name="CGPA"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "discover",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              icon={icons.discover}
              color={color}
              name="Locations"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Food",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              icon={icons.food}
              color={color}
              name="Food Zone"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
