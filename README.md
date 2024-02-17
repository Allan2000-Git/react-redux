# React Redux
- Uses Context API behind the scenes

3 parts:
- application state: state {}
- state update logic: function reducer() {}
- method to notify the state change: subscribe()

## Real World Use Case - Bank
- Bank: a store
- Cashier: reducer
- Customer: action
  - {type:'deposit', payload:500}
  - {type:'withdraw', payload:100}
  - {type:'checkBalance'}

 ## dispatch, getState, subscribe
 - getState(): get the current state
 - dispatch(action): call the reducer and update the state
 - subscribe(function() {}): this is called whenever there is a change in the state or whenever dispatch is called
