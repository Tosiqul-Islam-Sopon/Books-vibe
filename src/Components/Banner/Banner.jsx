import banner from '../../assets/Images/banner.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-gray-100 play rounded-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                <img src={banner} className="w-[40%]" />
                <div className=''>
                    <h1 className='text-4xl font-bold mb-3'>Books to freshen</h1>
                    <h1 className='text-4xl font-bold mb-8'>up your bookshelf</h1>
                    <button className="btn bg-[#23BE0A] text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;