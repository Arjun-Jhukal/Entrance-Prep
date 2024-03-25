const data = [
  // Physics
  {
    question: "What is the SI unit of force?",
    isMcq: true,
    haveMultipleAnswer: false,
    options: ["Newton", "Joule", "Watt", "Volt"],
    actualAnswer: ["Newton"],
  },
  {
    question: "What is the formula for acceleration?",
    isMcq: false,
    haveMultipleAnswer: false,
    actualAnswer: ["Acceleration = Change in Velocity / Time"],
  },
  {
    question: "What is the law of conservation of energy?",
    isMcq: false,
    haveMultipleAnswer: false,
    actualAnswer: ["Energy cannot be created or destroyed, only transformed from one form to another."],
  },
  // Add more Physics questions here...

  // Chemistry
  {
    question: "What is the atomic number of Carbon?",
    isMcq: true,
    haveMultipleAnswer: false,
    options: ["4", "6", "8", "12"],
    actualAnswer: ["6"],
  },
  {
    question: "What is the chemical symbol for Oxygen?",
    isMcq: false,
    haveMultipleAnswer: false,
    actualAnswer: ["O"],
  },
  {
    question: "What is Avogadro's number?",
    isMcq: false,
    haveMultipleAnswer: false,
    actualAnswer: ["6.022 x 10^23"],
  },
  // Add more Chemistry questions here...

  // Biology
  {
    question: "What is the powerhouse of the cell?",
    isMcq: true,
    haveMultipleAnswer: false,
    options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
    actualAnswer: ["Mitochondria"],
  },
  {
    question: "What is the largest organ in the human body?",
    isMcq: false,
    haveMultipleAnswer: false,
    actualAnswer: ["Skin"],
  },
  {
    question: "What is the function of the red blood cells?",
    isMcq: false,
    haveMultipleAnswer: false,
    actualAnswer: ["Transport oxygen to body tissues."],
  },
  // Add more Biology questions here...

  // Mathematics
  {
    question: "What is the value of pi (π)?",
    isMcq: true,
    haveMultipleAnswer: false,
    options: ["3.14159", "2.71828", "1.61803", "4.66920"],
    actualAnswer: ["3.14159"],
  },
  {
    question: "What is the derivative of sin(x)?",
    isMcq: false,
    haveMultipleAnswer: false,
    actualAnswer: ["cos(x)"],
  },
  {
    question: "What is the area of a triangle with base 5 and height 8?",
    isMcq: false,
    haveMultipleAnswer: false,
    actualAnswer: ["Area = (1/2) * base * height = 20 square units"],
  },
  // Add more Mathematics questions here...

  // English
  {
    question: "What is a metaphor?",
    isMcq: true,
    haveMultipleAnswer: false,
    options: ["A figure of speech", "A type of dance", "A cooking technique", "A type of currency"],
    actualAnswer: ["A figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable."],
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    isMcq: false,
    haveMultipleAnswer: false,
    actualAnswer: ["Harper Lee"],
  },
  {
    question: "What is the past participle of the verb 'eat'?",
    isMcq: false,
    haveMultipleAnswer: false,
    actualAnswer: ["eaten"],
  },
  // Add more English questions here...

  // Computer Science
  {
    question: "What is a CPU?",
    isMcq: true,
    haveMultipleAnswer: false,
    options: ["Central Processing Unit", "Control Panel Utility", "Computer Power Unit", "Brain of Computer"],
    actualAnswer: ["Central Processing Unit", "Brain of Computer"],
  },
  {
    question: "What is an IP address?",
    isMcq: false,
    haveMultipleAnswer: false,
    actualAnswer: [
      "A unique string of numbers separated by periods that identifies each computer using the Internet Protocol to communicate over a network.",
    ],
  },
  {
    question: "What does HTML stand for?",
    isMcq: false,
    haveMultipleAnswer: false,
    actualAnswer: ["HyperText Markup Language"],
  },
  // Add more Computer Science questions here...
];

export default data;
