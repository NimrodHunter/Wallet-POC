import { types } from './types';
import { utils } from 'ethers';

const defaultAccountState = {
  tokens: 0,
  balance: 0,
  isBuying: false,
  isTransfering: false,
};

const account = (state = defaultAccountState, action) => {
  let currentTokens;
  let tokens;
  switch (action.type) {
    case types.ADD_ACCOUNT:
      return {
        ...state,
        ...action.account,
        address: action.account.address.toLowerCase(),
      };
    case types.SET_BALANCE:
      return {
        ...state,
        balance: action.balance
      };
    case types.ADD_TOKENS:
      currentTokens = utils.bigNumberify(state.tokens);
      tokens = currentTokens.add(action.tokens).toString();

      return {
        ...state,
        tokens,
      };
    case types.SUB_TOKENS:
      currentTokens = utils.bigNumberify(state.tokens);
      tokens = currentTokens.sub(action.tokens).toString();

      return {
        ...state,
        tokens,
      };
    case types.START_BUYING:
      return {
        ...state,
        isBuying: true,
      };
    case types.FINISH_BUYING:
      return {
        ...state,
        isBuying: false,
      };
    case types.START_TRANSFERING:
      return {
        ...state,
        isTransfering: true,
      };
    case types.FINISH_TRANSFERING:
      return {
        ...state,
        isTransfering: false,
      };
    default:
      return state;
  }
};

const accounts = (state = [], action) => {
  switch (action.type) {
    case types.ADD_ACCOUNT:
      return [...state, account(undefined, action)];
    case types.SET_BALANCE:
      return state.map(acc => acc.address === action.address.toLowerCase() ? account(acc, action) : acc);
    case types.ADD_TOKENS:
      return state.map(acc => acc.address === action.address.toLowerCase() ? account(acc, action) : acc);
    case types.SUB_TOKENS:
      return state.map(acc => acc.address === action.address.toLowerCase() ? account(acc, action) : acc);
    case types.START_BUYING:
      return state.map(acc => acc.id === action.id ? account(acc, action) : acc);
    case types.FINISH_BUYING:
      return state.map(acc => acc.address === action.address.toLowerCase() ? account(acc, action) : acc);
    case types.START_TRANSFERING:
      return state.map(acc => acc.id === action.id ? account(acc, action) : acc);
    case types.FINISH_TRANSFERING:
      return state.map(acc => acc.address === action.address.toLowerCase() ? account(acc, action) : acc);
    default:
      return state;
  }
};

export { accounts };
