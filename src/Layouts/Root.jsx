import { Outlet } from 'react-router';
import Nav from '../components/Nav';

const Root = () => {
    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    );
};

export default Root;