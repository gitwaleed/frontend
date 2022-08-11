import { ADD_USER, DELETE_USER, FETCH_USER, GET_USER_DATA, SEARCH_USER, UPDATE_USER } from "../action-types/user"

export const addUser = (data) => {
    return {
        type: ADD_USER,
        payload: data
    }
}
export const fetchUser = (data) => {
    return {
        type: FETCH_USER,
        payload: data
    }
}
export const getUser = (data) =>{
    return {
        type : GET_USER_DATA,
        payload : data
    }
}
export const deleteUser = (data) =>{
    return {
        type : DELETE_USER,
        payload : data
    }
}
export const updateUser = (data) =>{
    return {
        type : UPDATE_USER,
        paylaod : data
    }
}
export const searchUser = (query) =>{
    return {
        type : SEARCH_USER ,
        payload : query
    }
}
