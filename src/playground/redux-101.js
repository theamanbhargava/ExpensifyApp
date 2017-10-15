import {createStore} from 'redux';

const defaultState = {
    count : 0
};

const incrementCount = ({incrementBy = 1} = {}) => ({
    type : 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type : 'DECREMENT',
    decrementBy
});

const setCount = ({count = 1} = {}) => ({
    type : 'SET',
    count
});

const resetCount = ({} = {}) => ({
    type : 'RESET'
});

const countReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'INCREMENT' : {
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count : state.count + incrementBy
            }
        }
        case 'DECREMENT' : {
            const decrementBy = typeof action.decrementBy=== 'number' ? action.decrementBy : 1;
            return {
                count : state.count - decrementBy
            }
        }
        case 'SET' : {
            return {
                count : action.count
            }
        }
        case 'RESET' : {
            return {
                count : 0
            }
        }
        default: {
            return state;
        }
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState().count);
});

/*store.dispatch({
    type : 'INCREMENT',
    incrementBy : 5
});*/

store.dispatch(incrementCount({incrementBy : 5}));

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy : 10}));

store.dispatch(setCount({count : 101}));
