import React, { Component } from 'react';
import { Form, Header } from 'semantic-ui-react';
import ContractAbi from './abi';
import { Interface } from 'ethers';

class TransferTokensForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      amount: 0,
    };
    this.contract = new Interface(ContractAbi.abi);
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.address, this.state.amount);
  }

  handleChange = (e, {name, value}) => {
    this.setState({[name]: value});
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Header as="h3">Transfer Tokens</Header>
        <Form.Field>
          <label htmlFor="address">Address</label>
          <Form.Input placeholder="Account address" name="address" value={this.state.address} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label htmlFor="amount">Amount</label>
          <Form.Input name="amount" value={this.state.amount} onChange={this.handleChange} />
        </Form.Field>
        <Form.Button loading={this.props.loading} disabled={this.props.loading} primary>Transfer</Form.Button>
      </Form>
    );
  }
}

export { TransferTokensForm };
