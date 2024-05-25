import icons from "@/constants/icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, Modal, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Calculator() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = React.useState("");
  return (
    <SafeAreaView className="flex-1 w-full bg-white pt-3 items-center ">
      <StatusBar hidden />
      <Text className="text-3xl font-bold mb-3 text-[#0C1D47]">
        GPA Calculator
      </Text>
      <ScrollView className="max-h-[67%] gap-1 w-full px-4">
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
            <View className="flex-row items-center">
              <Text className="text-white text-[16px]">Grade: </Text>
              <View className="flex-row items-center bg-[#084eff] px-3 pb-0.5 rounded-full">
                <Text className="text-white text-lg font-bold">A+</Text>
                <Image
                  source={icons.arrowDown}
                  resizeMode="contain"
                  className="w-4 h-4 relative top-0.5 ml-4"
                />
              </View>
            </View>
            <View className="flex-row items-center">
              <Text className="text-white text-[16px]">Credit Hour:</Text>
              <Text className="text-white text-lg ml-2 font-extrabold">4</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <Pressable className="w-full px-14" onPress={() => setModalVisible(true)}>
        <View
          style={{
            borderWidth: 1.5,
            borderColor: "#0C1D47",
            borderStyle: "dashed",
            padding: 16,
          }}
          className="rounded-xl flex-col items-center justify-center bg-white shadow-2xl mt-5 "
        >
          <Image source={icons.add} resizeMode="contain" className="w-8 h-8" />
          <Text className="text-[#0C1D47] font-medium text-lg">Add Course</Text>
        </View>
      </Pressable>
      <Text className="text-[#fff] font-medium text-2xl bg-[#0C1D47] py-3 mt-5 px-6 rounded-full">
        Your GPA is 3.5
      </Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="w-full h-72 bg-blue-600 shadow-2xl p-6 rounded-lg absolute bottom-0"></View>
      </Modal>
      {/* <View className="flex-1 items-center bg-[#2d4759] border border-dashed border-white rounded-lg h-20">
        <Text className="text-white text-3xl">Calculator</Text>
      </View> */}
    </SafeAreaView>
  );
}
