import { Image, Text, View } from "react-native";

export default function Icon({ icon, color, name, focused }) {
  return (
    <View className="flex items-center justify-center gap-0.5">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
}
