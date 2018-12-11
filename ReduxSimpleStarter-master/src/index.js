import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
class Hello extends react.Component {
  render() { return <div>Hello</div>}
}

class GoodBye extends react.Component {
  render() { return <div>GoodBye!</div>}
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
       <div>
           <Route path="/hello" Component={Hello} />
           <Route path="/GoodBye" Component={GoodBye} />
       </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
