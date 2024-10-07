import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from '../reducers';
// import rootSagas from '../sagas';

// Middleware binding function
const bindMiddleware = middleware => applyMiddleware(...middleware);

/**
 * Redux Persist Configuration
 */
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['topic'],
  version: 1,
  stateReconciler: autoMergeLevel2,
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Saga middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// Store configuration with Redux DevTools support in development mode
const store = createStore(persistedReducer, bindMiddleware(middlewares));

// Persistor instance
const persistor = persistStore(store);

// Run root sagas
// sagaMiddleware.run(rootSagas);

export {store, persistor};
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
