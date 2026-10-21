// Each theme has 10 questions, ordered from easy to hard.
// "correct" is the position (starting at 0) of the right answer in the answers list.
//questions[theme]
const questions = {
  Animals: [
    {
      number: 1,
      question: "Which animal says \"meow\"?",
      answers: ["Dog", "Cat", "Cow", "Duck"],
      correct: 1
    },
    {
      number: 2,
      question: "Which animal is known as the king of the jungle?",
      answers: ["Tiger", "Elephant", "Lion", "Bear"],
      correct: 2
    },
    {
      number: 3,
      question: "How many legs does a spider have?",
      answers: ["6", "8", "10", "4"],
      correct: 1
    },
    {
      number: 4,
      question: "What is the largest animal in the world?",
      answers: ["Elephant", "Blue whale", "Giraffe", "Shark"],
      correct: 1
    },
    {
      number: 5,
      question: "A baby kangaroo is called a...?",
      answers: ["Cub", "Pup", "Joey", "Kit"],
      correct: 2
    },
    {
      number: 6,
      question: "What is a group of lions called?",
      answers: ["Pack", "Herd", "Pride", "Flock"],
      correct: 2
    },
    {
      number: 7,
      question: "Which mammal can truly fly?",
      answers: ["Flying squirrel", "Bat", "Sugar glider", "Ostrich"],
      correct: 1
    },
    {
      number: 8,
      question: "How many hearts does an octopus have?",
      answers: ["1", "2", "3", "8"],
      correct: 2
    },
    {
      number: 9,
      question: "Which of these mammals lays eggs?",
      answers: ["Dolphin", "Beaver", "Bat", "Platypus"],
      correct: 3
    },
    {
      number: 10,
      question: "How long is an elephant's pregnancy, the longest of any land mammal?",
      answers: ["About 9 months", "About 12 months", "About 22 months", "About 36 months"],
      correct: 2
    }
  ],

  Math: [
    {
      number: 1,
      question: "What is 2 + 2?",
      answers: ["3", "4", "5", "6"],
      correct: 1
    },
    {
      number: 2,
      question: "What is 7 × 6?",
      answers: ["42", "36", "48", "49"],
      correct: 0
    },
    {
      number: 3,
      question: "What is 15 − 8?",
      answers: ["6", "7", "8", "9"],
      correct: 1
    },
    {
      number: 4,
      question: "What is 144 ÷ 12?",
      answers: ["10", "11", "12", "14"],
      correct: 2
    },
    {
      number: 5,
      question: "What is 25% of 80?",
      answers: ["15", "20", "25", "40"],
      correct: 1
    },
    {
      number: 6,
      question: "Solve for x: 3x + 5 = 20",
      answers: ["3", "4", "6", "5"],
      correct: 3
    },
    {
      number: 7,
      question: "What is the square root of 169?",
      answers: ["11", "12", "13", "14"],
      correct: 2
    },
    {
      number: 8,
      question: "What is 2 to the power of 10?",
      answers: ["512", "1000", "1024", "2048"],
      correct: 2
    },
    {
      number: 9,
      question: "What is the sum of the interior angles of a hexagon?",
      answers: ["540°", "720°", "900°", "360°"],
      correct: 1
    },
    {
      number: 10,
      question: "What is the sum of all whole numbers from 1 to 100?",
      answers: ["5000", "5050", "5100", "10100"],
      correct: 1
    }
  ],

  Food: [
    {
      number: 1,
      question: "Which fruit is yellow and loved by monkeys?",
      answers: ["Apple", "Banana", "Grape", "Cherry"],
      correct: 1
    },
    {
      number: 2,
      question: "Which of these is a vegetable?",
      answers: ["Carrot", "Banana", "Apple", "Grape"],
      correct: 0
    },
    {
      number: 3,
      question: "What is the main ingredient of bread?",
      answers: ["Rice", "Sugar", "Flour", "Corn"],
      correct: 2
    },
    {
      number: 4,
      question: "Which country is pizza originally from?",
      answers: ["France", "Greece", "Italy", "Spain"],
      correct: 2
    },
    {
      number: 5,
      question: "Which country is sushi originally from?",
      answers: ["China", "Korea", "Japan", "Thailand"],
      correct: 2
    },
    {
      number: 6,
      question: "Which ingredient is guacamole made from?",
      answers: ["Mango", "Pear", "Kiwi", "Avocado"],
      correct: 3
    },
    {
      number: 7,
      question: "What is tofu made from?",
      answers: ["Rice", "Wheat", "Chickpeas", "Soybeans"],
      correct: 3
    },
    {
      number: 8,
      question: "Which cheese is traditionally used in a Greek salad?",
      answers: ["Cheddar", "Feta", "Brie", "Gouda"],
      correct: 1
    },
    {
      number: 9,
      question: "Which spice is the most expensive in the world by weight?",
      answers: ["Vanilla", "Cinnamon", "Saffron", "Cardamom"],
      correct: 2
    },
    {
      number: 10,
      question: "Which country is the largest coffee producer in the world?",
      answers: ["Colombia", "Vietnam", "Brazil", "Ethiopia"],
      correct: 2
    }
  ]
};