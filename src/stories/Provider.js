import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import {configureStore} from '../store';
import initialState from '../store/initialState'


const store = configureStore(initialState);

export default function Provider({ story }) {
  return (
    <ReduxProvider store={store}>
      {story}
    </ReduxProvider>
  );
};
