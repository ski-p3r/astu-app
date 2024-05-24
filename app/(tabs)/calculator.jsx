import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Calculator() {
  return (
    <View className="flex-1 items-center h-full w-full bg-[#2d4759]">
      <StatusBar hidden />
    </View>
  );
}
