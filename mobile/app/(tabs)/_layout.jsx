import { Redirect, Tabs } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { authStyles } from "../../assets/styles/auth.styles";
import { Image } from "expo-image";
import { COLORS } from "../../assets/constants/colors"
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  const { isSignedIn } = useAuth();

  const router = useRouter();
  if (!isSignedIn) return <Redirect href="/(auth)/sign-in" />;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textLight,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopColor: COLORS.border,
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          height: 80,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          title:"Recipes",
          tabBarIcon: ({color,size}) => <Ionicons name="restaurant" size={size} color={color} />
        }}
      />
      <Tabs.Screen 
        name="search"
        options={{
          title:"search",
          tabBarIcon: ({color,size}) => <Ionicons name="search" size={size} color={color} />
        }}
      />
      <Tabs.Screen 
        name="favorites"
        options={{
          title:"favorites",
          tabBarIcon: ({color,size}) => <Ionicons name="heart" size={size} color={color} />
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
