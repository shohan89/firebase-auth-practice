import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';

const ProtectedRoute = ({ children }) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    console.log("🚀 ~ ProtectedRoute ~ location:", location)
    if(user){
        return children;
    }
    else{
        return <Navigate to='/login' state={location.pathname} />;
    } 
};

export default ProtectedRoute;