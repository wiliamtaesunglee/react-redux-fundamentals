'use strict'

import React from 'react';
import CounterContainer from './counterContainer'
import { createStore } from "redux";

const counter = (state = 0, action) => {
       switch (action.type) {
              case 'INCREMENT': return state + 1
              case 'DECREMENT': return state - 1
       }
       return state
}

const store = createStore(counter)

const App = () => (
       <CounterContainer store={store}/>
)

export default App

