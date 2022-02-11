import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { AccountInfo } from './AccountInfo';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  accounts: state.accounts
});

const AccountsList = ({ accounts })  => {
  return (
    <div>
      <Divider/>
        {accounts.length ?
          accounts.map((account) => (
            <div key={account.id}>
              <Link to={`/accounts/${account.id}`}>{account.id}</Link>
              <AccountInfo account={account}/>
              <Divider/>
            </div>
          )) :
          <h2>No accounts</h2>
        }
    </div>
  );
};

const Accounts = connect(
  mapStateToProps,
  null
)(AccountsList)

export { Accounts };