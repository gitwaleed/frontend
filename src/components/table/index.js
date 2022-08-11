import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllUsers, deleteUserAccount, getSearchQuery } from '../../services/service';
import {Link} from 'react-router-dom';
import './table.css'
const Table = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const [filter, setFilter] =useState("");
    const users = useSelector(state => state.user.users);

    
    const handleDelete = async(id) =>{
        await dispatch(deleteUserAccount(id));
        await dispatch(fetchAllUsers());  
    }
    const handleSearch = (e) =>{
        setQuery(e.target.value);
         dispatch(getSearchQuery(e.target.value));
    }
    const sortList = () =>{
        const filteredList = users.filter(user => user.firstName.toString().toLowerCase().includes(query.toLowerCase()));
        setFilter(filteredList);
    }

    useEffect(() => {
    dispatch(fetchAllUsers());
    }, [])
    useEffect(()=>{
        sortList()
    },[sortList])
    return (
        <>

      <div className="container">
      <div className="form-group">
        <input type="text" className="form-control search-bar" name='query' value={query} onChange={(e)=>{handleSearch(e)}} placeholder="Search"/>
      </div>
      </div>
                <div className="container mt-5">
                    <table className="table ">
                        <thead className='thead-dark'>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Cnic</th>
                                <th scope="col">Image</th>
                                <th scope="col" colSpan="2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filter.length > 0?  (filter.map((user, key) => {
                                    return (
                                        <tr key={key}>
                                            <td >{user._id}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.cnic}</td>
                                            <td><img src={user.imageUrl} alt="empty" width="100" height="70"/></td>
                                            <td><Link to={`/updateUser/${user._id}`}><button type="button"  className="btn btn-success">Update</button></Link></td>
                                            <td><button onClick={()=>{handleDelete(user._id)}} type="button" className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }))
                              :  <tr><td><b>No User Found</b></td></tr> }
                        </tbody>
                    </table>
                </div>
            </>
    )
}

export default Table