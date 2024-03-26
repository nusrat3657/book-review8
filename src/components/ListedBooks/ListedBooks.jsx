import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { SlLocationPin } from "react-icons/sl";
import { IoPeopleOutline } from "react-icons/io5";
import { BsSdCard } from "react-icons/bs";



const ListedBooks = () => {
    return (
        <div>
            <div classNameName='bg-[#131313]/5 h-28 rounded-xl my-8'>
                <h2 classNameName='text-2xl text-center font-bold pt-8'>Books</h2>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <div>
                        <section>
                            <div className="hero border-2 rounded-xl">
                                <div className="hero-content flex-col lg:flex-row">
                                    <img src="" className="max-w-sm rounded-lg shadow-2xl" />
                                    <div>
                                        <h1 className="playfair text-xl font-bold">World Cup Flags Football</h1>
                                        <p className="py-2">By: </p>
                                        <div className='lg:flex gap-4'>
                                            <p className='font-bold'>Tag</p>
                                            <div className='flex gap-1'>
                                                <SlLocationPin className='mt-1'></SlLocationPin><span>Year of Publishing: 1924</span>
                                            </div>
                                        </div>
                                        <div className="lg:flex gap-3">
                                            <div className='flex gap-1'>
                                                <IoPeopleOutline className='mt-1'></IoPeopleOutline><span>Publisher: Scribner</span>
                                            </div>
                                            <div className='flex gap-1'>
                                                <BsSdCard className='mt-1'></BsSdCard><span>Page 192</span>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='flex gap-4'>
                                            <button>1</button>
                                            <button>1</button>
                                            <button>1</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;