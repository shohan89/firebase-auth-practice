import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from './AuthProvider';

const ProtectedRoute = ({ children }) => {
    const {user} = useContext(AuthContext);
    if(!user){
        return <div>
            <h2 className='font-bold text-2xl text-red-600'>Access Denied!</h2>
            <p className='text-lg'>You must be loggedIn.</p>
            <Navigate to='/login'></Navigate>
        </div>
    }
    else{
        return children;
    }
};

export default ProtectedRoute;