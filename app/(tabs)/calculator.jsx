import CourseCard from "@/components/CourseCard";
import icons from "@/constants/icons";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Calculator() {
  return (
    <SafeAreaView className="flex-1 w-full bg-white pt-3">
      <StatusBar hidden />
      <ScrollView className="max-h-96 gap-1 w-full px-4">
        <View className="flex-1 bg-[#0C1D47] rounded-xl shadow-2xl ">
          <View className="flex-row justify-between px-6 mt-3 ">
            <View className="flex-row gap-3 items-center">
              <Text className="text-white text-xl">Course:</Text>
              <Text className="text-white text-2xl font-extrabold">
                Courses
              </Text>
            </View>
            <Image
              source={icons.close}
              resizeMode="contain"
              className="w-6 h-6 relative left-3"
            />
          </View>
          <View className="flex-row justify-between px-6 mt-3 mb-4">
            <View className="flex-row items-center rounded-full px-2 py-0.5 pt-0 bg-[#0f42c3]">
              <Text className="text-white text-lg">Courses</Text>
              <Image
                source={icons.arrowDown}
                resizeMode="contain"
                className="w-3 h-3 ml-3 relative top-0.5"
              />
            </View>
            <Text className="text-white text-lg">Courses</Text>
          </View>
        </View>
        <View className="flex-1 bg-[#0C1D47] rounded-xl shadow-2xl ">
          <View className="flex-row justify-between px-6 mt-3 ">
            <View className="flex-row gap-3 items-center">
              <Text className="text-white text-xl">Course:</Text>
              <Text className="text-white text-2xl font-extrabold">
                Courses
              </Text>
            </View>
            <Image
              source={icons.close}
              resizeMode="contain"
              className="w-6 h-6 relative left-3"
            />
          </View>
          <View className="flex-row justify-between px-6 mt-3 mb-4">
            <View className="flex-row items-center rounded-full px-2 py-0.5 pt-0 bg-[#0f42c3]">
              <Text className="text-white text-lg">Courses</Text>
              <Image
                source={icons.arrowDown}
                resizeMode="contain"
                className="w-3 h-3 ml-3 relative top-0.5"
              />
            </View>
            <Text className="text-white text-lg">Courses</Text>
          </View>
        </View>
        <View className="flex-1 bg-[#0C1D47] rounded-xl shadow-2xl ">
          <View className="flex-row justify-between px-6 mt-3 ">
            <View className="flex-row gap-3 items-center">
              <Text className="text-white text-xl">Course:</Text>
              <Text className="text-white text-2xl font-extrabold">
                Courses
              </Text>
            </View>
            <Image
              source={icons.close}
              resizeMode="contain"
              className="w-6 h-6 relative left-3"
            />
          </View>
          <View className="flex-row justify-between px-6 mt-3 mb-4">
            <View className="flex-row items-center rounded-full px-2 py-0.5 pt-0 bg-[#0f42c3]">
              <Text className="text-white text-lg">Courses</Text>
              <Image
                source={icons.arrowDown}
                resizeMode="contain"
                className="w-3 h-3 ml-3 relative top-0.5"
              />
            </View>
            <Text className="text-white text-lg">Courses</Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            borderStyle: "dashed",
            padding: 16,
          }}
          className="rounded-xl"
        >
          <Text style={{ fontSize: 16, color: "black" }}>
            This is a box with a dashed border.
          </Text>
        </View>
      </ScrollView>
      {/* <View className="flex-1 items-center bg-[#2d4759] border border-dashed border-white rounded-lg h-20">
        <Text className="text-white text-3xl">Calculator</Text>
      </View> */}
    </SafeAreaView>
  );
}
