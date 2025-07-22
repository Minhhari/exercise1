// redux/quizSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      question: "Inside which HTML element do we put the JavaScript?",
      options: ["javascript", "scripting", "script", "js"],
      correctAnswer: "script",
      selectedAnswer: null,
    },
    {
      id: 2,
      question: "What are variables used for in JavaScript Programs?",
      options: [
        "Storing numbers, dates, or other values",
        "Varying randomly",
        "Causing high-school algebra flashbacks",
        "None of these",
      ],
      correctAnswer: "Storing numbers, dates, or other values",
      selectedAnswer: null,
    },
    {
      id: 3,
      question: "Which of the following can't be done with client-side JavaScript?",
      options: [
        "Validating a form",
        "Sending a form's contents by email",
      ],
      correctAnswer: "Sending a form's contents by email",
      selectedAnswer: null,
    }
  ],
  currentQuestionIndex: 0,
  showResult: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectAnswer(state, action) {
      const { questionId, answer } = action.payload;
      const question = state.questions.find(q => q.id === questionId);
      if (question) {
        question.selectedAnswer = answer;
      }
    },
    nextQuestion(state) {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex++;
      }
    },
    prevQuestion(state) {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
      }
    },
    goToQuestion(state, action) {
      const index = action.payload;
      if (index >= 0 && index < state.questions.length) {
        state.currentQuestionIndex = index;
      }
    },
    submitQuiz(state) {
      state.showResult = true;
    },
    resetQuiz(state) {
      state.currentQuestionIndex = 0;
      state.showResult = false;
      state.questions.forEach(q => {
        q.selectedAnswer = null;
      });
    },
    addQuestion(state, action) {
      state.questions.push(action.payload);
    },
  },
});

export const {
  selectAnswer,
  nextQuestion,
  prevQuestion,
  goToQuestion,
  submitQuiz,
  resetQuiz,
  addQuestion,
} = quizSlice.actions;

export default quizSlice.reducer;