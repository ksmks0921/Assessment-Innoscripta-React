import useAuthContext from "../context/AuthContext";
// import NewsAggregator from "../layouts/NewsAggregator";
import NewNewsAggregator from "../layouts/NewNewsAggregator";


const Home = (props) => {
    const { user } = useAuthContext(); 
    
    return (
        <div className="max-w-7xl mx-auto mt-12">
            <NewNewsAggregator />
        </div>
    );
};
export default Home;
