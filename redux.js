const redux = require('redux');

const initalState ={
    counter: 0
}



const reducer = (state = initalState, action) =>{
    
    if(action.type == 'ADD'){
        return {
            counter: state.counter + 1
        }
    }
    if(action.type == 'NUM'){
        return {
            counter: state.counter + action.value
        }
    }

    return state;
}


const store = redux.createStore(reducer)

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch({type: 'ADD'});
store.dispatch({type: 'NUM', value: 10});
