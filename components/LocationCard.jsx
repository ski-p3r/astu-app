import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, Text, View } from "react-native";

export default function Card({ data }) {
  // Destructured props
  const img = images[data.source];
  return (
    <View
      className="w-[46vw] bg-white rounded-lg shadow-2xl p-2 mx-1"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -10 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 10,
      }}
    >
      <Image
        source={img}
        className="w-full h-28 rounded-t-md"
        resizeMode="cover"
      />
      <Text className="text-black text-lg font-medium">{data.name}</Text>
      <View className="flex-row items-center gap-1">
        <Image source={icons.location} className="w-4 h-4" />
        <Text className="text-black text-lg font-medium">{data.location}</Text>
      </View>
    </View>
  );
}
