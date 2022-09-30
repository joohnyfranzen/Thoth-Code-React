export default (state = { value: localStorage.getItem('token') }, action ) => {

    switch (action.type) {
        case 'SET_TOKEN':
            return state = { value : action.value };
        case 'SET_TOKEN_OUT':
            return state = {value : ''}
        default: 
            return state
    }

}