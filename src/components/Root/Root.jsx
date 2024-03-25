import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div className='mx-auto max-w-[1250px]'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;