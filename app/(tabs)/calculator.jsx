import CourseCard from "@/components/CourseCard";
import icons from "@/constants/icons";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Calculator() {
  return (
    <SafeAreaView className="flex-1 w-full bg-[#2d4759]">
      <StatusBar hidden />
      <ScrollView className="max-h-40 gap-1 w-full px-4">
        <View className="flex-1 border border-dashed border-white rounded-lg">
          <View className="flex-row justify-between px-6 mt-3">
            <View className="flex-row gap-3 items-center">
              <Text className="text-white text-xl">Course:</Text>
              <Text className="text-white text-2xl font-extrabold">
                Courses
              </Text>
            </View>
            <Image
              source={icons.close}
              resizeMode="contain"
              className="w-8 h-8"
            />
          </View>
          <View className="flex-row justify-between px-6 mt-3 mb-4">
            <View className="flex-row items-center rounded-full px-3 py-1 bg-slate-800">
              <Text className="text-white text-lg">Courses</Text>
              <Image
                source={icons.arrowDown}
                resizeMode="contain"
                className="w-3 h-3 ml-4 relative top-0.5"
              />
            </View>
            <Text className="text-white text-lg">Courses</Text>
          </View>
        </View>
      </ScrollView>
      <View className="flex-1 items-center bg-[#2d4759] border border-dashed border-white rounded-lg h-20">
        <Text className="text-white text-3xl">Calculator</Text>
      </View>
    </SafeAreaView>
  );
}
