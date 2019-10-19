'use strict'
import React from 'react';
import CounterContainer from './counterContainer'
import { Provider } from 'react-redux'
import { createStore } from "redux";
import { hot } from 'react-hot-loader'

const counter = (state = 0, action) => {
       switch (action.type) {
              case 'INCREMENT': return state + 1
              case 'DECREMENT': return state - 1
       }
       return state
}

const store = createStore(counter)

const App = () => (
       <Provider store={store}>
         <CounterContainer/>
       </Provider>
)

export default hot(module)(App)

