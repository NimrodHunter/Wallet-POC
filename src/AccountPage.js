import React, { Component } from 'react';
import { Header, Segment, Grid } from 'semantic-ui-react';
import abi from './abi';
import {Interface} from 'ethers';
import { AccountInfo } from './AccountInfo';
import { BuyTokensForm } from './BuyTokensForm';
import { TransferTokensForm } from './TransferTokensForm';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { store } from './store';
import { startBuying, startTransfering, finishBuying, finishTransfering } from './store/accounts/actions';

const mapStateToProps = ({ accounts }, { match }) => ({
  account: accounts.find(acc => acc.id === match.params.id)
});

const mapDispatchToProps = (dispatch) => {
  const contract = new Interface(abi.abi);

  const baseTx = ({ address }) => ({
    from: address,
    to: '0xF315780BE9754866f9C62B609143c9eCD5a2b574'
  });

  const sendTransaction = ({ id }, transaction) => {
    return axios.post('https://rciskru6de.execute-api.us-east-1.amazonaws.com/dev/transaction/sign', {
      keyId: id,
      transaction
    });
  };

  return {
    buyTokens(account, amount) {
      return (amount) => {
        const tx = {
          ...baseTx(account),
          value: amount,
        };
        
        store.dispatch(startBuying(account.id));
        sendTransaction(account, tx)
          .then((res) => {
          })
          .catch((err) => store.dispatch(finishBuying(account.address)));
      }
    },

    transferTokens(account, to, amount) {
      return (to, amount) => {
        const tx = {
          ...baseTx(account),
          data: contract.functions.transfer(to, amount).data
        };
        
        store.dispatch(startTransfering(account.id));
        sendTransaction(account, tx)
          .then((res) => {
          })
          .catch((err) => store.dispatch(finishBuying(account.address)));
      }
    }
  };
};

const Account = ({ account, buyTokens, transferTokens }) => {
  if (!account) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <Segment basic>
        <Header as='h1'>{account.id}</Header>
        <AccountInfo account={account}/>
      </Segment>
      <Segment basic>
        <Grid>
          <Grid.Column computer={8} tablet={16} mobile={16}>
            <BuyTokensForm loading={account.isBuying} onSubmit={buyTokens(account)}/>
          </Grid.Column>
          <Grid.Column computer={8} tablet={16} mobile={16}>
            <TransferTokensForm loading={account.isTransfering} onSubmit={transferTokens(account)}/>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
};

const AccountPage = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Account)
);

export { AccountPage };
