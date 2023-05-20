import { useEffect } from "react";
import useAuthContext from "../context/AuthContext";


const Home = (props) => {
    const { user, getUser } = useAuthContext(); 
    useEffect(() => {
        if(!user) {
            getUser();
        }
    }, []);
    return (
        <div>
            {user?.name}
        </div>
    );
};
export default Home;
