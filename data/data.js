const Courses = [
  {
    value: "General Chemistry CHEM1101",
    creditHours: 3,
    key: "course_0",
  },
  {
    value: "Applied Mathematics - I MATH1101",
    creditHours: 4,
    key: "course_1",
  },
  {
    value: "General Physics Phys1101",
    creditHours: 3,
    key: "course_2",
  },
  {
    value: "Physical Fitness and Conditioning I SpSc1011",
    creditHours: 0,
    key: "course_3",
  },
  {
    value: "Communicative English  EnLa1001",
    creditHours: 3,
    key: "course_4",
  },
  {
    value: "Introduction to computing CSEg1101",
    creditHours: 3,
    key: "course_5",
  },
  {
    value: "Logic and Critical Thinking LART1002",
    creditHours: 3,
    key: "course_6",
  },
  {
    value: "Applied Mathematics II MATH1102",
    creditHours: 4,
    key: "course_7",
  },
  {
    value: "Introduction to Emerging Technology  CSEg1102",
    creditHours: 3,
    key: "course_8",
  },
  {
    value: "Physical Fitness and Conditioning II SpSC1012",
    creditHours: 0,
    key: "course_9",
  },
  {
    value: "Fundamental of Programming  CSEg1104",
    creditHours: 3,
    key: "course_10",
  },
  {
    value: "Basic Writing Skill EnLa1002",
    creditHours: 3,
    key: "course_11",
  },
  {
    value: "Enginering Drawing  Meng1032",
    creditHours: 3,
    key: "course_12",
  },
  {
    value: "Introduction to Civics and Ethics LART1001",
    creditHours: 3,
    key: "course_13",
  },
  {
    value: "Applied Mathematics III MATH2101",
    creditHours: 4,
    key: "course_14",
  },
  {
    value: "Electronic Circuit I ECE2101",
    creditHours: 4,
    key: "course_15",
  },
  {
    value: "Geography of Ethiopia and the Horn LART1004",
    creditHours: 3,
    key: "course_16",
  },
  {
    value: "Fundamentals of Electrical Engineering EPCE2101",
    creditHours: 4,
    key: "course_17",
  },
  {
    value: "Data Structures and Algorithms CSEg2101",
    creditHours: 3,
    key: "course_18",
  },
  {
    value: "General Psychology and Life Skills LART2002",
    creditHours: 3,
    key: "course_19",
  },
  {
    value: "Object Oriented Programming SEng2202",
    creditHours: 3,
    key: "course_20",
  },
  {
    value: "Discrete Mathematics for Computer Science SEng2102",
    creditHours: 3,
    key: "course_21",
  },
  {
    value: "Computer Architecture and Organization SEng2204",
    creditHours: 3,
    key: "course_22",
  },
  {
    value: "Fundamentals of Software Engineering SEng2206",
    creditHours: 3,
    key: "course_23",
  },
  {
    value: "Database Systems SEng2208",
    creditHours: 4,
    key: "course_24",
  },
  {
    value: "Digital Logic Design ECEG3141",
    creditHours: 4,
    key: "course_25",
  },
  {
    value: "Operating Systems SENG 2043",
    creditHours: 4,
    key: "course_26",
  },
  {
    value: "Software Requirements Engineering SEng3201",
    creditHours: 3,
    key: "course_27",
  },
  {
    value: "Formal Methods in Software Engineering SEng3203",
    creditHours: 3,
    key: "course_28",
  },
  {
    value: "Data Communication and Computer Networks SEng3205",
    creditHours: 4,
    key: "course_29",
  },
  {
    value: "Advanced Programming SEng3209",
    creditHours: 3,
    key: "course_30",
  },
  {
    value: "Engineering Web Based System  SEng3202",
    creditHours: 3,
    key: "course_31",
  },
  {
    value: "Software Architecture and Design SEng3204",
    creditHours: 3,
    key: "course_32",
  },
  {
    value: "Mobile Application Design and Development SEng3206",
    creditHours: 3,
    key: "course_33",
  },
  {
    value: "Programming under Unix/Linux Lab SEng3208",
    creditHours: 2,
    key: "course_34",
  },
  {
    value: "Implementation of  Modern Operating System SEng3304",
    creditHours: 4,
    key: "course_35",
  },
  {
    value: "Advanced Network CSEg5307",
    creditHours: 3,
    key: "course_36",
  },
  {
    value: "History of Ethiopian and the Horn LART1003",
    creditHours: 3,
    key: "course_37",
  },
  {
    value: "Software Testing and Quality Assurance  SEng4201",
    creditHours: 3,
    key: "course_38",
  },
  {
    value: "Software Evolution and Maintenance SEng4203",
    creditHours: 3,
    key: "course_39",
  },
  {
    value: "Computer Systems Security SEng4205",
    creditHours: 3,
    key: "course_40",
  },
  {
    value: "Introduction to Systems Engineering SEng4303",
    creditHours: 3,
    key: "course_41",
  },
  {
    value: "Distributed Software Systems SEng4305",
    creditHours: 3,
    key: "course_42",
  },
  {
    value: "Probability and Random Processes ECEg4102",
    creditHours: 3,
    key: "course_43",
  },
  {
    value: "Software Process and Project Management SEng4204",
    creditHours: 3,
    key: "course_44",
  },
  {
    value: "Engineering Research and Development methodology SEng4206",
    creditHours: 2,
    key: "course_45",
  },
  {
    value: "Introduction to Artificial Intelligence SEng4208",
    creditHours: 3,
    key: "course_46",
  },
  {
    value: "Human Computer Interaction  SEng4304",
    creditHours: 3,
    key: "course_47",
  },
  {
    value: "Blockchain and Cryptocurrency SEng4306",
    creditHours: 3,
    key: "course_48",
  },
  {
    value: "Information Storage and Retrieval SEng3301",
    creditHours: 3,
    key: "course_49",
  },
  {
    value: "Computer Graphics  CSEg3301",
    creditHours: 3,
    key: "course_50",
  },
  {
    value: "Formal Language and Automata Theory CSEg4203",
    creditHours: 3,
    key: "course_51",
  },
  {
    value: "Discrete Mathematics for Computer Science CSEg2210",
    creditHours: 3,
    key: "course_52",
  },
  {
    value: "Electronics Circuit I ECEg2201",
    creditHours: 4,
    key: "course_53",
  },
  {
    value: "Digital Logic Design ECEg3201",
    creditHours: 4,
    key: "course_54",
  },
  {
    value: "Data Communication and Computer Networks CSEg3204",
    creditHours: 4,
    key: "course_55",
  },
  {
    value: "Computer Architecture and Organization CSEg3202",
    creditHours: 3,
    key: "course_56",
  },
  {
    value: "Introduction to Computer Gaming and Animation  SEng4307",
    creditHours: 3,
    key: "course_57",
  },
  {
    value: "Embedded System and Robotic Control SEng4302",
    creditHours: 3,
    key: "course_58",
  },
  {
    value: "Fundamental of Cloud and Edge Computing  SEng4308",
    creditHours: 3,
    key: "course_59",
  },
  {
    value: "Operating Systems CSEg4201",
    creditHours: 4,
    key: "course_60",
  },
];

export default Courses;
