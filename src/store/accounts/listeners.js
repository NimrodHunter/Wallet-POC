import { types } from './types';
import { Contract, providers, utils } from 'ethers';
import { contract, provider } from '../../blockchain';
import { setBalance, addTokens } from './actions';
import DemoContract from '../../abi';

export const listeners = {
  [types.ADD_ACCOUNT]: (action, dispatch, state) => {
    provider.on(action.account.address, (balance) => {
      const eth = utils.formatEther(balance.toString());

      dispatch(setBalance(eth, action.account.address));
    });

    contract.balanceOf(action.account.address)
      .then((tokens) => dispatch(addTokens(tokens, action.account.address)));
  }
};