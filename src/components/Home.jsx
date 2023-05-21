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
            <h4 className="text-4xl font-bold">
            Welcome {user?.name}
            </h4>

            <div className="flex container items-center">
            
            </div>
        </div>
    );
};
export default Home;
