import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './src/modules';
import { saveUser } from './src/modules/user';
import StackNavigatior from './src/navigator/MainNavigation';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

async function loadUser() {
  try {
    const user = JSON.parse(await AsyncStorage.getItem('user'));
    
    console.log(user);
    if(!user) {
      return;
    }

    store.dispatch(saveUser(user));

    const { userId } = user;
    
    store.dispatch(check(userId));
  } catch(e) {
    console.log(e);
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

const App = () => {
  return(
    <Provider store={ store }>
      <StackNavigatior />
    </Provider>
  );
};

export default App;