const Banner = () => {
    return (
        <div className="hero mt-10 h-[550px]  rounded-[30px]" style={{ backgroundImage: 'url(https://i.ibb.co/8dRzwtr/banner.png)' }}>
            <div className="max-w-md">
                <h1 className="playfair mb-10 text-6xl font-bold -ml-[500px] w-[520px]">Books to freshen up your bookshelf</h1>
                <button className="bg-[#23BE0A]  px-7 rounded-lg text-md text-white font-bold hover:bg-gray-300 btn -ml-[500px] worksans">View The List</button>
            </div>
        </div>
    );
};

export default Banner;