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
