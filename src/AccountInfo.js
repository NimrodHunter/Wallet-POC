import React, { Component } from 'react';
import { List, Icon } from 'semantic-ui-react';
import {utils} from 'ethers';

class AccountInfo extends Component {
  render() {
    const { account } = this.props;
    return (
      <List>
        <List.Item>Address: <a target="_blank" href={`https://ropsten.etherscan.io/address/${account.address}`}>{account.address}</a></List.Item>
        <List.Item>Tokens: {account.tokens} {account.isBuying || account.isTransfering ? <Icon loading name='spinner' /> : ''}</List.Item>
        <List.Item>Balance: {account.balance}</List.Item>
      </List>
    );
  }
}

export { AccountInfo };
