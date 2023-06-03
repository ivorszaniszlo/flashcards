import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
        addQuiz: (state, action) => {
            const { quizId, name, topicId, cardIds } = action.payload;
            state.quizzes[quizId] = {
                id: quizId,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            };
        }
    }
  // extra reducers here
};

export const quizzesSlice = createSlice(options);
export const selectQuizzes = (state) => state.quizzes.quizzes
// actions + reducers
export const { addQuiz } = quizzesSlice.actions;
export default quizzes.reducer;
