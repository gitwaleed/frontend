import { addUser, fetchUser, deleteUser, getUser, updateUser, searchUser } from "../redux/actions/user";
import { APIURL } from '../constants/constants';
export const fetchAllUsers = () => {
    return async function (dispatch) {
        try {
            const response = await fetch(`${APIURL}/api/post/fetchAllUsers`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const data = await response.json();
            dispatch(fetchUser(data));
            if (data.status === 400) {
                console.log("Invalid Registeration");
            } else {
                console.log('Successfull Registeration');

            }
        } catch (error) {

        }
    }
}
export const AddNewUser = (user) => {
    return async function (dispatch) {
        let formData = new FormData();
        const { firstName, lastName, email, password, cnic, image } = user;
        formData.append('firstName', firstName)
        formData.append('lastName', lastName)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('cnic', cnic)
        formData.append('testImage', image)
        try {
            const response = await fetch(`${APIURL}/api/post/register`, {
                method: "POST",
                body: formData

            })
            const data = await response.json();
            console.log(data);
            dispatch(addUser(data));
            if (data.status === 500) {
                console.log("Invalid Registeration");
            } else {
                console.log('Successfull Registeration');

            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const updateUserData = (user, id) => {
    return async function (dispatch) {
        let formData = new FormData();
        const { firstName, lastName, email, password, cnic,  image } = user;
        formData.append('firstName', firstName)
        formData.append('lastName', lastName)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('cnic', cnic)
        formData.append('testImage', image)
        
        try {
            let response = await fetch(`${APIURL}/api/post/updateUser/${id}`, {
                method: "PUT",
                body: formData,
            })
            const data = await response.json();
            dispatch(updateUser(data));
            if (data.status === 400) {
                console.log("User cannot be updated");
            } else {
                console.log('User successfully updated');
            }
        } catch (error) {
            console.log("yoyo",error);
        }
    }
}
export const deleteUserAccount = (id) => {
    return async function (dispatch) {
        try {
            let response = await fetch(`${APIURL}/api/post/deleteUser/${id}`, {
                method: "DELETE",
            })
            const data = await response.json();
            dispatch(deleteUser(data));
            if (data.status === 200) {
                console.log("User deleted successfully");


            } else {
                console.log('User cannot be deleted');

            }
        } catch (error) {
            console.log(error);
        }
    }
}
export const getUserData = (id) => {
    return async function (dispatch) {
        try {

            let response = await fetch(`${APIURL}/api/post/getUser/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "Application/json"
                }
            })
            const data = await response.json();
            dispatch(getUser(data));
        } catch (error) {
            console.log(error);
        }
    }
}
export const getSearchQuery = (query) =>{
    return async function(dispatch){
        try {
        const response = await fetch(`${APIURL}/api/post/searchQuery/${query}`,{
            method : "GET",
            headers:{
                "Content-Type" : "Application/json"
            }
        })
        const data = await response.json();
        dispatch(searchUser(data))
    } catch (error) {
            console.log(error);
    }
    }   
}






