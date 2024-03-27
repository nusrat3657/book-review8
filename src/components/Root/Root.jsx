import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';

const Root = () => {
    const navigation = useNavigation();
    return (
        <div className='mx-auto lg:max-w-[1250px]'>
            <Header></Header>
            {
                navigation.state === 'loading' ? <p>Loading...</p> : <Outlet></Outlet>
            }
            
        </div>
    );
};

export default Root;