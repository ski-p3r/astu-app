import Card from "@/components/LocationCard";
import LocationModal from "@/components/LocationModal";
import Food from "@/data/food";
import { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView className="bg-white h-full w-full">
      <Text className="text-[#0C1D47] font-bold text-3xl my-3 w-full text-center">
        Food Zones
      </Text>
      <View className="h-full w-full flex-col gap-2">
        {Food.map((foods, index) => (
          <View
            className="flex-row w-full px-2 items-center justify-between"
            key={index}
          >
            {foods.map((food, indexs) => (
              <Pressable key={indexs} onPress={() => setModalVisible(true)}>
                <Card
                  data={{
                    name: food.name,
                    location: food.location,
                    description: food.description,
                    source: food.source,
                  }}
                />
              </Pressable>
            ))}
          </View>
        ))}
      </View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <LocationModal />
      </Modal>
    </SafeAreaView>
  );
}
