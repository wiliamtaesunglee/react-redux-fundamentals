import React from 'react'
import { connect } from 'react-redux'

const Counter = ({ counter, increment, decrement }) => (

    <div>
        <h1>{counter}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>

)

const mapStateToProps = state => ({
        counter: state
})

const mapDispatchToProps = dispatch => ({
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'})
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)