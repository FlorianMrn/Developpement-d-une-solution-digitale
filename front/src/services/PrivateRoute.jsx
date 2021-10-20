import {Redirect, Route} from "react-router-dom";
import { getIsAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => {

    const auth = getIsAuthenticated();

    return (
        <Route {...rest} render={(props) => (
            auth 
                ? <Component {...props} {...rest} />
                : <Redirect to='/login' />
            )} 
        />
    );
};

export default PrivateRoute;