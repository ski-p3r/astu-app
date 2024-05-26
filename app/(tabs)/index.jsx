import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
} from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar hidden={false} backgroundColor={"#0C1D47"} />
      <ScrollView className="flex-1 bg-white">
        <View className="items-center justify-center mt-10">
          <LottieView
            source={require("../../assets/lottie/Animation4.json")}
            autoPlay
            loop
            className="w-80 h-80"
          />
          <Text className="text-3xl font-bold text-center text-[#0C1D47]">
            Welcome to ASTU 🚀
          </Text>
        </View>
        <View className="px-6 py-6">
          <Text className="text-[18px] text-center font-medium text-[#0C1D47] ">
            Your ultimate tool for academic success, adventure discovery, and
            culinary exploration.
          </Text>
          <Text className="text-md text-center font-medium text-gray-500 mt-3">
            Whether you're looking to calculate your GPA, find exciting new
            locations, or explore the best food zones around, we've got you
            covered.
          </Text>
          <Text className="text-md text-center text-gray-500 font-medium mt-3">
            Navigate through our features and make the most out of your academic
            and social life.
          </Text>
        </View>

        <View className="px-6 py-4 mt-6">
          <TouchableOpacity
            className="bg-[#b6d2ff] rounded-lg p-4 mb-4"
            onPress={() => navigation.navigate("calculator")}
          >
            <Text className="text-[#0C1D47] text-lg text-center font-semibold">
              Calculate GPA 🎓
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-[#feeeda] rounded-lg p-4 mb-4"
            onPress={() => navigation.navigate("cgpa")}
          >
            <Text className="text-[#ff991d] text-lg text-center font-semibold">
              Calculate CGPA 📈
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-[#F1FAEE] rounded-lg p-4 mb-4"
            onPress={() => navigation.navigate("discover")}
          >
            <Text className="text-[#2A9D8F] text-lg text-center font-semibold">
              Discover Locations 🗺️
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-[#E0E0E0] rounded-lg p-4 mb-4"
            onPress={() => navigation.navigate("explore")}
          >
            <Text className="text-[#424242] text-lg text-center font-semibold">
              Explore Food Zones 🍔
            </Text>
          </TouchableOpacity>
        </View>

        <View className="px-6 py-4 mt-6">
          <Text className="text-lg font-bold text-[#0C1D47]">
            Why Choose ASTU?
          </Text>
          <Text className="text-md text-gray-500 mt-3 font-medium">
            - Easy-to-use GPA and CGPA calculators to keep track of your
            academic progress.
          </Text>
          <Text className="text-md text-gray-500 mt-3 font-medium">
            - Discover new and exciting locations near you with our advanced
            search features.
          </Text>
          <Text className="text-md text-gray-500 mt-3 font-medium">
            - Find the best food zones and enjoy delicious meals with reviews
            and ratings from other users.
          </Text>
        </View>

        <View className="px-6 py-4 mt-6">
          <Text className="text-lg font-bold text-[#0C1D47]">Get Started</Text>
          <Text className="text-md text-gray-500 mt-3 font-medium">
            Click on the buttons above to start exploring the features of ASTU.
            Make the most of your academic journey, discover new places, 🗺️ and
            enjoy great food along the way! 🍴
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
