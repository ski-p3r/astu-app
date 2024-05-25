import React, { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "@/components/LocationCard";
import LocationModal from "@/components/LocationModal";
import Food from "@/data/food";

export default function Discover() {
  const [modalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = useState("");

  return (
    <SafeAreaView className="bg-white h-full w-full">
      <Text>Discover</Text>
      <View className="h-full w-full flex-col gap-2">
        {Food.map((foods, index) => (
          <View
            className="flex-row w-full px-2 items-center justify-between"
            key={index}
          >
            {foods.map((food, indexs) => (
              <Pressable
                key={indexs}
                onPress={() => {
                  setModalVisible(true);
                  setLocation(food.gps);
                }}
              >
                <Card
                  data={{
                    name: food.name,
                    location: food.location,
                    description: food.description,
                    source: food.source,
                    gps: food.gps,
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
        onRequestClose={() => {
          setModalVisible(false);
          setLocation("");
        }}
      >
        {location && <LocationModal gps={location} />}
      </Modal>
    </SafeAreaView>
  );
}
