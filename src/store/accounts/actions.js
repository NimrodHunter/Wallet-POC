import { types } from './types';

const addAccount = (account) => ({
  type: types.ADD_ACCOUNT,
  account
});

const setBalance = (balance, address) => ({
  type: types.SET_BALANCE,
  address,
  balance,
});

const addTokens = (tokens, address) => ({
  type: types.ADD_TOKENS,
  address,
  tokens
});

const subTokens = (tokens, address) => ({
  type: types.SUB_TOKENS,
  address,
  tokens,
});

const startBuying = (id) => ({
  type: types.START_BUYING,
  id
});

const finishBuying = (address) => ({
  type: types.FINISH_BUYING,
  address
});

const startTransfering = (id) => ({
  type: types.START_TRANSFERING,
  id
});

const finishTransfering = (address) => ({
  type: types.FINISH_TRANSFERING,
  address
});

export {
  addAccount,
  setBalance,
  addTokens,
  subTokens,
  startBuying,
  finishBuying,
  startTransfering,
  finishTransfering,
};
