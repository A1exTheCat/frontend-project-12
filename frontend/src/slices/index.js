import { configureStore } from '@reduxjs/toolkit';
import channelsReducer from './channelsSlice.js';
import messagesReducer from './messagesSlice.js';
import modalReducer from './modalSlice.js';
import currentChannelIdReducer from './currentChannelIdSlice.js';

export default configureStore({
  reducer: {
    channelsReducer,
    messagesReducer,
    currentChannelIdReducer,
    modalReducer,
  },
});
