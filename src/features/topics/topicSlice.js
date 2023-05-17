import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {topics: {}},
  reducers: {
        addTopic: (state, action) => {
          const {topicId, name, icon} = action.payload;
            state.topics[topicId] = {
              id: topicId,
              name: name,
              icon,
              quizIds: []
          };
          return state;
        },
    }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;

