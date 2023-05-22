import useAuthContext from "../context/AuthContext";
// import NewsAggregator from "../layouts/NewsAggregator";
import NewNewsAggregator from "../layouts/NewNewsAggregator";


const Home = (props) => {
    const { user } = useAuthContext(); 
    
    return (
        <div>
            <NewNewsAggregator />
        </div>
    );
};
export default Home;
