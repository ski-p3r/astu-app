import Card from "@/components/LocationCard";
import Food from "@/data/food";
import { Modal, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Discover() {
  return (
    <SafeAreaView className="bg-white h-full w-full">
      <Text>Discover</Text>
      <View className="h-full w-full flex-col gap-2">
        {Food.map((foods, index) => (
          <View className="flex-row w-full px-2 gap-2" key={index}>
            {foods.map((food, indexs) => (
              <Card
                key={indexs}
                data={{
                  name: food.name,
                  location: food.location,
                  description: food.description,
                  source: food.source,
                }}
              />
            ))}
          </View>
        ))}
      </View>
      <Modal></Modal>
    </SafeAreaView>
  );
}
