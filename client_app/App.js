import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './src/modules';
import StackNavigatior from './src/navigator/MainNavigation';

const store = createStore(
  rootReducer, 
  composeWithDevTools()
);

const App = () => {
  return(
    <Provider store={ store }>
      <StackNavigatior />
    </Provider>
  );
};

export default App;