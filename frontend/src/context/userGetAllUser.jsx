import { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import axios from "axios"

const userGetAllUser = () => {
    const [allUser, setAllUser] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getUsers = async() => {
            setLoading(true);
            try {
                const token = Cookies.get("jwt");
                const res = await axios.get("/api/user/getUsersProfile", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    Credentials: "Include"
                });
                setAllUser(res.data.filteredUsers);
                setLoading(false);
            } catch (error) {
                console.log("Error in userGetAllUser", error);
            }
        }
        getUsers();
    }, []);
    return [allUser, loading]
}

export default userGetAllUser