import React, { useState } from "react";
import { Modal, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "@/components/LocationCard";
import LocationModal from "@/components/LocationModal";
import Locations from "@/data/locations";

export default function Discover() {
  const [modalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = useState("");

  return (
    <SafeAreaView className="bg-white h-full w-full">
      <Text className="text-[#0C1D47] font-bold text-3xl my-3 w-full text-center">
        Discover
      </Text>
      <ScrollView className="h-full w-full flex-col gap-2">
        {Locations.map((locations, index) => (
          <View
            className="flex-row w-full px-2 items-center justify-between"
            key={index}
          >
            {locations.map((location, indexs) => (
              <Pressable
                key={indexs}
                onPress={() => {
                  setModalVisible(true);
                  setLocation(location.gps);
                }}
              >
                <Card
                  data={{
                    name: location.name,
                    location: location.location,
                    description: location.description,
                    source: location.source,
                    gps: location.gps,
                  }}
                />
              </Pressable>
            ))}
          </View>
        ))}
        <View className="w-full h-3" />
      </ScrollView>
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
