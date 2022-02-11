import React, { Component } from 'react';
import { Form, Header,  Message } from 'semantic-ui-react'
import axios from 'axios';
import { connect } from 'react-redux';
import { setValue } from './store/accountForm/actions';

const mapStateToProps = (state) => ({
  value: state.accountForm.value,
  loading: state.accountForm.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(value) {
      dispatch(setValue(value));
    }
  };
};

const CreateAccountForm = ({ value, loading, handleChange, createAccount }) => (
  <Form onSubmit={createAccount}>
    <Header as='h2' icon='key' content='Create an Account'/>
    <Form.Field>
      <Form.Input label='User ID' value={value} type='string' onChange={(e, {value}) => handleChange(value)} />
    </Form.Field>
    <Form.Button loading={loading} primary content='Create Account' />
  </Form>
)

const AccountForm = connect(mapStateToProps, mapDispatchToProps)(CreateAccountForm);

export default AccountForm;