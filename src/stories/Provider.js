import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { browserHistory } from 'react-router';
import configureStore from '../store/configureStore';

const store = configureStore(browserHistory, {});

export default function Provider({ story }) {
  return (
    <ReduxProvider store={store}>
      {story}
    </ReduxProvider>
  );
};
