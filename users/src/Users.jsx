import React, { useState, useEffect } from "react";
import dataBase from "./lib";

function Users() {

    const [users, setUsers] = useState("")
    const [usersFilter, setUsersFilter] = useState("")
   
    useEffect(()=>{
        let x = ""
        dataBase.forEach((e,i)=>{
            if (dataBase[i].name.toLowerCase().includes(users.toLowerCase()) && users !== "") {
                 x += dataBase[i].name + ", "
                
            } 
            
        })
        setUsersFilter(x)
    },[users])

    return (
        <>
            <input type="text" value={users} onChange={(e)=>{setUsers(e.target.value)}}/>
            <p >{usersFilter}</p>
        </>
    )

}
export default Users;