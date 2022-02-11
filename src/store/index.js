import { createStore, combineReducers, applyMiddleware } from 'redux';
import { accounts } from './accounts';
import { listeners } from './accounts/listeners';
import { accountForm } from './accountForm';
import { loadState, saveState } from './localStorage';

const listenerMiddleware = (...listeners) => store => next => action => {
  const preActionState = store.getState();

  next(action);

  setTimeout(() => {
    listeners.forEach((listener) => {
      if (listener[action.type]) {
        listener[action.type](action, store.dispatch, preActionState);
      }
    });
  });
}

const persistedState = loadState();

const store = createStore(
  combineReducers({
    accounts,
    accountForm,
  }),
  persistedState,
  applyMiddleware(listenerMiddleware(listeners))
);

store.subscribe(() => {
  saveState({
    accounts: store.getState().accounts
  });
});

export { store };