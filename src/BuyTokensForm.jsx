import React, { Component } from 'react';
import { Form, Header } from 'semantic-ui-react';

class BuyTokensForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    };
  }

  handleInputChange = (e, { name, value }) => {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.amount);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Header as="h3">Buy Tokens</Header>
        <Form.Field>
          <label>Amount</label>
          <Form.Input
            placeholder="Amount to Buy"
            name="amount"
            value={this.state.amount}
            onChange={this.handleInputChange}
            />
        </Form.Field>
        <Form.Button primary loading={this.props.loading} disabled={this.props.loading}>Buy</Form.Button>
      </Form>
    );
  }
}

export { BuyTokensForm };
