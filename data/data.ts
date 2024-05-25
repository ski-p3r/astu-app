export interface Course {
  key: number;
  value: string;
  description: string;
  creditHours: number;
}

const Courses: Course[] = [
  {
    key: 1,
    value: "C++",
    description: "C++ is a powerful and expressive programming language.",
    creditHours: 3,
  },
  {
    key: 2,
    value: "Java",
    description: "Java is a powerful and expressive programming language.",
    creditHours: 3,
  },
  {
    key: 3,
    value: "Python",
    description: "Python is a powerful and expressive programming language.",
    creditHours: 4,
  },
  {
    key: 4,
    value: "JavaScript",
    description:
      "JavaScript is a powerful and expressive programming language.",
    creditHours: 3,
  },
  {
    key: 5,
    value: "C#",
    description: "C# is a powerful and expressive programming language.",
    creditHours: 3,
  },
];

export default Courses;
