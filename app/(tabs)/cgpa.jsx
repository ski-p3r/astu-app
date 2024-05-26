import icons from "@/constants/icons";
import { BlurView } from "expo-blur";
import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cgpa() {
  const [modalVisible, setModalVisible] = useState(false);
  const [courses, setCourses] = useState([]);
  const [gpa, setGpa] = useState("");
  const [creditHours, setCreditHours] = useState("");
  const [cgpa, setCgpa] = useState("");

  const addCourse = () => {
    if (gpa !== "" && creditHours !== "") {
      setCourses([
        ...courses,
        {
          id: Date.now(),
          gpa: parseFloat(gpa),
          creditHours: parseInt(creditHours),
        },
      ]);
      setGpa("");
      setCreditHours("");
      setModalVisible(false);
    } else {
      alert("Please enter both GPA and Credit Hours");
    }
  };

  const handleDelete = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  useEffect(() => {
    calculateCGPA();
  }, [courses]);

  const calculateCGPA = () => {
    const totalCreditHours = courses.reduce(
      (acc, course) => acc + course.creditHours,
      0
    );
    const totalGradePoints = courses.reduce(
      (acc, course) => acc + course.gpa * course.creditHours,
      0
    );
    if (totalCreditHours > 0) {
      const cgpaValue = totalGradePoints / totalCreditHours;
      setCgpa(cgpaValue.toFixed(2));
    } else {
      setCgpa("");
    }
  };

  return (
    <SafeAreaView className="bg-white h-full w-full  pt-3 items-center">
      <Text className="text-3xl font-bold mb-3 text-[#0C1D47]">
        CGPA Calculator
      </Text>
      <ScrollView className="max-h-[67%] gap-1 w-full px-4">
        {courses.map((course, index) => (
          <View
            className="flex-1 bg-[#0C1D47] rounded-xl shadow-2xl "
            key={index}
          >
            <View className="flex-row justify-between px-6 mt-3 ">
              <View className="flex-row gap-3 items-center">
                <Text className="text-white text-2xl font-extrabold">
                  Semester Grade
                </Text>
              </View>
              <Pressable onPress={() => handleDelete(course.id)}>
                <Image
                  source={icons.close}
                  resizeMode="contain"
                  className="w-6 h-6 relative left-3"
                />
              </Pressable>
            </View>

            <View className="flex-row justify-between px-6 mt-3 mb-4">
              <View className="flex-row items-center">
                <Text className="text-white text-[16px]">Grade: </Text>

                <View className="flex-row items-center bg-[#084eff] px-3 pb-0.5 rounded-full">
                  <Text className="text-white text-lg font-bold">
                    {course.gpa}
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center">
                <Text className="text-white text-[16px]">Credit Hour:</Text>
                <Text className="text-white text-lg ml-2 font-extrabold">
                  {course.creditHours}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <Pressable className="w-full px-14" onPress={() => setModalVisible(true)}>
        <View
          style={{
            borderWidth: 1.5,
            borderColor: "#0C1D47",
            borderStyle: "dashed",
            padding: 16,
          }}
          className="rounded-xl flex-col items-center justify-center bg-white shadow-2xl mt-5"
        >
          <Image source={icons.add} resizeMode="contain" className="w-8 h-8" />
          <Text className="text-[#0C1D47] font-medium text-lg">
            Add Semister GPA
          </Text>
        </View>
      </Pressable>
      {cgpa && (
        <Text className="text-[#fff] font-medium text-2xl bg-[#0C1D47] py-3 mt-5 px-6 rounded-full">
          Your CGPA is {cgpa}
        </Text>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <BlurView
          intensity={900}
          className="bg-gray-900 w-full absolute bottom-[65px] pt-1 rounded-xl"
        >
          <View
            className="w-full  bg-white shadow-2xl p-6 rounded-t-2xl flex-col items-center pb-10 relative"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: -10 },
              shadowOpacity: 0.8,
              shadowRadius: 10,
              elevation: 20,
            }}
          >
            <Text className="w-full text-[#0C1D47] text-center text-2xl font-bold my-5">
              Add Semister GPA
            </Text>
            <TextInput
              placeholder="Enter GPA"
              keyboardType="numeric"
              value={gpa}
              onChangeText={(text) => setGpa(text)}
              className="bg-white rounded-xl px-5 py-2 w-full border border-gray-400 my-3"
            />
            <TextInput
              placeholder="Enter Credit Hours"
              keyboardType="numeric"
              value={creditHours}
              onChangeText={(text) => setCreditHours(text)}
              className="bg-white rounded-xl px-5 py-2 w-full border border-gray-400 mb-5"
            />
            <Pressable
              className="bg-[#084eff] rounded-xl py-2 w-full"
              onPress={addCourse}
            >
              <Text className="text-white font-medium w-full text-lg text-center">
                Add
              </Text>
            </Pressable>
            <Pressable
              className="bg-[#e4002b] rounded-xl py-2 w-full mt-4"
              onPress={() => setModalVisible(false)}
            >
              <Text className="text-white font-medium w-full text-lg text-center">
                Cancel
              </Text>
            </Pressable>
          </View>
        </BlurView>
      </Modal>
    </SafeAreaView>
  );
}
