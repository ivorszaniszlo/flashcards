import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: "topics",
    initialState: {},
    reducers: {
      addTopic: (state, { payload: { id, name, icon } }) => {
        state[id] = { id: id, name: name, icon: icon, quizIds: [] };
      },
      addQuizId: (state, { payload: { quizId, topicId } }) => {
        state[topicId].quizIds.push(quizId);
      }
    }
  });

  export const topicsReducer = topicsSlice.reducer;
  export const { addTopic, addQuizId } = topicsSlice.actions;
  
  export const selectTopics = (state) => state.topics;
