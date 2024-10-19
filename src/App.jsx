import React, { useState } from 'react';
import { motion } from 'framer-motion';

const questions = [
  {
    question: "Full Form Of HTML?",
    options: ["Hyper Text Markup Language", "Hyper Text Marking Language", "Hyper Top Marking Language", "High Top Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Full Form Of CSS?",
    options: ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Cascading System Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<css>", "<style>", "<script>", "<link>"],
    answer: "<style>"
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["color", "bg-color", "background-style", "background-color"],
    answer: "background-color"
  },
  {
    question: "Which programming language is used for web development?",
    options: ["JavaScript", "Python", "C++", "Java"],
    answer: "JavaScript"
  },
  {
    question: "Which company developed the React.js library?",
    options: ["Google", "Microsoft", "Facebook", "Apple"],
    answer: "Facebook"
  },
  {
    question: "Which HTML element is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<hyper>"],
    answer: "<a>"
  },
  {
    question: "What does SQL stand for?",
    options: ["Simple Query Language", "Sequential Query Language", "Standard Query Language", "Structured Query Language"],
    answer: "Structured Query Language"
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["Django", "Laravel", "React", "Flask"],
    answer: "React"
  },
  {
    question: "Which CSS property is used to set the text color?",
    options: ["text-color", "color", "font-color", "background-color"],
    answer: "color"
  },
  {
    question: "What is the latest version of HTML?",
    options: ["HTML4", "HTML5", "HTML6", "HTML3"],
    answer: "HTML5"
  },
  {
    question: "Which property is used to align text in CSS?",
    options: ["text-decoration", "align-items", "justify-content", "text-align"],
    answer: "text-align"
  },
  {
    question: "Which JavaScript method is used to write HTML output?",
    options: ["document.write()", "console.log()", "alert()", "window.print()"],
    answer: "document.write()"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Apple"],
    answer: "Netscape"
  },
  {
    question: "What does API stand for?",
    options: ["Application Programming Interface", "Application Program Interface", "Application Programming Interaction", "Application Performance Interface"],
    answer: "Application Programming Interface"
  },
  {
    question: "What does DOM stand for?",
    options: ["Document Oriented Model", "Data Object Model", "Display Object Management", "Document Object Model"],
    answer: "Document Object Model"
  },
  {
    question: "Which HTML tag is used to define a list item?",
    options: ["<ul>", "<li>", "<ol>", "<list>"],
    answer: "<li>"
  },
  {
    question: "Which CSS property controls the size of the text?",
    options: ["text-size", "font-weight", "font-size", "text-style"],
    answer: "font-size"
  },
  {
    question: "Which HTML element is used for inserting a line break?",
    options: ["<br>", "<hr>", "<break>", "<lb>"],
    answer: "<br>"
  },
  {
    question: "Which of the following is a JavaScript library for building user interfaces?",
    options: ["Node.js", "Angular", "Vue.js", "React"],
    answer: "React"
  }
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
      <motion.div
        className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        {showScore ? (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-blue-900"
          >
            You scored {score} out of {questions.length}
          </motion.div>
        ) : (
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-5">
              Quiz App
            </h1>
            <div className="text-lg font-semibold text-gray-700 mb-4">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            <motion.div
              key={currentQuestionIndex}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-2xl font-bold mb-6">
                Q{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <motion.button
                    key={index}
                    className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                    onClick={() => handleAnswerOptionClick(option)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
