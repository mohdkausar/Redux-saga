import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
import App from './components';
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   reducer,
   applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

class AppCode extends React.Component {

   render() {
      return(
         <Provider store={store}>
            <App />
         </Provider>    
      )
   }
}

export default AppCode
