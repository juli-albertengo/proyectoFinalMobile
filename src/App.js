import React from 'react';
import AppNavigation from './navigation/index';
import { Provider } from 'react-redux';
import store from './store/index';
import {init} from './db';


init()
  .then(() => {
  console.log('DB initialized');
})
  .catch(err => {
  console.log('DB initialization failed', err);
});


const App = () => {

  return (
    <Provider store={store}>
      <AppNavigation/>
    </Provider>
  );
};

export default App;
