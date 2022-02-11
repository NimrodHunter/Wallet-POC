import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import { addAccount, setBalance, addTokens, subTokens, finishBuying, finishTransfering } from './store/accounts/actions';
import { store } from './store';
import { contract } from './blockchain';

import {AccountListPage} from './AccountListPage';
import {AccountPage} from './AccountPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'accounts',
      accounts: []
    };
  }

  componentDidMount() {

    contract.ontransfer = (from, to, value) => {
      console.log(from, to, value);
      store.dispatch(addTokens(value, to));
      store.dispatch(subTokens(value, from));
      store.dispatch(finishBuying(from));
      store.dispatch(finishBuying(to));
      store.dispatch(finishTransfering(from));
      store.dispatch(finishTransfering(to));
    };
  }
  
  render() {

    return (  
      <Container>
        <Menu>
          <Menu.Item
            name= 'Home'
          >
          <Link to='/'>
            Home
          </Link>
          </Menu.Item>
        </Menu>  
        <Route
          exact
            path="/"
            component={AccountListPage}/>

          <Route
            exact
            path="/accounts/:id"
            component={AccountPage}/>
      </Container>
    );
  }
}

export default App;