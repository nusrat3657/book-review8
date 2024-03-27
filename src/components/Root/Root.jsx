import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div className='mx-auto lg:max-w-[1250px]'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;