import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Accounts } from './Accounts';
import AccountForm from './AccountForm';
import { Segment, Grid } from 'semantic-ui-react';
import { addAccount } from './store/accounts/actions';
import { setValue, startLoading, finishLoading } from './store/accountForm/actions';
import axios from 'axios';
import { store } from './store';
import DemoContract from './abi';

const mapDispatchToProps = (dispatch) => {
  return {
    createAccount() {
      const { accountForm } = store.getState();
      dispatch(startLoading());
      axios.post('https://rciskru6de.execute-api.us-east-1.amazonaws.com/dev/account', { keyId: accountForm.value })
        .then((res) => {
          dispatch(addAccount({ id: accountForm.value , address: res.data.address }));
          dispatch(setValue(''));
          dispatch(finishLoading());
        })
        .catch(() => dispatch(finishLoading()))
    }
  }
};

const AccountList = ({accounts, createAccount}) => (
  <div>
    <Segment basic>
      <Grid>
        <Grid.Column computer={8} tablet={16} mobile={16}>
          <AccountForm createAccount={createAccount}/>
        </Grid.Column>
        <Grid.Column computer={8} tablet={16} mobile={16}>
          <Accounts />
        </Grid.Column>
      </Grid>
    </Segment>
  </div>
);

const AccountListPage = withRouter(connect(null, mapDispatchToProps)(AccountList));

export { AccountListPage };
