import { create } from "zustand";

const useCourseStore = create((set) => ({
  courses: [],
  addCourse: (course) =>
    set((state) => {
      const existingIndex = state.courses.findIndex(
        (c) => c.name === course.name
      );
      if (existingIndex !== -1) {
        const updatedCourses = [...state.courses];
        updatedCourses[existingIndex] = {
          ...updatedCourses[existingIndex],
          ...course,
        };
        return { courses: updatedCourses };
      } else {
        return { courses: [...state.courses, course] };
      }
    }),
  deleteCourse: (courseName) =>
    set((state) => ({
      courses: state.courses.filter((course) => course.name !== courseName),
    })),
}));

export default useCourseStore;
