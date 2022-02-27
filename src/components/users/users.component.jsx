import React,{useEffect,useState} from "react";
import './users.styles.css';
import UserDetails from "../userdetails/userdetails.component";
import User from "../user/user.component";

const Users = () => {

const [users,setUsers]= useState([]);
const [userDetails, setUserDetails] = useState();


const getUserData = async() => {
    try{
        const apiUrl = `https://jsonplaceholder.typicode.com/users`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setUsers(data);
    }catch(error){
        console.log(error);
    }
}
const getUserDetails = async(id) => {
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    setUserDetails(data);
}
const detailsBtnHandler = (id) => {
    getUserDetails(id);
}
useEffect(()=>{
    getUserData();
},[])
return(
    <div>
        <h1 className="usr-found">{`Users Found: ${users.length}`}</h1>
        {userDetails ? <UserDetails userDetails={userDetails}/>:''}
        <div className="user-container">
            {users.map((user)=>(
                <User key={user.id} user={user} detailsBtnHandler={detailsBtnHandler}/>
            ))}
        </div>
    </div>
)
}

export default Users;