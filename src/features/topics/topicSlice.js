const options = {
    name: "topics",
    initialState: {
      topics: {}
    },
    reducers: {
      addTopic: (state, action) => {
        const { id, name, icon } = action.payload;
        state.topics[id] = {
          id: id,
          name: name,
          icon: icon,
          quizIds: []
        };
      }
    },
    // extra reducers here
  };
  
  export const topicsSlice = createSlice(options);
  export const selectTopics = (state) => state.topics.topics;
  // actions + reducers
  export const { addTopic } = topicsSlice.actions;
  export default topicsSlice.reducer;
  