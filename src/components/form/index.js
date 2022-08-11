import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { AddNewUser, getUserData, updateUserData } from '../../services/service';


const Form = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();

    const updateUser = useSelector(state => state.user.user);
    const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "", cnic: "", image: "", imageUrl: "" });

    let name, value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })

    }
    const submitForm = async (e) => {
        e.preventDefault();
        await dispatch(AddNewUser(user))
        navigate('/home');
    }

    const updateForm = async(e) => {
        e.preventDefault();
         await dispatch(updateUserData(user, params.id));
        navigate('/home');
    }
    useEffect(() => {
        if (params.id) {
            dispatch(getUserData(params.id))
        }
    }, [params])
    useEffect(() => {
        if (updateUser && params.id) {
            setUser({...user, ...updateUser})
        } 
    }, [updateUser]) 
    //usEffect re-render the functionallity whenever the update occurs in the dependent array(updateUser) 
    return (
        <>

            <div className="container mt-5 mb-5" >
                <form className='form  mt-5 mb-5' id='registerForm'>
                
                    <div className="form-group">
                        <label for="exampleInputEmail1">First Name</label>
                        <input type="text" name='firstName' value={user.firstName} onChange={handleInput} className="form-control" id="fname" aria-describedby="name" placeholder="Enter First Name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Last Name</label>
                        <input type="text" name='lastName' value={user.lastName} onChange={handleInput} className="form-control" id="lname" aria-describedby="name" placeholder="Enter Last Name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" value={user.email} onChange={handleInput} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" value={user.password} onChange={handleInput} name='password' className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label for="cnic">Cnic</label>
                        <input type="text" onChange={handleInput} value={user.cnic} name='cnic' className="form-control" id="cnic" placeholder="Enter Cnic" />
                    </div>
                    <div className="form-group">
                        {
                            user.imageUrl? <img  src={user.imageUrl} style={{ width: "70px", height: "50px", float: "right" }} className="img-fluid " ></img>:""
                        }
                        <label for="image">Upload image</label>                       
                        <input type="file"  onChange={(e) => {
                            setUser({ ...user, image: e.target.files[0], imageUrl: URL.createObjectURL(e.target.files[0]) })
                        }} name='imageUrl' id="testImage" className="form-control-file" />
                    </div>
                    {
                        params.id ? <button type="submit" onClick={updateForm} className="btn btn-primary mt-5 mb-5">Update</button> :
                            <button type="submit" onClick={submitForm} className="btn btn-primary mt-5 mb-5">Register</button>

                    }
                </form>
            </div>


        </>
    )
}

export default Form;