import { ADD_USER, DELETE_USER, FETCH_USER, GET_USER_DATA, UPDATE_USER, SEARCH_USER } from "../action-types/user"

const initialState = {
    users: [],
    user : {},
    query : ""
}


export const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_USER: {
            return {
                //...spread operator allow us to quickly copy all parts of an exsisting array or object into another array
                ...state,
                users: [ ...action.payload]
            }
        }
        case ADD_USER: {

            return {
                ...state,
                users: [...state.users, ...action.payload]
            }
        }
        case UPDATE_USER : {
            return{
                ...state,
                users : [...state.users, ...action.payload]
            }
        }
        case DELETE_USER : {
            const data = action.payload;
            const updateList = state.users.filter((item)=>item.id !== data.id)
            return{
                ...state,
                users : updateList
            }
        }
        case GET_USER_DATA :{
            return{
                ...state, user : action.payload
            }
        }
        case SEARCH_USER : {
            const query = action.payload;
            return{
                ...state,
                query : action.payload
            }
        }
        default:
            return state;
    }


}





