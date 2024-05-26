import Card from "@/components/LocationCard";
import LocationModal from "@/components/LocationModal";
import Food from "@/data/food";
import { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = useState("");
  return (
    <SafeAreaView className="bg-white h-full w-full">
      <Text className="text-[#0C1D47] font-bold text-3xl my-3 w-full text-center">
        Food Zones
      </Text>
      <View className="h-full w-full flex-col gap-2">
        {Food.map((food, index) => (
          <View
            className="flex-row w-full px-2 items-center justify-between"
            key={index}
          >
            {food.map((fd, indexs) => (
              <Pressable
                key={indexs}
                onPress={() => {
                  setModalVisible(true);
                  setLocation(fd.gps);
                }}
              >
                <Card
                  data={{
                    name: fd.name,
                    location: fd.location,
                    description: fd.description,
                    source: fd.source,
                    gps: fd.gps,
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
        {location && <LocationModal gps={location} />}
      </Modal>
    </SafeAreaView>
  );
}
