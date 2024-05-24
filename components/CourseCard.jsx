import { Text, View } from "react-native";

export default function CourseCard(course) {
  return (
    <View className="flex-1 items-center w-full bg-[#2d4759] border border-dotted rounded-lg h-20">
      <Text className="text-white text-3xl">{course.name}</Text>
    </View>
  );
}
