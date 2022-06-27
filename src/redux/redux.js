import {createStore} from 'redux'

const themeReduder=(state = {lightTheme: true}, action)=>{
    if (action.type === 'toggleTheme') {
        return {
            lightTheme: !state.lightTheme
        }
    }
    return state;
}

const store = createStore(themeReduder);

export default store;