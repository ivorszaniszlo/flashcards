import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, { payload: { id, name, topicId, cardIds } }) => {
          state[id] = { id: id, name, topicId, cardIds };
        }
      }
});

export const quizzesReducer = quizzesSlice.reducer;
export const { addQuiz } = quizzesSlice.actions;

export const selectQuizzes = (state) => state.quizzes;
