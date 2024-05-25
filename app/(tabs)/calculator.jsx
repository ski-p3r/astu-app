import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, Modal, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SelectList } from "react-native-dropdown-select-list";
import Courses from "@/data/data";
import { BlurView } from "expo-blur";
import { Grade } from "@/data/Grade";
import icons from "@/constants/icons";
import useCourseStore from "@/constants/store";

export default function Calculator() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState();
  const [selectedCreditHours, setSelectedCreditHours] = useState();
  const courses = useCourseStore((state) => state.courses);

  const handleCourseSelect = (key) => {
    const course = Courses.find((c) => c.value === key);
    if (course && !courses.find((c) => c.value === course.value)) {
      setSelectedCourse(course.value);
      setSelectedCreditHours(course.creditHours);
    }
  };

  const handleGradeSelect = (key) => {
    const grade = Grade.find((g) => g.key === key); // Fix: Use Grade instead of grade
    if (grade) {
      setSelectedGrade(grade.value);
    }
  };

  const handleAdd = () => {
    if (selectedCourse && selectedGrade && selectedCreditHours) {
      const grade = Grade.find((g) => g.value === selectedGrade);
      useCourseStore.getState().addCourse({
        name: selectedCourse,
        grade: grade.credit,
        gradeStr: selectedGrade,
        creditHours: selectedCreditHours,
      });

      setSelectedCourse(null);
      setSelectedGrade(null);
      setSelectedCreditHours(null);
      setModalVisible(false);
    }
    courses.map((course) => console.log(course));
  };

  const handleDelete = (courseName) => {
    useCourseStore.getState().deleteCourse(courseName);
  };

  const [totalGrade, setTotalGrade] = useState(0);
  useEffect(() => {
    calculateGPA();
  }, [courses, selectedGrade, selectedCreditHours, selectedCourse]);

  const calculateGPA = () => {
    let totalCreditHours = 0;
    let totalGradePoints = 0;

    courses.forEach((course) => {
      const creditHours = parseFloat(course.creditHours);
      const grade = parseFloat(course.grade);

      if (!isNaN(creditHours) && !isNaN(grade)) {
        totalCreditHours += creditHours;
        totalGradePoints += creditHours * grade;
      } else {
        console.error(
          `Invalid credit hours or grade for course: ${course.value}`
        );
      }
    });

    if (totalCreditHours === 0) {
      return 0;
    }
    console.log(totalCreditHours);
    console.log(totalGradePoints);
    console.log(totalGradePoints / totalCreditHours);
    const gg = (totalGradePoints / totalCreditHours).toFixed(2);

    setTotalGrade(gg);
  };

  return (
    <SafeAreaView className="flex-1 w-full bg-white pt-3 items-center">
      <StatusBar hidden />
      <Text className="text-3xl font-bold mb-3 text-[#0C1D47]">
        GPA Calculator
      </Text>
      <ScrollView className="max-h-[67%] gap-1 w-full px-4">
        {courses.map((course, index) => (
          <View
            className="flex-1 bg-[#0C1D47] rounded-xl shadow-2xl "
            key={index}
          >
            <View className="flex-row justify-between px-6 mt-3 ">
              <View className="flex-row gap-3 items-center">
                <Text className="text-white text-xl">Course:</Text>
                <Text className="text-white text-2xl font-extrabold">
                  {course.name}
                </Text>
              </View>
              <Pressable onPress={() => handleDelete(course.name)}>
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
                    {course.gradeStr}
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
          <Text className="text-[#0C1D47] font-medium text-lg">Add Course</Text>
        </View>
      </Pressable>
      <Text className="text-[#fff] font-medium text-2xl bg-[#0C1D47] py-3 mt-5 px-6 rounded-full">
        Your GPA is {totalGrade}
      </Text>
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
              Add Course
            </Text>
            <View className="w-full mt-36 px-8">
              <Pressable
                className="bg-[#084eff] rounded-xl py-2 w-full"
                onPress={handleAdd}
              >
                <Text className="text-white font-medium w-full text-lg text-center">
                  Add
                </Text>
              </Pressable>
              <Pressable
                className="bg-[#860f0f] rounded-xl py-2 w-full mt-4"
                onPress={() => setModalVisible(false)}
              >
                <Text className="text-white font-medium w-full text-lg text-center">
                  Cancel
                </Text>
              </Pressable>
            </View>
            <View className="absolute top-[150px] w-full">
              <SelectList
                setSelected={handleGradeSelect}
                placeholder="Select Grade"
                data={Grade}
                save="name"
                boxStyles={{ backgroundColor: "white", borderColor: "#ECECEC" }}
                dropdownStyles={{
                  borderColor: "#ECECEC",
                  backgroundColor: "white",
                }}
              />
            </View>
            <View className="my-3 absolute top-[80px] w-full">
              <SelectList
                setSelected={handleCourseSelect}
                data={Courses}
                placeholder="Select Course"
                save="value"
                boxStyles={{ backgroundColor: "white", borderColor: "#ECECEC" }}
                dropdownStyles={{
                  borderColor: "#ECECEC",
                  backgroundColor: "white",
                }}
              />
            </View>
          </View>
        </BlurView>
      </Modal>
    </SafeAreaView>
  );
}
