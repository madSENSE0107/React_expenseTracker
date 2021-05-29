export default(state,action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
              ...state,
              transactions: state.transactions.filter(t => t.id !== action.payload)
            }
            //spread operator : It is commonly used when you want to add a new item to a local data store.
            //here the new item is the whole new object filtered with the deleted item
        case 'ADD_TRANSACTION':
            return {
              ...state,
              transactions: [action.payload, ...state.transactions]
            }
        default:
            return state
    }
}