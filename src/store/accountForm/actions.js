import { types } from './types';

const setValue = (value) => ({
  type: types.SET_VALUE,
  value,
});

const startLoading = () => ({
  type: types.START_LOADING,
  loading: true,
});

const finishLoading = () => ({
  type: types.FINISH_LOADING,
  loading: false,
});

export {
  setValue,
  startLoading,
  finishLoading,
};
