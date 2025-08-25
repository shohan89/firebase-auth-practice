import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const ProtectedRoute = ({ children }) => {
    const {user} = useContext(AuthContext);
    if(!user){
        return <div>
            <h2 className='font-bold text-2xl text-red-600'>Access Denied!</h2>
            <p className='text-lg'>You must be loggedIn.</p>
        </div>
    }
    else{
        return children;
    }
};

export default ProtectedRoute;