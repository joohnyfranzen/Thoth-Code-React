import { store } from "../..";

export default function Logout() {
    store.dispatch({type: 'SET_TOKEN_OUT'})
    localStorage.removeItem('token')
    return(
        <h1>Logget out</h1>
    )
}