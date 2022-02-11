import { types } from './types';

const defaultState = {
  value: '',
  loading: false,
};

const accountForm = (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_VALUE:
      return {
        ...state,
        value: action.value
      };
    case types.START_LOADING:
      return {
        ...state,
        loading: action.loading
      };
    case types.FINISH_LOADING:
      return {
        ...state,
        loading: action.loading
      };
    default:
      return state;
  }
};

export { accountForm };
