import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            HomePage
            <Link to={'/login'}>Login</Link>
        </div>
    );
};

export default HomePage;