
const red = (state,action)=>{
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
              //creating a new array where the old data is kept along with the new data 
              //here data is object and spread operator is used 
            }
        default:
            return state
    }
}



export default red;